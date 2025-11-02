import React from "react";

import { PointerHighlight } from "@/components/ui/pointer-highlight";

import {
  PhoneCall,
  Clock,
  Database,
  BarChart2,
  TrendingUp,
  Headphones,
} from "lucide-react";

const cards = [
  {
    id: 1,
    title: "Smart Auto Dialer",
    icon: PhoneCall,
    pointerColor: "text-purple-500",
    rectangleClass:
      "bg-purple-100 dark:bg-purple-900 border-purple-300 dark:border-purple-700 leading-loose",
    pointerContainerClass: "inline-block mr-1",
    description: "for 24/7 inbound & outbound engagement.",
    bgColor: "from-purple-100 to-indigo-200",
    bodyText:
      "Reach more customers faster with AI‑powered auto dialing and smart retry logic.",
  },
  {
    id: 2,
    title: "Instant Web Calls",
    icon: Headphones,
    pointerColor: "text-blue-500",
    rectangleClass:
      "bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700 leading-loose",
    pointerContainerClass: "inline-block mx-1",
    description: "that adapts to tone, context, and intent.",
    bgColor: "from-blue-200 to-sky-200",
    bodyText:
      "Let website visitors call you directly for real‑time voice support.",
  },
  {
    id: 3,
    title: "Ultra‑Low Latency",
    icon: Clock,
    pointerColor: "text-yellow-500",
    rectangleClass:
      "bg-yellow-100 dark:bg-yellow-900 border-yellow-300 dark:border-yellow-700 leading-loose",
    pointerContainerClass: "inline-block ml-1",
    description: "for any volume, without added cost.",
    bgColor: "from-yellow-200 to-lime-200",
    bodyText:
      "Crystal‑clear calls in 20+ languages with near‑instant response time.",
  },
  {
    id: 4,
    title: "CRM & WhatsApp Sync",
    icon: Database,
    pointerColor: "text-green-500",
    rectangleClass:
      "bg-green-100 dark:bg-green-900 border-green-300 dark:border-green-700 leading-loose",
    pointerContainerClass: "inline-block ml-1",
    description: "with enterprise-grade security.",
    bgColor: "from-green-200 to-emerald-200",
    bodyText:
      "Sync every call, contact and message seamlessly into your CRM and WhatsApp.",
  },
  {
    id: 5,
    title: "Smart Call Handoff",
    icon: TrendingUp,
    pointerColor: "text-red-500",
    rectangleClass:
      "bg-red-100 dark:bg-red-900 border-red-300 dark:border-red-700 leading-loose",
    pointerContainerClass: "inline-block mr-1",
    description: "for healthcare, finance, and more.",
    bgColor: "from-red-100 to-orange-200",
    bodyText:
      "Transfer live calls to human agents smoothly—without losing context.",
  },
  {
    id: 6,
    title: "Call Insights Dashboard",
    icon: BarChart2,
    pointerColor: "text-pink-500",
    rectangleClass:
      "bg-pink-100 dark:bg-pink-900 border-pink-300 dark:border-pink-700 leading-loose",
    pointerContainerClass: "inline-block mx-1",
    description: "with lower CAC and higher LTV.",
    bgColor: "from-pink-100 to-rose-200",
    bodyText:
      "Track call trends, agent performance and customer engagement all in one place.",
  },
];

function Features() {
  return (
    <div className="px-4 py-20 mx-auto max-w-7xl">
      <h2 className="text-center mb-1 text-3xl font-extrabold leading-tight text-gray-900">
        Redefining Conversations at Scale
      </h2>
      <p className="text-center mb-6 sm:mb-6 text-lg text-gray-500">
        AI that sells, supports, and learns — built for real-world volume,
        regulation, and ROI.
      </p>
      <br />
      <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition-shadow duration-200 p-3"
          >
            {/* Top section with icon & background */}
            <div
              className={`h-32 w-full rounded-lg bg-linear-to-r ${card.bgColor} relative overflow-hidden`}
            >
              <div className="flex h-full items-center justify-center">
                <div className="p-3 rounded-full bg-white bg-opacity-80 backdrop-blur-md shadow-md">
                  <card.icon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                </div>
              </div>
            </div>

            {/* Text section */}
            <div className="mt-5 text-base font-semibold text-gray-800 dark:text-gray-100">
              <div className="text-center">
                <PointerHighlight
                  rectangleClassName={card.rectangleClass}
                  pointerClassName={`${card.pointerColor} h-3 w-3`}
                  containerClassName={card.pointerContainerClass}
                >
                  <span className="relative z-10">{card.title}</span>
                </PointerHighlight>
              </div>
            </div>

            <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400 text-center">
              {card.bodyText}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(Features);
