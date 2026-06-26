import Port from "@/components/PortCard";
import Hero from "@/components/Hero";
import WhoAreWe from "@/components/Whoarewe";
import Mission from "@/components/Mission";
import Service from "@/components/ServiceCard";
import Client from "@/components/Client"; 
import CTA from "@/components/CTA";


export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Who We Are  */}
      <WhoAreWe />

      {/* Mission */}
      <Mission />

      {/* Services */}
      <Service />

      {/* Ports */}
      <Port />

      {/* Clients */}
      <Client />

      {/* CTA */}
      <CTA />
    </>
  );
}
