import { motion } from "framer-motion";
import { Clock, Flame, Dumbbell, Play, ArrowRight, Filter, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import workoutImage from "@/assets/workout-strength.jpg";

const workoutCategories = ["All", "Beginner", "Intermediate", "Advanced", "Home", "Gym"];

const workouts = [
  {
    id: 1,
    title: "Full Body Blast",
    category: "Intermediate",
    duration: "45 min",
    calories: "400-500",
    exercises: 12,
    image: workoutImage,
    featured: true,
  },
  {
    id: 2,
    title: "Core Crusher",
    category: "Beginner",
    duration: "20 min",
    calories: "150-200",
    exercises: 8,
    image: workoutImage,
    featured: false,
  },
  {
    id: 3,
    title: "Upper Body Power",
    category: "Advanced",
    duration: "60 min",
    calories: "500-600",
    exercises: 15,
    image: workoutImage,
    featured: false,
  },
  {
    id: 4,
    title: "HIIT Cardio",
    category: "Intermediate",
    duration: "30 min",
    calories: "350-450",
    exercises: 10,
    image: workoutImage,
    featured: false,
  },
  {
    id: 5,
    title: "Lower Body Sculpt",
    category: "Beginner",
    duration: "35 min",
    calories: "250-350",
    exercises: 10,
    image: workoutImage,
    featured: false,
  },
  {
    id: 6,
    title: "Strength & Power",
    category: "Advanced",
    duration: "50 min",
    calories: "450-550",
    exercises: 14,
    image: workoutImage,
    featured: false,
  },
];

const Workouts = () => {
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-sm font-medium text-accent mb-4">
              200+ Programs
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Workout Programs
            </h1>
            <p className="text-lg text-primary-foreground/80">
              From beginner to advanced, find the perfect workout routine tailored to your goals and fitness level.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-lg z-30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
            <div className="flex flex-wrap gap-2">
              {workoutCategories.map((category, i) => (
                <Button
                  key={category}
                  variant={i === 0 ? "default" : "ghost"}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Workout */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden bg-primary"
          >
            <img
              src={workoutImage}
              alt="Featured workout"
              className="w-full h-80 md:h-96 object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-8 md:px-12 max-w-xl">
                <span className="inline-block px-3 py-1 rounded-full bg-cta text-cta-foreground text-xs font-bold mb-4">
                  FEATURED
                </span>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-3">
                  Full Body Transformation
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  A complete 8-week program designed to build strength, burn fat, and transform your body.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-primary-foreground/80">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">8 Weeks</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary-foreground/80">
                    <Dumbbell className="w-4 h-4" />
                    <span className="text-sm">48 Workouts</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary-foreground/80">
                    <Flame className="w-4 h-4" />
                    <span className="text-sm">Intermediate</span>
                  </div>
                </div>
                <Button variant="cta" size="lg" className="group">
                  Start Program
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workout Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-display font-bold text-foreground">
              Popular Workouts
            </h2>
            <Button variant="ghost" className="group">
              View All
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workouts.map((workout, i) => (
              <motion.div
                key={workout.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={workout.image}
                    alt={workout.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-cta flex items-center justify-center shadow-cta">
                      <Play className="w-6 h-6 text-cta-foreground fill-current" />
                    </div>
                  </div>
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                    {workout.category}
                  </span>
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-display font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {workout.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {workout.duration}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Flame className="w-4 h-4" />
                      {workout.calories} kcal
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Dumbbell className="w-4 h-4" />
                      {workout.exercises} exercises
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Workouts;
