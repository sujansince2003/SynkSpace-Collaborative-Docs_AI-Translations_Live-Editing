import React from "react";
import { FileText, MessageCircle, Globe, Share2 } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Create & Write",
    description:
      "Start with our intuitive editor. Create documents, add blocks, and structure your content beautifully.",
    step: "01",
  },
  {
    icon: MessageCircle,
    title: "Chat with AI",
    description:
      "Ask questions about your content, generate ideas, or get instant summaries using our AI assistant.",
    step: "02",
  },
  {
    icon: Share2,
    title: "Collaborate",
    description:
      "Invite team members to edit, comment, and contribute in real-time. See everyone's changes instantly.",
    step: "03",
  },
  {
    icon: Globe,
    title: "Translate & Share",
    description:
      "Instantly translate your content to any language and share with global teams or clients.",
    step: "04",
  },
];

const HowItWorks = () => {
  return (
    <section
      className="py-24 bg-gradient-to-br from-gray-50 to-blue-50"
      id="how-it-works"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From idea to execution in four simple steps. Experience seamless
            workflow optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="relative mx-auto w-16 h-16 bg-black rounded-2xl shadow-lg flex items-center justify-center mb-6 group hover:shadow-xl transition-shadow duration-300">
                  <step.icon className="w-8 h-8 text-white" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-200 text-black rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent transform translate-x-8"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
