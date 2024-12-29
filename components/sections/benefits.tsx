"use client";

import { useState } from "react";
import { ArrowUpDown, Edit, EyeOff } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Edit,
    title: "Rename",
    description: "Modify how trade-in options appear to your customers.",
  },
  {
    icon: ArrowUpDown,
    title: "Reorder",
    description:
      "Sort trade-in conditions and values based on your business rules.",
  },
  {
    icon: EyeOff,
    title: "Hide",
    description:
      "Control visibility of trade-in options based on customer segments.",
  },
];

export default function BenefitsSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="bg-white py-24" id="benefits">
      <div className="container">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-16 max-w-[800px]">
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

          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div className="mb-8 -mx-6 overflow-auto scrollbar-none">
              <div className="flex px-6 gap-4 min-w-max">
                {features.map((feature, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={cn(
                      "flex items-center gap-2 rounded-lg px-4 py-2 text-base",
                      activeFeature === index
                        ? "bg-white text-black shadow-[0_1px_1px_-1px_rgba(0,0,0,0.08),0_2px_2px_-1px_rgba(0,0,0,0.08),0_0px_0px_1px_rgba(0,0,0,0.06)]"
                        : "text-gray-500"
                    )}
                  >
                    <feature.icon className="h-5 w-5" />
                    <span className="font-medium">{feature.title}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg"
                alt={`${features[activeFeature].title} preview`}
                width={800}
                height={600}
                className="w-full"
              />
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid gap-16 lg:grid-cols-[400px,1fr]">
            <div className="flex flex-col gap-8">
              {features.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`flex flex-col gap-4 rounded-lg border bg-white p-6 text-left transition-shadow hover:shadow-lg ${
                    activeFeature === index ? "border-blue-600 shadow-lg" : ""
                  }`}
                >
                  <feature.icon
                    className={`h-6 w-6 ${
                      activeFeature === index
                        ? "text-blue-600"
                        : "text-gray-400"
                    }`}
                  />
                  <div>
                    <h3 className="mb-1 text-lg font-medium">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            <div className="relative rounded-xl bg-gray-50 p-8">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white/50 backdrop-blur-sm"></div>
              <div className="relative">
                <Image
                  src="/placeholder.svg"
                  alt={`${features[activeFeature].title} preview`}
                  width={800}
                  height={600}
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
