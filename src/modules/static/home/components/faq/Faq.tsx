import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

interface Faq1Props {
  heading?: string;
  items?: FaqItem[];
}

const defaultFaqs = [
  {
    id: 1,
    question: "How does AI-powered outbound calling improve lead engagement?",
    answer:
      "Our platform uses large language models and real-time voice synthesis to deliver human-like outbound calls that adapt mid-conversation. This increases pickup rates, holds attention longer, and improves conversion — all without human reps."
  },
  {
    id: 2,
    question: "What is Real-Time Script Adaptation and why is it important?",
    answer:
      "Every call dynamically evolves based on the prospect’s tone, intent, and objections. Our AI rewrites the script live — not just selects from branches — creating tailored conversations that outperform static workflows and increase qualification rates."
  },
  {
    id: 3,
    question: "How does Automated Lead Qualification save time for sales teams?",
    answer:
      "The AI agent asks discovery questions, scores the lead using rule-based or ML models, and pushes structured data directly into your CRM. This removes low-intent leads early and keeps your sales team focused on closing, not qualifying."
  },
  {
    id: 4,
    question: "Can the AI handle live objections effectively?",
    answer:
      "Yes. The agent is trained on domain-specific rebuttals and uses retrieval-augmented generation (RAG) to resolve concerns in real time. It doesn’t just parrot scripts — it navigates objections like a seasoned SDR."
  },
  {
    id: 5,
    question: "Is the platform compliant with legal frameworks like TCPA and GDPR?",
    answer:
      "Absolutely. We support consent-based outreach, include opt-out logic, recordkeeping, and customizable disclaimers — ensuring enterprise-grade compliance with TCPA, GDPR, HIPAA, and other regulatory standards."
  },
  {
    id: 6,
    question: "How does CRM integration improve sales workflow?",
    answer:
      "Our bi-directional integrations with tools like Salesforce, HubSpot, and Zoho ensure calls, notes, and lead scores sync automatically. No rep needs to ‘log’ a call again. This enables accurate follow-ups and pipeline hygiene at scale."
  },
  {
    id: 7,
    question: "How do voice and sentiment analytics inform better sales strategy?",
    answer:
      "Our system captures tone, emotion, hesitation, and interruption patterns to surface high-intent or at-risk leads. These insights help teams refine messaging, prioritize outreach, and close more deals with data, not gut feel."
  },
  {
    id: 8,
    question: "Can AI agents collaborate with human teams during or after calls?",
    answer:
      "Yes. Agents can flag critical leads for human follow-up, hand off live calls, or trigger Slack/CRM notifications when human input is needed. It’s collaborative automation — not a siloed bot."
  },
  {
    id: 9,
    question: "How scalable is the platform for enterprise-grade outreach?",
    answer:
      "Built on a distributed architecture, we support thousands of concurrent conversations across geos and use cases. Whether you’re doing 100 or 100,000 calls per day, onboarding takes minutes — not months."
  },
  {
    id: 10,
    question: "What industries and use cases is this built for?",
    answer:
      "We serve industries like healthcare, financial services, B2B SaaS, and logistics — with use cases spanning inbound support, outbound prospecting, appointment setting, and even collections. Voice, tone, and workflows are all configurable."
  }
];


const Faq = ({
  heading = "Frequently asked questions",
  items = defaultFaqs,
}: Faq1Props) => {
  return (
    <section className="px-4 py-20 mx-auto max-w-7xl">
      <div className="">
        <h1 className="text-center mb-4 text-3xl font-semibold md:mb-11 md:text-4xl">
          {heading}
        </h1>
        <Accordion type="single" collapsible>
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="font-semibold hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
