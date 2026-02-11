import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Award, Users, Quote, TrendingUp } from "lucide-react";
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

export function ImpactPage() {
  const caseStudies = [
    {
      id: 1,
      company: "Ficore Africa",
      founder: "Hassan Ahmad",
      story:
        "Through the iHatch program, I experienced a major shift in mindset—from pursuing a generic startup idea to tackling long-term, systemic problems within Nigeria's informal economy. iHatch taught me to prioritize real user needs, focus on building trust and compliance, and value community-driven collaboration. The support and challenge from mentors and peers set me on a clear path toward making FICO Africa indispensable for the people we aim to serve.",
      image: "/assets/Ficore Africa.jpeg",

    },
    {
      id: 2,
      company: "Grabb 247",
      founder: "Aisha Riwanu Sidi",
      story:
        "My journey with iHatch taught me the value of structure, discipline, and data-driven decision-making as I work to scale Grab Livestock Marketplace across northern Nigeria. The program's mentorship and teamwork inspired me to refine my strategies for acquiring customers and vendors, optimize our operations, and build a transparent, AI-powered platform. Thanks to iHatch, I'm more confident in our path forward—creating impact through technology and continued learning",
      image: "/assets/Grab247.jpeg",

    },

    {
      id: 3,
      company: "Interface Innovations Ltd",
      founder: "Al-amin  Idris",
      story:
        "From iHatch, I learned how vital it is to be market ready, product ready, and investment ready. The program showed me how to apply market assessments to design better products and growth strategies, and how to use resources effectively to train and onboard a large team. The lessons on dedication and consistently engaging with every session have given me the tools and mindset I need to push Interface Africa to new heights.",
      image: "/assets/Interface Africa.jpeg",


    },


    {
      id: 4,
      company: "EasyBuy4Me",
      founder: "Amina Kwaplong",
      story:
        "iHatch became a turning point for me, providing the insights, mentorship, and community support necessary to reimagine my business. With what I learned, I'm now set on refining our strategy, reaching larger markets, and building up our team capabilities in the e-commerce and logistics space. iHatch reminded me to stay open to learning and see the program as a springboard for future growth and renewed ambition.",
      image: "/assets/Easybuy4me.jpeg",

    },



  ];
  const testimonials = [
    {
      id: 1,
      name: 'Andrew Ndukwe',
      role: 'Founder, AlphaZone Tech Hub Ltd',
      quote: 'ONDI didn\'t just provide funding - they provided a family. The mentorship, network, and resources transformed our startup from an idea into a thriving business serving 100,000+ students.',
    },
    {
      id: 2,
      name: 'Tasiu Kwaplong Saeed',
      role: 'Founder, 02 INNOVATIONS LAB',
      quote: 'The iHatch programme gave my hub visibility as a go-to place for startup support in Nasarawa state.',

    },
    {
      id: 3,
      name: 'Otuonye Chinyere',
      role: 'Founder,Sparks Ventures Hub',
      quote: 'The iHatch initiative came at the perfect time as I was about to launch an incubation program at my hub. The training corrected my earlier misconceptions and gave me practical guidance, which was a very valuable experience.',

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
            Our Impact
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
                <div className="relative h-80 md:h-auto min-h-[320px]">
                  <ImageWithFallback
                    src={study.image}
                    alt={study.company}
                    className="w-full h-full object-cover object-top"
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
