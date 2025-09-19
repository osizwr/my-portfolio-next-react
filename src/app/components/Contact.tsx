"use client";
import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { toast } from 'sonner';
import { ContactBackground } from './ContactBackground';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("❌ Failed to send message. Try again later.");
      }
    } catch (err) {
      console.error(err);
      toast.error("⚠️ Something went wrong.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'marvinjoseph.cajilo@gmail.com',
      href: 'mailto:marvinjoseph.cajilo@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+63 (976) 340 8136',
      href: 'tel:+639763408136'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Puerto Princesa City, Palawan',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Animated Background */}
      <ContactBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Let&apos;s Work <span className="font-medium">Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-medium mb-3">Quick Response</h3>
                  <p className="text-sm text-muted-foreground">
                    I typically respond to messages within 24 hours. For urgent inquiries, feel free to call directly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 rounded-[0px] m-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background/50"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background/50"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block mb-2 font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                      placeholder="What would you like to discuss?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-background/50 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full md:w-auto px-8 py-6 text-lg rounded-full cursor-pointer"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}