import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

const segments = [
  {
    time: "30 min",
    title: "Framing and provocation lightning talks",
    description:
      "Organizers set the stage with rapid-fire presentations of all five provocations. Each statement is delivered as an argument, not a summary. Participants receive their debate assignments.",
  },
  {
    time: "60 min",
    title: "Debate rounds, Oxford-style",
    description:
      "Participants engage in structured Oxford-style debates on selected provocations. Teams argue for and against each statement. Audience members vote before and after each round, making the shift in opinion visible in real time.",
  },
  {
    time: "30 min",
    title: "Coffee break",
    description:
      "Coffee, refreshments, and informal discussion across debate positions before moving into collaborative design work.",
  },
  {
    time: "30 min",
    title: "Adversarial collaboration design",
    description:
      "Mixed groups draft research proposals that synthesize opposing positions into testable hypotheses. The goal is not consensus but productive disagreement — collaborative work that takes both sides seriously.",
  },
  {
    time: "30 min",
    title: "Synthesis and research agenda",
    description:
      "Groups present their adversarial proposals. The full workshop identifies shared research priorities, methodological gaps, and potential collaborations that emerged from the day's arguments.",
  },
];

const Schedule = () => (
  <Layout>
    <section className="bg-card border-b border-border">
      <div className="container py-16 md:py-20">
        <p className="font-mono text-meta text-primary mb-4">Workshop schedule</p>
        <h1 className="text-h1-mobile md:text-h1 font-bold text-foreground">
          Three hours. No passive listening.
        </h1>
        <p className="mt-4 text-body-lg text-muted-foreground measure-text font-serif">
          This is not a mini-conference. Every segment requires active participation — debating, designing, and building research agendas collaboratively.
        </p>
      </div>
    </section>

    <div className="container py-16 md:py-24">
      <div className="space-y-0">
        {segments.map((s, i) => (
          <motion.div
            key={s.title}
            className="grid border-t border-border py-10 md:grid-cols-12 md:gap-8"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
          >
            <div className="mb-3 md:col-span-2 md:mb-0">
              <span className="font-mono text-meta font-semibold text-primary">{s.time}</span>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-h3 font-bold text-foreground">{s.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground measure-text">{s.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </Layout>
);

export default Schedule;
