import Hero from "@/components/home/hero";
import About from "@/components/home/about";
import Features from "@/components/home/features";
import Solutions from "@/components/home/solutions";
import Metrics from "@/components/home/metrics";
import ContactUs from "@/components/home/contact-us";
import Partners from "@/components/home/partners";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Solutions />
      <Metrics />
      <div className="relative w-screen h-screen -my-52 z-50  scale-x-125">
        <Image src="/line-bar.svg" alt="Line bar" fill className="object-contain absolute top-0 left-0" />
      </div>
      <Partners />
      <ContactUs />
    </>
  );
}
