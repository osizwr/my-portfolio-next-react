import { Code, Palette, Smartphone, Server } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { ServicesBackground } from './ServicesBackground';

const services = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating intuitive and visually appealing user interfaces that enhance user experience and drive engagement.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
  },
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'Building responsive, performant web applications using modern frameworks and best practices.',
    features: ['Vue.js/React', 'Next.js/React', 'TypeScript', 'Tailwind CSS', 'Performance Optimization']
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Ensuring your website looks and works perfectly across all devices and screen sizes.',
    features: ['Mobile-First', 'Cross-Browser', 'Accessibility', 'Progressive Enhancement']
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Building robust server-side applications and APIs that power modern web applications.',
    features: ['Node.js/Express', 'Django', 'Database Design', 'RESTful APIs', 'Authentication & Security']
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Animated Background */}
      <ServicesBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            What I Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Services & <span className="font-medium">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I specialize in creating exceptional digital experiences through design and development expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium">{service.title}</h3>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-3 py-1 text-sm bg-accent text-accent-foreground rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}