import React from "react";

const DATA = [
  {
    id: 1,
    icon: "https://cal.com/logo.svg",
    title: "Cal.com",
    description: "Auto-schedule calls without back-and-forth.",
  },
  {
    id: 2,
    icon: "https://img.icons8.com/color/96/zoom.png",
    title: "Zoom",
    description: "Create and manage Zoom meetings instantly.",
  },
  {
    id: 3,
    icon: "https://img.icons8.com/color/96/google-meet--v1.png",
    title: "Google Meet",
    description: "Auto-generate Meet links for every call.",
  },
  {
    id: 4,
    icon: "https://img.icons8.com/color/96/salesforce.png",
    title: "Salesforce CRM",
    description: "Log AI calls and updates in real time.",
  },
  {
    id: 5,
    icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-hubspot-a-developer-and-marketer-of-software-products-logo-color-tal-revivo.png",
    title: "HubSpot",
    description: "Sync call data and notes automatically.",
  },
  {
    id: 6,
    icon: "https://mp-img1.zoho.com/view/logo/b3a15575-aefb-4342-9f66-0507b93ce734",
    title: "Zoho CRM",
    description: "Update CRM with AI call insights.",
  },
  {
    id: 7,
    icon: "https://img.icons8.com/color/96/google-drive--v1.png",
    title: "Google Drive",
    description: "Save call recordings and transcripts securely.",
  },
  {
    id: 8,
    icon: "https://img.icons8.com/color/96/google-sheets.png",
    title: "Google Sheets",
    description: "Track call metrics in real time.",
  },
];

interface IntegrationProps {
  title?: string;
  data?: typeof DATA;
  gridCols?: string;
}

const Integration = ({ data = DATA }: IntegrationProps) => {
  return (
    <section className="px-4 py-20 mx-auto max-w-7xl">
      <div className="">
        <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">
          Integrations
        </h2>
        <p className="mb-16 text-lg text-gray-500">
          Enhance your workflow by connecting the tools you use daily.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map(({ id, icon, title, description }) => (
            <div
              key={id}
              className="flex items-center gap-4 rounded-xl border p-4 shadow-sm transition hover:shadow-md bg-white"
            >
              {/* Icon on the left */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-gray-50">
                <img
                  src={icon}
                  alt={title}
                  width={48}
                  height={48}
                  className="h-10 w-10 object-contain"
                />
              </div>

              {/* Text on the right */}
              <div className="flex flex-col">
                <h3 className="text-base font-semibold text-gray-900">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Integration);
