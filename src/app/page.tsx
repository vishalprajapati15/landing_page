import Hero from "@/components/home/Hero";
import ServicesMarquee from "@/components/home/ServicesMarquee";
import ServicesSection from "@/components/home/ServicesSection";
import WhatsAppCTA from "@/components/home/WhatsAppCTA";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-[#030712] font-sans dark:bg-black">

      <Hero/>
      <ServicesMarquee/>
      <ServicesSection/>
      <WhatsAppCTA/>
      
    </div>
  );
}
