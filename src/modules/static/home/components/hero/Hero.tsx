import React, { useState, useEffect } from "react";
import IphoneMockUp from "@/assets/iphoneSkeleton.webp";
import { GridPattern } from "@/components/ui/grid-pattern";
import { WordRotate } from "@/components/ui/word-rotate";
import { cn } from "../../../../../lib/utils";

const PHRASES = [
  "Customer Outreach",
  "Lead Qualification",
  "Customer Surveys",
  "Appointment Scheduling",
  "Customer Support",
  "Feedback Collection",
  "Sales Follow-ups",
  "Customer Onboarding",
  "Business Operations",
];

const COUNTRIES = [
  { code: "+91", name: "India", flag: "🇮🇳" },
  { code: "+1", name: "USA", flag: "🇺🇸" },
  { code: "+971", name: "UAE", flag: "🇦🇪" },
  { code: "+44", name: "Great Britain", flag: "🇬🇧" },
  { code: "+61", name: "Australia", flag: "🇦🇺" },
];

const PhoneCard = () => {
  const [hasRequestedCall, setHasRequestedCall] = useState(false);
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const hasCalled = localStorage.getItem("azna_call_requested");
    if (hasCalled) {
      setHasRequestedCall(true);
    }
  }, []);

  const handleLetsTalkV2 = () => {
    window.open("https://aznaai.com/connect/outbound/dialer", "_blank");
  };

  return (
    <div className="w-full">
      {/* Top Section */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex flex-col">
          <span className="lg:text-lg text-sm font-bold text-black">
            Try Azna Connect Now
          </span>
          <span className="text-xs lg:text-sm text-black">
            Scale your operations effortlessly 🎉
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-200"></div>

      {/* Input or Success Message */}
      <div className="flex flex-col px-4 py-6 gap-4 text-sm">
        {hasRequestedCall ? (
          <div className="text-green-700 bg-green-100 p-4 rounded-lg">
            📞 You'll receive a call shortly from Azna. We're excited to connect
            with you!
          </div>
        ) : (
          <>
            <div className="flex gap-2">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="rounded-lg border border-neutral-300 px-2 bg-white focus:outline-none focus:ring-2 focus:ring-black text-3xl appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 0.5rem center",
                  paddingRight: "1.5rem",
                }}
              >
                {COUNTRIES.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.flag}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 rounded-lg border border-neutral-300 px-4 py-2 bg-white placeholder-gray-400 focus:outline-none text-xs"
              />
            </div>
            <button
              onClick={handleLetsTalkV2}
              className="w-full bg-black text-white rounded-lg py-2 font-semibold hover:bg-neutral-800 transition disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Connecting..." : "Let's Talk"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section
      className={`overflow-hidden! min-h-screen px-4 pt-8 lg:pt-24 pb-12 mx-auto max-w-7xl`}
    >
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"2 2"}
        className={cn(
          "mask-[radial-gradient(60vw_circle_at_center,white,transparent)]"
        )}
      />
      <div className="w-full mx-auto md:w-11/12 xl:w-9/12 text-center">
        <h1 className="font-sans font-bold mb-6 sm:mb-10 text-3xl tracking-normal text-gray-900 md:text-4xl lg:text-6xl md:tracking-tight">
          <div className="pb-2">AI Agents That Help You Scale</div>
          <WordRotate
            className="relative inline-block text-transparent bg-clip-text bg-linear-to-r from-green-400 to-purple-500 md:text-left text-center selection:text-black"
            duration={2000}
            words={PHRASES}
          />
        </h1>
        <p className="px-0 mb-6 text-sm text-gray-600 md:text-lg sm:px-24">
          Reach Everyone. Miss No One. Make 1000s of Calls per Hour.
        </p>
      </div>

      <div className="w-full flex justify-center items-center relative mt-4">
        <div className="relative w-[95%] lg:w-[380px]">
          <img
            className="w-full object-contain"
            src={IphoneMockUp}
            alt="iphone-mockup"
          />
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%]">
            <PhoneCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
