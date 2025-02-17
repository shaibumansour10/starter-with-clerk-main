import BoldHeading from "@/components/BoldHeading";
import { currentUser } from "@clerk/nextjs/server";
import { Check } from "lucide-react";
import React from "react";

export default async function page() {
  const user = await currentUser();
  console.log(user?.emailAddresses);
  const plans = [
    {
      title: "Starter",
      description: "Best option for personal use & for your next project",
      price: 29,
      features: [
        " Individual configuration",
        "No setup, or hidden fees",
        "Team size: 1 developer",
        "Premium support: 6 months",
        "Free updates: 6 months",
      ],
    },
    {
      title: "Company",
      description: "Relevant for multiple users, extended & premium support.",
      price: 99,
      features: [
        " Individual configuration",
        "No setup, or hidden fees",
        "Team size: 10 developers",
        "Premium support: 24 months",
        "Free updates: 24 months",
      ],
    },
    {
      title: "Enterprise",
      description:
        "Best for large scale uses and extended redistribution rights.",
      price: 29,
      features: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 100+ developers",
        "Premium support: 36 months",
        "Free updates: 36 months",
      ],
    },
  ];
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <BoldHeading heading="Pricing" />
          <p className="mb-5 pt-3 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            This is Our simplified pricing , save 25% off for every package for
            a limited period of time -{user?.emailAddresses[0].emailAddress}
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {plans.map((plan, i) => {
            return (
              <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 className="mb-4 text-2xl font-semibold">{plan.title}</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  {plan.description}
                </p>
                <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">
                    ${plan.price}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    /month
                  </span>
                </div>

                <ul role="list" className="mb-8 space-y-4 text-left">
                  {plan.features.map((feature, i) => {
                    return (
                      <li key={i} className="flex items-center space-x-3">
                        <Check className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />

                        <span>{feature}</span>
                      </li>
                    );
                  })}
                </ul>
                <a
                  href="#"
                  className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                >
                  Get started
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
