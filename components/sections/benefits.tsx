"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Edit, ArrowUpDown, EyeOff } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Edit,
    title: "Rename",
    description: "Modify how trade-in options appear to your customers.",
    contentSrc: "/placeholder.svg",
  },
  {
    icon: ArrowUpDown,
    title: "Reorder",
    description:
      "Sort trade-in conditions and values based on your business rules.",
    contentSrc: "/placeholder.svg",
  },
  {
    icon: EyeOff,
    title: "Hide",
    description:
      "Control visibility of trade-in options based on customer segments.",
    contentSrc: "/placeholder.svg",
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-white container py-24" id="benefits">
      <div className="mx-auto w-full">
        <div className="mb-10">
          <h2 className="mb-6 text-4xl font-medium tracking-tight sm:text-5xl">
            Customize every detail.
            <br />
            Both big and small.
          </h2>
          <p className="text-xl text-gray-600">
            Fine-tune how your trade-in program works with powerful
            customization options.
          </p>
        </div>

        <Tabs defaultValue={features[0].title.toLowerCase()} className="w-full">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            <TabsList className="lg:hidden mb-8 h-auto w-auto justify-start overflow-x-auto p-1 scrollbar-none">
              {features.map((feature) => (
                <TabsTrigger
                  key={feature.title}
                  value={feature.title.toLowerCase()}
                  className="flex items-center gap-2 rounded-lg px-4 py-2 text-base data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-[0_1px_1px_-1px_rgba(0,0,0,0.08),0_2px_2px_-1px_rgba(0,0,0,0.08),0_0px_0px_1px_rgba(0,0,0,0.06)]"
                >
                  <feature.icon className="h-5 w-5" />
                  <span className="font-medium">{feature.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {features.map((feature) => (
              <TabsContent
                key={feature.title}
                value={feature.title.toLowerCase()}
              >
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src={feature.contentSrc}
                    alt={`${feature.title} preview`}
                    width={600}
                    height={600}
                    className="w-full"
                  />
                </div>
              </TabsContent>
            ))}
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid gap-16 lg:grid-cols-[400px,1fr] w-full">
            <TabsList className="flex flex-col gap-4 h-fit bg-transparent p-0">
              {features.map((feature) => (
                <TabsTrigger
                  key={feature.title}
                  value={feature.title.toLowerCase()}
                  className={cn(
                    "w-full flex flex-col gap-4 rounded-lg border bg-white p-4 text-left transition-shadow hover:shadow-lg h-auto items-start",
                    "data-[state=active]:border-blue-600 data-[state=active]:shadow-lg"
                  )}
                >
                  <feature.icon className="h-5 w-5 data-[state=active]:text-blue-600 data-[state=inactive]:text-gray-400" />
                  <div className="flex flex-col items-start text-wrap ">
                    <h3 className="mb-1 font-medium">{feature.title}</h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {features.map((feature) => (
              <TabsContent
                key={feature.title}
                value={feature.title.toLowerCase()}
                className="mt-0 h-full"
              >
                <div className="rounded-xl bg-gray-50 h-full w-full relative">
                  <Image
                    src={feature.contentSrc}
                    alt={`${feature.title} preview`}
                    fill
                    className="rounded-lg object-cover p-8"
                  />
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
