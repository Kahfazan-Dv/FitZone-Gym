import { motion } from "framer-motion";
import { Dumbbell, Apple, Users, Target, Calendar, TrendingUp } from "lucide-react";
import nutritionImage from "@/assets/nutrition-meal.jpg";
import workoutImage from "@/assets/workout-strength.jpg";
import trainerImage from "@/assets/trainer-coaching.jpg";

const features = [
  {
    icon: Dumbbell,
    title: "Personalized Workouts",
    description: "AI-powered workout plans tailored to your fitness level, goals, and available equipment.",
    image: workoutImage,
    color: "accent",
  },
  {
    icon: Apple,
    title: "Smart Nutrition",
    description: "Track calories, macros, and get personalized meal plans based on your goals.",
    image: nutritionImage,
    color: "energy",
  },
  {
    icon: Users,
    title: "Expert Trainers",
    description: "Connect with certified professionals who guide you every step of the way.",
    image: trainerImage,
    color: "cta",
  },
];

const additionalFeatures = [
  {
    icon: Target,
    title: "Goal Tracking",
    description: "Set targets and monitor your progress with detailed analytics.",
  },
  {
    icon: Calendar,
    title: "Weekly Schedules",
    description: "Organized workout calendars that fit your lifestyle.",
  },
  {
    icon: TrendingUp,
    title: "Progress Analytics",
    description: "Visual charts showing your transformation journey.",
  },
];

const Features = () => {
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium text-secondary-foreground mb-4">
            Why Choose FitZone
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Everything You Need to
            <span className="text-gradient-primary"> Succeed</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our comprehensive platform combines cutting-edge technology with proven fitness methodologies.
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="p-6 -mt-8 relative">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 shadow-lg">
                  <feature.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {additionalFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
