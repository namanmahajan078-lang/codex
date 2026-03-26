import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThreeDBackground from '@/components/ThreeDBackground';
import LiquidTransitionWrapper from '@/components/LiquidTransitionWrapper';

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen">
      <ThreeDBackground />
      <Navbar />
      <LiquidTransitionWrapper>{children}</LiquidTransitionWrapper>
      <Footer />
    </div>
  );
}
