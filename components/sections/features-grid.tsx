import { Gift, Mail, Settings, ShoppingCart } from "lucide-react";

import Image from "next/image";

export function FeaturesGrid() {
  return (
    <section className="bg-white py-24" id="features">
      <div className="mx-auto container">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Powerful features
            <br />
            for every need
          </h2>
          <p className="mt-4 max-w-[600px] text-base text-gray-600">
            Take advantage of our natively built features to take full control
            of your trade-in program.
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 grid-rows-[380px_380px] gap-y-4 lg:grid-cols-4 lg:gap-4 ">
          <article className="group relative overflow-hidden rounded-lg border bg-background p-4 transition-shadow hover:shadow-lg">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <ShoppingCart className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-medium">Built for Shopify</h3>
            <p className="text-muted-foreground text-base">
              Meets Shopify&apos;s highest quality standards for speed and
              reliability.
            </p>
          </article>
          <article className="group relative overflow-hidden rounded-lg border bg-background p-4 transition-shadow hover:shadow-lg lg:col-span-2">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Settings className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-medium">
              Advanced trade-in rules
            </h3>
            <p className="text-muted-foreground text-base">
              Show and hide options based on product, customer, or custom rules.
            </p>
            <div className="mt-4 aspect-[2/1] overflow-hidden rounded-lg border bg-muted/50">
              <Image
                src="/placeholder.svg"
                alt="Advanced rules preview"
                width={800}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </article>
          <article className="group relative overflow-hidden rounded-lg border bg-background p-4 transition-shadow hover:shadow-lg">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-medium">Seamless communication</h3>
            <p className="text-muted-foreground text-base">
              Automated emails and notifications keep customers informed
              throughout the process.
            </p>
            <div className="mt-4 aspect-[2/1] overflow-hidden rounded-lg border bg-muted/50">
              <Image
                src="/placeholder.svg"
                alt="Communication preview"
                width={800}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </article>
          <article className="group relative overflow-hidden rounded-lg border bg-background p-4 transition-shadow hover:shadow-lg lg:col-span-2">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Gift className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-medium">Flexible payouts</h3>
            <p className="text-muted-foreground text-base">
              Offer store credit, gift cards, or custom discount codes as
              trade-in value.
            </p>
          </article>
          <article className="group relative overflow-hidden rounded-lg border bg-background p-4 transition-shadow hover:shadow-lg lg:col-span-2">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Gift className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-medium">Flexible payouts</h3>
            <p className="text-muted-foreground text-base">
              Offer store credit, gift cards, or custom discount codes as
              trade-in value.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
