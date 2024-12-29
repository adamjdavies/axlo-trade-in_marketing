import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

export function Pricing() {
  return (
    <section className="bg-white py-24 mx-auto" id="pricing">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the plan that&apos;s right for your business
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="relative transition-shadow hover:shadow-xl">
            <CardHeader>
              <CardTitle>Starter</CardTitle>
              <CardDescription>
                Perfect for small stores just getting started
              </CardDescription>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-4">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" /> Up to 50
                  trade-ins/month
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" /> Basic email
                  notifications
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" /> Store credit
                  payouts
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
            </CardFooter>
          </Card>
          <Card className="relative transition-shadow hover:shadow-xl">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
              Popular
            </div>
            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <CardDescription>
                For growing businesses with more needs
              </CardDescription>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">$79</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-4">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" /> Up to 200
                  trade-ins/month
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" /> Custom email
                  templates
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" /> Multiple payout
                  options
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" /> Priority support
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
            </CardFooter>
          </Card>
          <Card className="relative transition-shadow hover:shadow-xl">
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>
                For large stores with custom requirements
              </CardDescription>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">Custom</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-4">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" /> Unlimited trade-ins
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" /> Custom integration
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" /> Dedicated support
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" /> SLA & custom
                  contract
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Contact Sales
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
