"use client";

import { motion } from "framer-motion";

const days = [
  {
    n: "01",
    title: "What is Breathwork?",
    desc: "You will learn how to cultivate breath awareness and why the breath is your most powerful ally against anxiety. You will also lay the foundation to switch out of fight or flight mode which releases stress hormones and causes you to feel anxious, overwhelmed, and stuck.",
  },
  {
    n: "02",
    title: "Tapping Into the Felt Sense & Creating More Choice Points",
    desc: "You will learn a Felt Sense (body intuition) meditation to connect to your inner wisdom and the messages of the body; and to open up to the subconscious and adjust old programs that fuel your anxiety. You will also learn about the 'anxiety spiral,' the relationship between trauma and overwhelm, and how to restore your sense of choice.",
  },
  {
    n: "03",
    title: "Connecting to Positivity, Gratitude & Your Safe Place",
    desc: "We will explore gratitude and tap into a positive memory that you have and find out where that feeling lives in your body. We will embody that feeling with a short meditation that will become an important part of your toolkit and will help to get your RAS working for you instead of against you.",
  },
  {
    n: "04",
    title: "Creating an Anxiety Immune System with the Transformers Breath",
    desc: "Research shows the higher your Heart Rate Variability (HRV) levels the more resilient and adaptable you are. In this class we will learn a powerful breath practice that you can use to increase your HRV, become more present, and dissolve anxiety at its onset.",
  },
  {
    n: "05",
    title: "The BIG Process",
    desc: "A process to undertake during times of anxiety, overwhelm, fear, or when you feel triggered. It can be applied in the present, and we will also use it to revisit times in the past when these feelings were present and the breath was lost. It helps reconnect fragmented parts of yourself and soothe the wounds that often fuel anxiety.",
  },
  {
    n: "06",
    title: "An Acknowledgment Practice",
    desc: "We expand on your commitment to focus on the positive and measure your accomplishments rather than where you fall short — and learn how to halt the 'anxiety spiral.' You will gain confidence to handle so much more that life throws at you, change the energy of anxiety into excitement, and 'I can't' thoughts into 'I can.'",
  },
  {
    n: "07",
    title: "Reclaiming Your Power & Recognizing the Miracle that You Are",
    desc: "Looking for solutions outside us only gives our creative force to someone or something else. It is time to take back the reins, and learn to ride a winning horse.",
  },
  {
    n: "08",
    title: "Building on Your Anxiety Toolkit",
    desc: "A breath practice that incorporates sound and vibration healing to create an instantly relaxed state of mind and body. The key to staying in the saddle, and enjoying the ride.",
  },
  {
    n: "09",
    title: "Gathering All the Tools & Integrating Your Learnings",
    desc: "You will integrate lessons 1 through 8 and learn how to apply these tools in your daily life. We tie it all together so you can conclude this journey feeling empowered, inspired, and fully at ease.",
  },
  {
    n: "10",
    title: "Embodying Your Learnings with a Conscious Connected Breathwork Session",
    desc: "You will go on a deep inner journey that will transform your consciousness and connect you with a higher wisdom. You will return home with a renewed sense of resilience, connection, purpose, and inner peace.",
  },
];

export function CurriculumTA() {
  return (
    <section
      id="curriculum"
      className="relative z-20 mx-auto w-full max-w-5xl px-6 py-28 md:px-10 md:py-36"
    >
      <div className="text-center">
        <span className="eyebrow">The 10 days of the course</span>
        <h2 className="serif mt-6 text-4xl leading-tight md:text-6xl">
          Ten days. <span className="text-gradient">No stone unturned.</span>
        </h2>
      </div>

      <ol className="mt-16 space-y-4">
        {days.map((d, i) => (
          <motion.li
            key={d.n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.04 }}
            className="glass rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-start gap-6">
              <div className="hidden shrink-0 md:block">
                <div className="serif text-5xl text-cream/30">{d.n}</div>
                <div className="eyebrow !text-[10px] mt-1">Day</div>
              </div>
              <div className="flex-1">
                <div className="serif text-xs text-cream/40 md:hidden">Day {d.n}</div>
                <h3 className="serif text-xl md:text-2xl">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/65 md:text-base">
                  {d.desc}
                </p>
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
