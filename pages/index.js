import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ParallaxBackground from '@/components/ParallaxBackground';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  useEffect(() => {
    gsap.from('.fade-up', {
      y: 40,
      opacity: 0,
      duration: 0.9,
      stagger: 0.18,
      scrollTrigger: { trigger: '.fade-up-parent', start: 'top 80%' }
    });
  }, []);

  return (
    <>
      <Head>
        <title>Naman Mahajan | Architect of digital narratives</title>
        <meta name="description" content="Premium SEO, copywriting, video editing, and web development workspace." />
      </Head>
      <div className="relative">
        <ParallaxBackground />
        <section className="section-pad pt-40 text-center">
          <h1 className="fade-up text-4xl font-bold md:text-6xl">Architect of digital narratives</h1>
          <p className="fade-up mx-auto mt-8 max-w-4xl whitespace-pre-line text-lg text-white/90">
            {`You don’t need another “content writer.”
You don’t need someone who just throws words on a page and hopes Google notices.
You need an asset — something that works for you 24/7, brings traffic while you sleep, and quietly turns visitors into paying customers.
That’s where I come in.
I don’t just write blogs; I build conversion machines.
High-end cinematic editing meets data-driven SEO strategy.`}
          </p>
          <Link href="/workspace" className="btn-primary magnetic mt-10 inline-flex">
            Explore my workspace
          </Link>
        </section>

        <section className="section-pad fade-up-parent">
          <h2 className="fade-up text-3xl font-bold text-luxeGold md:text-4xl">The Philosophy</h2>
          <p className="fade-up mt-4 max-w-4xl whitespace-pre-line text-white/85">
            {`Why Naman Mahajan?
In a world flooded with AI-generated noise, I provide the human edge. Every word is calculated using psychological triggers and technical SEO parameters. My mission is to elevate brands from “just another link” to “the only authority” in their niche.`}
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="fade-up glass rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-luxeCyan">Technical SEO</h3>
              <p className="mt-3 text-white/80">
                Keywords aren't just words; they are search intent blueprints. I map out the journey of your user from the first click to the final purchase.
              </p>
            </article>
            <article className="fade-up glass rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-luxeCyan">Cinematic Art</h3>
              <p className="mt-3 text-white/80">
                Visual storytelling that captures attention in the first 2 seconds. From color grading to sound design, every frame matters.
              </p>
            </article>
            <article className="fade-up glass rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-luxeCyan">The 1% Rule</h3>
              <p className="mt-3 text-white/80">
                I collaborate selectively with brands that are committed to operating at the top tier of their industry.
              </p>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}
