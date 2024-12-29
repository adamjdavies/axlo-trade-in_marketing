import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function FAQ() {
    return (
      <section className="container py-24" id="faq">
        <div className="mx-auto max-w-[800px]">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Frequently asked questions</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to know about our trade-in solution
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is the setup time?</AccordionTrigger>
              <AccordionContent>
                Setup typically takes less than 30 minutes. Our Shopify app handles most of the configuration
                automatically, and our team is available to help if needed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do payouts work?</AccordionTrigger>
              <AccordionContent>
                You can offer multiple payout options including store credit, gift cards, and discount codes.
                All payouts are handled automatically through our platform.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it Shopify exclusive?</AccordionTrigger>
              <AccordionContent>
                Currently, we are focused on providing the best possible experience for Shopify merchants.
                Support for other platforms may be added in the future.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What support do you offer?</AccordionTrigger>
              <AccordionContent>
                We offer email support for all plans, with priority support for Pro plans and dedicated
                support for Enterprise customers.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    )
  }
  
  