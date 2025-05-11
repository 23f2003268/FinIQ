import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../../data/testimonials';
import { Card, CardContent } from '../ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const totalTestimonials = testimonials.length;

  const next = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
  };

  const prev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalTestimonials) % totalTestimonials);
  };

  // Calculate visible testimonials (3 on desktop, 1 on mobile)
  const getVisibleTestimonials = () => {
    // For simplicity in this example, we'll just return all testimonials
    // In a real app, you would slice based on the activeIndex and device width
    return testimonials;
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of users who have improved their financial health with FinIQ.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 z-10 pointer-events-none">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-background border shadow-sm cursor-pointer pointer-events-auto transform -translate-x-1/2 hover:bg-muted transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full bg-background border shadow-sm cursor-pointer pointer-events-auto transform translate-x-1/2 hover:bg-muted transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getVisibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <Avatar className="h-16 w-16 mb-4">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      
                      <p className="mb-4 text-muted-foreground">
                        "{testimonial.quote}"
                      </p>
                      
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2 md:hidden">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-background border shadow-sm hover:bg-muted transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full bg-background border shadow-sm hover:bg-muted transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}