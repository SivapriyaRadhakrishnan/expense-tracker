import React from 'react';
import { motion } from 'framer-motion';

const PersonaCard = () => {
  const personas = [
    {
      name: "Sarah Chen",
      age: 28,
      profession: "Marketing Manager",
      goals: "Save $500/month for travel, track business expenses",
      challenges: "Forgets to log expenses, overwhelmed by complex apps",
      avatar: "👩‍💼"
    },
    {
      name: "Marcus Rodriguez",
      age: 35,
      profession: "Freelance Developer",
      goals: "Build emergency fund, separate business/personal finances",
      challenges: "Irregular income makes budgeting difficult",
      avatar: "👨‍💻"
    },
    {
      name: "Emma Thompson",
      age: 24,
      profession: "Graduate Student",
      goals: "Live within student budget, learn financial discipline",
      challenges: "Limited income, peer pressure spending",
      avatar: "👩‍🎓"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
        >
          Who Uses FlowFi?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <motion.div
              key={persona.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft"
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{persona.avatar}</div>
                <h3 className="text-xl font-semibold text-gray-900">{persona.name}</h3>
                <p className="text-gray-600">{persona.age} • {persona.profession}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">🎯 Goals</h4>
                  <p className="text-gray-700 text-sm">{persona.goals}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 mb-2">⚡ Challenges</h4>
                  <p className="text-gray-700 text-sm">{persona.challenges}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonaCard;