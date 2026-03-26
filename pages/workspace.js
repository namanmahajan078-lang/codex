import Head from 'next/head';
import { useState } from 'react';
import ServiceSection from '@/components/ServiceSection';
import PricingModal from '@/components/PricingModal';
import ParallaxBackground from '@/components/ParallaxBackground';
import { copywriting, videoEditing, webDevelopment } from '@/lib/packages';

export default function WorkspacePage() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const onSelect = (pkg) => {
    setSelected(pkg);
    setOpen(true);
  };

  const onCheckout = async (packageId) => {
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ packageId })
    });
    const data = await response.json();
    if (data?.url) window.location.href = data.url;
  };

  return (
    <>
      <Head>
        <title>Workspace | Naman Mahajan</title>
      </Head>
      <div className="relative section-pad pt-36">
        <ParallaxBackground />
        <h1 className="text-4xl font-bold">Workspace</h1>
        <p className="mt-3 max-w-2xl text-white/80">Select a package and start with DM or secure Stripe checkout.</p>

        <ServiceSection title="Copywriting Packages" items={copywriting} onSelect={onSelect} />
        <ServiceSection title="Video Editing Packages" items={videoEditing} onSelect={onSelect} />
        <ServiceSection title="Web Development Packages" items={webDevelopment} onSelect={onSelect} />

        <section className="mt-16 max-w-2xl">
          <h2 className="text-3xl font-bold text-luxeGold">Contact Naman</h2>
          <form
            action={process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/your-form-id"}
            method="POST"
            className="glass mt-6 space-y-4 rounded-2xl p-6"
          >
            <input name="name" required placeholder="Name" className="w-full rounded-lg bg-black/30 p-3" />
            <input name="email" type="email" required placeholder="Email" className="w-full rounded-lg bg-black/30 p-3" />
            <select name="serviceInterest" className="w-full rounded-lg bg-black/30 p-3">
              <option>Copywriting</option>
              <option>Video Editing</option>
              <option>Web Development</option>
            </select>
            <textarea name="message" required placeholder="Message" rows={5} className="w-full rounded-lg bg-black/30 p-3" />
            <button className="btn-primary magnetic" type="submit">
              Send via Formspree
            </button>
          </form>
        </section>
        <PricingModal open={open} onClose={() => setOpen(false)} selectedPackage={selected} onCheckout={onCheckout} />
      </div>
    </>
  );
}
