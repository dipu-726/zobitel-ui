import React from "react";

const DATA = [
  {
    id: 1,
    flag: "🇺🇸",
    title: "English",
    description: "4 Voices",
    voicesCount: 4,
  },
  {
    id: 2,
    flag: "🇪🇸",
    title: "Spanish",
    description: "4 Voices",
    voicesCount: 4,
  },
  {
    id: 3,
    flag: "🇫🇷",
    title: "French",
    description: "4 Voices",
    voicesCount: 4,
  },
  {
    id: 4,
    flag: "🇩🇪",
    title: "German",
    description: "4 Voices",
    voicesCount: 4,
  },
  {
    id: 5,
    flag: "🇨🇳",
    title: "Mandarin Chinese",
    description: "4 Voices",
    voicesCount: 4,
  },
  {
    id: 6,
    flag: "🇯🇵",
    title: "Japanese",
    description: "4 Voices",
    voicesCount: 4,
  },
  {
    id: 7,
    flag: "🇮🇳",
    title: "Hindi",
    description: "4 Voices",
    voicesCount: 4,
  },
  {
    id: 8,
    flag: "🇵🇹",
    title: "Portuguese",
    description: "4 Voices",
    voicesCount: 4,
  },
];

interface LanguageProps {
  title?: string;
  data?: typeof DATA;
  gridCols?: string;
}

const Languages = ({ data = DATA }: LanguageProps) => {
  return (
    <section className="px-4 py-20 mx-auto max-w-7xl">
      <div className="">
        <h2 className="text-center mb-1 text-3xl font-extrabold leading-tight text-gray-900">
          Multilingual Support
        </h2>
        <p className="text-center mb-6 sm:mb-6 text-lg text-gray-500">
          Break language barriers and connect with customers globally.
        </p>
        <br />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
          <div className="col-span-full flex flex-wrap justify-center gap-6">
            {data.map(({ id, flag, title, description }) => (
              <div
                key={id}
                className="flex items-center gap-2 rounded-lg border p-2 shadow-sm transition hover:shadow-md bg-white w-full sm:w-auto sm:min-w-[200px]"
              >
                {/* Flag on the left */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md">
                  <span className="text-4xl" role="img" aria-label={title}>
                    {flag}
                  </span>
                </div>

                {/* Text on the right */}
                <div className="flex flex-col">
                  <h3 className="text-sm font-semibold text-gray-900">
                    {title}
                  </h3>
                  <p className="text-xs text-gray-600">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Languages);
