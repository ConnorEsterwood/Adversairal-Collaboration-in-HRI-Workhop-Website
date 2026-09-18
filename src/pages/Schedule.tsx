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
    title: "Three moderated debates (planned)",
    description:
      "We aim to bring together six distinct contributors in three two-person panels, each followed by open audience discussion. Topics will be chosen from the strongest contrasting submissions across all five provocations. If three substantive debates cannot be formed, we will run two panels with more audience discussion.",
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
          A half-day workshop on January 5, 2027, built around moderated debates and open audience discussion. The assigned time and room are pending confirmation with HICSS.
        </p>
        <p className="mt-4 text-sm text-muted-foreground measure-text italic">
          This outline is tentative. Panel questions and confirmed contributors will be announced by December 15. Exact timings and a calendar entry will follow once the workshop slot is confirmed.
        </p>
      </div>
    </section>

    <div className="container py-16 md:py-24">
      <section id="attend" className="scroll-mt-20 mb-12 rounded-sm border border-border bg-card p-6 md:p-8">
        <p className="font-mono text-meta text-primary">Join the audience</p>
        <h2 className="mt-3 text-h3 font-bold text-foreground">Attend and join the discussion without submitting</h2>
        <p className="mt-3 text-sm text-muted-foreground measure-text">You do not need a position statement or a panel invitation to join the audience discussion. Bring your questions and perspectives. Conference registration requirements still apply.</p>
        <a href="https://hicss.hawaii.edu/participants/" target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm font-medium text-primary hover:underline">HICSS registration and program information</a>
      </section>
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
