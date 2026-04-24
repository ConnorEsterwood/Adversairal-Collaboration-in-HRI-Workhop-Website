import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

const segments = [
  {
    time: "~15 min",
    title: "Welcome and framing",
    description:
      "Organizers introduce the workshop, explain the position statement format, and provide brief framing context for each of the five provocations.",
  },
  {
    time: "~25–30 min each",
    title: "Mini-panel sessions",
    description:
      "The core of the workshop. Each session focuses on one provocation and features a short panel conversation among invited position statement authors, followed by open Q&A with all attendees. The number of panels — up to five — will depend on which provocations attract the most position statement submissions.",
  },
  {
    time: "~30 min",
    title: "Coffee break",
    description:
      "Refreshments and informal conversation between panel sessions.",
  },
  {
    time: "~15–20 min",
    title: "Closing discussion",
    description:
      "An open, full-room conversation on cross-cutting themes that surfaced across the panels. Organizers facilitate; everyone is invited to contribute.",
  },
];

const Schedule = () => (
  <Layout>
    <section className="bg-card border-b border-border">
      <div className="container py-16 md:py-20">
        <p className="font-mono text-meta text-primary mb-4">Workshop schedule</p>
        <h1 className="text-h1-mobile md:text-h1 font-bold text-foreground">
          Panels, position statements, and structured conversation.
        </h1>
        <p className="mt-4 text-body-lg text-muted-foreground measure-text font-serif">
          A half-day workshop built around mini-panel conversations on the five provocations, each anchored by submitted position statements and open to Q&A from all attendees.
        </p>
        <p className="mt-4 text-sm text-muted-foreground measure-text italic">
          Schedule is tentative and subject to change as submissions come in and panelists are confirmed.
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
