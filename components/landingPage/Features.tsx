import { Bot, Users, Languages, Shield, Edit3, Zap } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Chat",
    description:
      "Get instant insights, suggestions, and answers about your documents with our intelligent AI assistant.",

    gradient: "from-blue-500/10 to-purple-500/10",
  },
  {
    icon: Users,
    title: "Real-time Collaboration",
    description:
      "Work together seamlessly with live cursors, instant updates, and powerful commenting features.",

    gradient: "from-green-500/10 to-blue-500/10",
  },
  {
    icon: Languages,
    title: "Seamless Translation",
    description:
      "Break language barriers with instant, AI-powered translation that preserves formatting and context.",

    gradient: "from-orange-500/10 to-red-500/10",
  },
  {
    icon: Edit3,
    title: "Powerful Editor",
    description:
      "Create beautiful documents with our intuitive editor featuring blocks, templates, and rich formatting.",

    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: Shield,
    title: "Secure Authentication",
    description:
      "Enterprise-grade security with SSO, team management, and granular permission controls.",

    gradient: "from-gray-500/10 to-slate-500/10",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized for speed with instant loading, real-time sync, and offline capability.",

    gradient: "from-yellow-500/10 to-orange-500/10",
  },
];

const FeatureHighlights = () => {
  return (
    <section className="py-10 px-4 bg-background" id="features">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}

        <div className="text-center mb-16">
          <h2 className="mb-8 text-4xl text-center tracking-tight font-extrabold text-gray-900">
            Feature Highlights
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to enhance your writing, collaboration,
            and productivity — all in one intuitive platform.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:shadow-float transition-all duration-300 hover:scale-[1.02]"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="relative p-8">
                {/* Icon */}
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
