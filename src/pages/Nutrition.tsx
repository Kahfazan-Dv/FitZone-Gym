import { motion } from "framer-motion";
import { Apple, Droplets, Flame, Utensils, Plus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import nutritionImage from "@/assets/nutrition-meal.jpg";

const mealPlan = [
  {
    meal: "Breakfast",
    time: "7:00 AM",
    name: "Protein Oatmeal Bowl",
    calories: 450,
    protein: 25,
    carbs: 55,
    fat: 12,
    image: nutritionImage,
  },
  {
    meal: "Lunch",
    time: "12:30 PM",
    name: "Grilled Chicken Salad",
    calories: 520,
    protein: 42,
    carbs: 28,
    fat: 18,
    image: nutritionImage,
  },
  {
    meal: "Snack",
    time: "3:30 PM",
    name: "Greek Yogurt & Berries",
    calories: 180,
    protein: 15,
    carbs: 22,
    fat: 4,
    image: nutritionImage,
  },
  {
    meal: "Dinner",
    time: "7:00 PM",
    name: "Salmon with Quinoa",
    calories: 580,
    protein: 38,
    carbs: 42,
    fat: 24,
    image: nutritionImage,
  },
];

const dailyGoals = [
  { label: "Calories", current: 1730, target: 2200, unit: "kcal", color: "cta" },
  { label: "Protein", current: 120, target: 150, unit: "g", color: "accent" },
  { label: "Carbs", current: 147, target: 250, unit: "g", color: "energy" },
  { label: "Water", current: 6, target: 8, unit: "glasses", color: "primary" },
];

const Nutrition = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-energy/20 text-sm font-medium text-energy mb-4">
              Smart Nutrition
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Nutrition Planning
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Fuel your fitness journey with personalized meal plans, calorie tracking, and nutrition insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Daily Summary */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {dailyGoals.map((goal, i) => (
              <motion.div
                key={goal.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-muted-foreground font-medium">{goal.label}</span>
                  {goal.label === "Water" && <Droplets className="w-5 h-5 text-accent" />}
                  {goal.label === "Calories" && <Flame className="w-5 h-5 text-cta" />}
                  {goal.label === "Protein" && <Apple className="w-5 h-5 text-accent" />}
                  {goal.label === "Carbs" && <Utensils className="w-5 h-5 text-energy" />}
                </div>
                <div className="text-3xl font-display font-bold text-foreground mb-2">
                  {goal.current}
                  <span className="text-lg text-muted-foreground ml-1">/ {goal.target} {goal.unit}</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(goal.current / goal.target) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-accent rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meal Plan */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-1">
                Today's Meal Plan
              </h2>
              <p className="text-muted-foreground">Wednesday, January 16</p>
            </div>
            <Button variant="cta" className="gap-2">
              <Plus className="w-4 h-4" />
              Add Meal
            </Button>
          </div>

          <div className="space-y-4">
            {mealPlan.map((meal, i) => (
              <motion.div
                key={meal.meal}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-4 md:p-6 shadow-sm flex flex-col md:flex-row gap-4 md:items-center"
              >
                {/* Image */}
                <div className="w-full md:w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={meal.image}
                    alt={meal.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-medium text-accent">{meal.meal}</span>
                    <span className="text-sm text-muted-foreground">{meal.time}</span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground">
                    {meal.name}
                  </h3>
                </div>

                {/* Macros */}
                <div className="flex flex-wrap gap-4 md:gap-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-foreground">{meal.calories}</div>
                    <div className="text-xs text-muted-foreground">kcal</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-accent">{meal.protein}g</div>
                    <div className="text-xs text-muted-foreground">protein</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-energy">{meal.carbs}g</div>
                    <div className="text-xs text-muted-foreground">carbs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-cta">{meal.fat}g</div>
                    <div className="text-xs text-muted-foreground">fat</div>
                  </div>
                </div>

                {/* Check Button */}
                <Button variant="outline" size="icon" className="rounded-full flex-shrink-0">
                  <Check className="w-5 h-5" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nutrition;
