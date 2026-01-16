import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "$19",
    period: "/month",
    description: "Perfect for beginners starting their fitness journey",
    features: [
      "Access to 50+ workout plans",
      "Basic nutrition tracking",
      "Progress dashboard",
      "Community access",
      "Mobile app access",
    ],
    popular: false,
    variant: "outline" as const,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "For serious athletes who want maximum results",
    features: [
      "Access to 200+ workout plans",
      "Advanced nutrition & meal planning",
      "1 personal training session/month",
      "Priority support",
      "Video exercise library",
      "Custom workout builder",
      "Progress analytics",
    ],
    popular: true,
    variant: "cta" as const,
  },
  {
    name: "Elite",
    price: "$99",
    period: "/month",
    description: "Complete transformation with dedicated support",
    features: [
      "Everything in Pro",
      "4 personal training sessions/month",
      "Dedicated nutrition coach",
      "Body composition analysis",
      "Premium gym access",
      "Recovery & wellness programs",
    ],
    popular: false,
    variant: "outline" as const,
  },
];

const Pricing = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-energy/10 text-sm font-medium text-energy mb-4">
            Flexible Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Choose Your
            <span className="text-gradient-primary"> Perfect Plan</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Start free for 7 days. No credit card required. Cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? "bg-primary text-primary-foreground shadow-2xl scale-105"
                  : "bg-card shadow-lg"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-cta text-cta-foreground text-sm font-semibold shadow-cta">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Info */}
              <div className="mb-6">
                <h3 className={`text-xl font-display font-bold mb-2 ${
                  plan.popular ? "text-primary-foreground" : "text-foreground"
                }`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${
                  plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <span className={`text-5xl font-display font-bold ${
                  plan.popular ? "text-primary-foreground" : "text-foreground"
                }`}>
                  {plan.price}
                </span>
                <span className={plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}>
                  {plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.popular ? "bg-accent/20" : "bg-accent/10"
                    }`}>
                      <Check className={`w-3 h-3 ${
                        plan.popular ? "text-accent" : "text-accent"
                      }`} />
                    </div>
                    <span className={`text-sm ${
                      plan.popular ? "text-primary-foreground/90" : "text-muted-foreground"
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={plan.popular ? "energy" : "outline"}
                size="lg"
                className="w-full"
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
