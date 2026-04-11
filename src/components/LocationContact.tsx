import { motion } from "motion/react";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LocationContact() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary-heading text-sm mb-4 block">
              Visit Us
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-8">
              <span className="text-white">FIND YOUR</span> <span className="text-primary">TABLE</span>
            </h2>
            
            <div className="space-y-8 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Address</h3>
                  <p className="text-white text-lg">
                    1060 W Frankford Rd Ste 115, Carrollton, TX 75007, United States
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Hours & Happy Hours</h3>
                  <p className="text-white text-lg">
                    <span className="text-primary font-bold">Happy Hours: Monday - Friday: 2 pm – 5 pm</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Phone</h3>
                  <p className="text-white text-lg">+1 469-995-5552</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg font-bold"
              >
                <a href="tel:+14699955552">Call for Reservation</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/10 hover:bg-white/5 rounded-full px-8 py-6 text-lg font-bold group"
              >
                <a
                  href="https://www.google.com/maps/search/?api=1&query=1060%20W%20Frankford%20Rd%20Ste%20115%2C%20Carrollton%2C%20TX%2075007%2C%20United%20States"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Directions
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[400px] lg:h-auto rounded-3xl overflow-hidden border border-white/10"
          >
            <div className="w-full h-full bg-black relative">
              <iframe
                title="Dalgopchang Map"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=1060%20W%20Frankford%20Rd%20Ste%20115%2C%20Carrollton%2C%20TX%2075007%2C%20United%20States&output=embed"
              />

              <div className="pointer-events-none absolute inset-0 bg-black/10" />
              <div className="absolute left-6 bottom-6">
                <div className="glass px-4 py-3 rounded-xl border border-white/10">
                  <p className="font-bold text-white">Dalgopchang 달곱창</p>
                  <p className="text-xs text-white">
                    1060 W Frankford Rd Ste 115, Carrollton, TX 75007
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
