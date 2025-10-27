import { useState } from "react";

const TABS = [
  { id: "about", label: "About Me" },
  { id: "exp", label: "Experiences" },
  { id: "rec", label: "Recommended" },
];

export default function InfoWidget() {
  const [active, setActive] = useState("about");

  const aboutText = `Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.

I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9–10 AM. This is a...`;

  const expText = `Experiences content — Example: Salesforce • Account Executive • 3 years
- Managed key accounts and increased retention by 12%...
(Replace with more content as necessary)`;

  const recText = `Recommended content — Example: Suggested contacts, documents and recent updates.`;

  return (
    <div className="panel p-6 rounded-xl2 max-w-full">
      <div className="flex items-start gap-4">
        <div className="w-8 h-8 icon-btn text-gray-300">?</div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex gap-2">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className={`px-6 py-2 tab-pill text-sm font-medium ${active === t.id ? "text-gray-300 shadow-neuInset" : "text-gray-300 opacity-80"}`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
          <div className="card p-5 rounded-xl2 text-sm leading-6">
            <p className="whitespace-pre-line text-gray-200">
              {active === "about" ? aboutText : active === "exp" ? expText : recText}
            </p>
            <div className="separator mt-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
