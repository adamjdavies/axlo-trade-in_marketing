"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <section className="bg-white py-24 mx-auto" id="waitlist">
      <div className="mx-auto max-w-[800px] rounded-2xl border bg-muted/50 p-8 md:p-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Start accepting trade-ins today
          </h2>
          <p className="text-lg text-muted-foreground">
            Join our early access program and be among the first to transform
            your Shopify store
          </p>
        </div>
        {isSubmitted ? (
          <div className="mt-8 text-center">
            <h3 className="text-xl font-medium">Thanks for joining!</h3>
            <p className="mt-2 text-muted-foreground">
              We&apos;ll be in touch soon with your early access invitation.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-sm flex-col gap-4"
          >
            <div className="grid gap-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white"
              />
            </div>
            <Button type="submit" size="lg" disabled={isSubmitting}>
              {isSubmitting ? (
                "Joining..."
              ) : (
                <>
                  Join waitlist <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              Limited spots available for early access program
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
