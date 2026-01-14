import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Award, Users, Quote, TrendingUp } from "lucide-react";
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

export function ImpactPage() {
  const caseStudies = [
    {
      id: 1,
      company: "PayFlow Technologies",
      founder: "Chinedu Okonkwo",
      industry: "Fintech",
      impact: "500K+ Active Users",
      story:
        "From a 3-person team in Lagos to serving over 500,000 users across 5 African countries. ONDI's accelerator program provided the mentorship and funding that accelerated our growth by 300%.",
      image:
        "https://images.unsplash.com/photo-1599592187465-6dc742367282?q=80&w=1080",
      metrics: [
        { label: "Revenue Growth", value: "300%" },
        { label: "Countries", value: "5" },
        { label: "Team Size", value: "45" },
      ],
    },
    {
      id: 2,
      company: "AgriConnect",
      founder: "Fatima Bello",
      industry: "AgriTech",
      impact: "10K+ Farmers Empowered",
      story:
        "Our IoT solution connects smallholder farmers to markets and real-time pricing data. With ONDI's support, we've empowered over 10,000 farmers and increased their income by an average of 40%.",
      image:
        "https://images.unsplash.com/photo-1758691737138-7b9b1884b1db?q=80&w=1080",
      metrics: [
        { label: "Income Increase", value: "40%" },
        { label: "Farmers", value: "10K+" },
        { label: "States", value: "12" },
      ],
    },
  ];
  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Musa',
      role: 'Founder & CEO, EduTech Solutions',
      quote: 'ONDI didn\'t just provide funding - they provided a family. The mentorship, network, and resources transformed our startup from an idea into a thriving business serving 100,000+ students.',
      avatar: 'https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBleGVjdXRpdmUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjIxMjc0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 2,
      name: 'Ngozi Okafor',
      role: 'Co-founder, HealthBridge',
      quote: 'The regulatory guidance and partnership connections from ONDI were invaluable. We were able to navigate complex healthcare regulations and establish partnerships with major hospitals.',
      avatar: 'https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBleGVjdXRpdmUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjIxMjc0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 3,
      name: 'Oluwaseun Adeyemi',
      role: 'Founder, LogisticsPro',
      quote: 'From day one, ONDI believed in our vision. Their accelerator program gave us the tools, connections, and confidence to scale rapidly. Today, we\'re operating in 15 states.',
      avatar: 'https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBleGVjdXRpdmUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjIxMjc0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  

  return (
    <div className="pt-24 pb-24 px-6" style={{ backgroundColor: "white" }}>
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-3" style={{ color: "#284A26" }}>
            Impact & Success Stories
          </h2>

          <p className="max-w-3xl mx-auto text-lg" style={{ color: "#628B35" }}>
            Real stories of transformation, growth, and innovation from Nigeria’s digital ecosystem.
          </p>
        </motion.div>

        {/* CASE STUDIES */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-2xl shadow-xl bg-white"
            >
              <div className="grid md:grid-cols-2">
                {/* IMAGE */}
                <div className="relative h-80 md:h-auto">
                  <ImageWithFallback
                    src={study.image}
                    alt={study.company}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-5 left-6 flex items-center gap-2">
                    <Award className="w-5 h-5 text-white" />
                    <span className="text-white font-semibold">
                      {study.impact}
                    </span>
                  </div>
                </div>

                {/* TEXT CONTENT */}
                <div className="p-10 bg-[#134c28]">
                  <div className="text-sm font-semibold mb-1" style={{ color: "#E8B923" }}>
                    {study.industry}
                  </div>

                  <h3 className="text-2xl font-bold mb-2" style={{ color: "floralwhite" }}>
                    {study.company}
                  </h3>

                  <p className="text-sm mb-4" style={{ color: "silver" }}>
                    Founded by {study.founder}
                  </p>

                  <p className="text-base mb-8 leading-relaxed" style={{ color: "ghostwhite" }}>
                    {study.story}
                  </p>

                  {/* METRICS */}
                  <div className="grid grid-cols-3 gap-6">
                    {study.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="text-3xl font-bold" style={{ color: "#e8b923" }}>
                          {m.value}
                        </div>
                        <div className="text-sm" style={{ color: "ghostwhite" }}>
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
      
          ))}

          <div>
          <h3 className="text-center mb-12" style={{ color: '#284A26' }}>
            What Founders Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full border-0" style={{ backgroundColor: '#FFFFFC' }}>
                  <Quote className="w-10 h-10 mb-6" style={{ color: '#D4A520' }} />
                  <p className="mb-6" style={{ color: 'black' }}>
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <ImageWithFallback
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div style={{ color: '#284A26' }}>
                        {testimonial.name}
                      </div>
                      <div className="text-sm" style={{ color: '#628B35' }}>
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
