import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
export default function Hero() {
  return (
    <section className="bg-white py-32 mx-auto" id="hero">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 container">
        <Badge variant={"outline"}>Coming Soon</Badge>
        <h1 className="pb-1 text-center text-6xl font-medium md:text-7xl lg:text-8xl ">
          The next generation of{" "}
          <span className="bg-gradient-to-b from-slate-700 to-[#2e7fa2] bg-clip-text text-transparent">
            trade-in
          </span>{" "}
          on Shopify
        </h1>
        <p className="text-center md:w-5/6 md:text-lg lg:w-full">
          Open new revenue streams and boost customer retention by offering
          trade-in online and in-store.
        </p>

        <Button asChild>
          <Link href="#waitlist" className="gap-2 group">
            Early access
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
