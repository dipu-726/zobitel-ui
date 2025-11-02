import React, { useState } from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  CalendarCheck,
  MessageSquare,
  CreditCard,
  Headphones,
  UserCheck,
  Workflow,
  Play,
  Pause,
  PieChart,
  HeartHandshake,
} from "lucide-react";

const useCasesData = [
  {
    icon: (
      <UserCheck className="w-12 h-12 text-indigo-500 bg-indigo-50 p-2 rounded-lg" />
    ),
    title: "Appointment Booking Calls",
    description:
      "AI agent answers patient queries, checks availability, and confirms appointments in seconds.",
    stats: [
      {
        value: <CalendarCheck className="w-5 h-5 text-gray-700" />,
        label: "Hands-free scheduling",
      },
      {
        value: <MessageSquare className="w-5 h-5 text-gray-700" />,
        label: "Natural two-way conversations",
      },
    ],
    buttonText: "Live Demo",
  },
  {
    icon: (
      <CreditCard className="w-12 h-12 text-emerald-500 bg-emerald-50 p-2 rounded-lg" />
    ),
    title: "Payment & Renewal Reminders",
    description:
      "AI follows up with customers on pending payments or renewals — friendly, consistent, and on time.",
    stats: [
      {
        value: <CreditCard className="w-5 h-5 text-gray-700" />,
        label: "Automated reminders",
      },
      {
        value: <HeartHandshake className="w-5 h-5 text-gray-700" />,
        label: "Polite and persistent tone",
      },
    ],
    buttonText: "Live Demo",
  },
  {
    icon: (
      <Workflow className="w-12 h-12 text-blue-500 bg-blue-50 p-2 rounded-lg" />
    ),
    title: "Lead Qualification Calls",
    description:
      "AI automatically engages new leads, gathers intent, and routes hot prospects to your team or CRM.",
    stats: [
      {
        value: <PieChart className="w-5 h-5 text-gray-700" />,
        label: "Real-time lead scoring",
      },
      {
        value: <CalendarCheck className="w-5 h-5 text-gray-700" />,
        label: "CRM auto-sync ready",
      },
    ],
    buttonText: "Live Demo",
  },

  {
    icon: (
      <Headphones className="w-12 h-12 text-rose-500 bg-rose-50 p-2 rounded-lg" />
    ),
    title: "Customer Support Calls",
    description:
      "AI agent answers FAQs, logs tickets, and transfers complex issues to human agents seamlessly.",
    stats: [
      {
        value: <Headphones className="w-5 h-5 text-gray-700" />,
        label: "Instant query handling",
      },
      {
        value: <CalendarCheck className="w-5 h-5 text-gray-700" />,
        label: "Smooth handoff to agents",
      },
    ],
    buttonText: "Live Demo",
  },
];

// Lucide icons for play/pause

function UseCaseCard({ data }) {
  const { icon, title, description, stats, buttonText } = data;
  const [isPlaying, setIsPlaying] = useState(false);

  // You can attach real audio logic here later
  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
    // Example placeholder for audio functionality:
    // if (!isPlaying) {
    //   audioRef.current.play();
    // } else {
    //   audioRef.current.pause();
    // }
  };

  return (
    <div className="flex flex-col p-6 bg-white rounded-2xl shadow-sm max-w-sm transition hover:shadow-md h-full">
      {/* Icon */}
      <div className="relative">{icon}</div>

      {/* Title */}
      <p className="mt-4 text-xl font-bold md:mt-8 line-clamp-1">{title}</p>

      {/* Description */}
      <p className="mt-2 text-sm text-gray-600 line-clamp-3 h-16 text-pretty">
        {description}
      </p>

      {/* Stats */}
      <div className="mt-3 flex flex-col justify-start gap-3 text-start md:mt-4">
        {stats?.map((stat, i) => (
          <div key={i} className="flex items-center gap-2">
            {stat.value}
            <p className="text-xs text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      <br />
      {/* Play / Pause Button */}
      <button
        type="button"
        onClick={handlePlayPause}
        className="mt-5 inline-flex items-center gap-2 rounded-md border border-black bg-black px-4 py-2 text-sm text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.97] w-auto self-start"
      >
        {isPlaying ? (
          <>
            <Pause className="w-4 h-4" />
            Pause Demo
          </>
        ) : (
          <>
            <Play className="w-4 h-4" />
            Play Demo
          </>
        )}
      </button>
    </div>
  );
}

const UseCases = () => {
  const plugin = React.useRef(Autoplay({ delay: 1500 }));

  return (
    <div className="px-4 py-20 mx-auto max-w-7xl">
      <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">
        Zobotel AI Use Cases
      </h2>
      <p className="mb-6 sm:mb-6 text-lg">
        Zobotel AI turns voice interactions into automated workflows that ease
        workload and enhance satisfaction.
      </p>
      <div className="p-8">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {useCasesData.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <UseCaseCard data={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default React.memo(UseCases);
