import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";

const provocations = [
  { id: "01", statement: "Robots should be allowed to lie.", summary: "If robots must always be transparent, are we handicapping their ability to work with us effectively?" },
  { id: "02", statement: "Anthropomorphism is manipulation, not design.", summary: "Making robots look human exploits our social instincts. Is that ethical design or commercial deception?" },
  { id: "03", statement: "Your next coworker will be a robot — and you won't get a say.", summary: "Organizational decisions about robot teammates rarely involve the humans who must work alongside them." },
  { id: "04", statement: "When the robot fails, nobody is responsible.", summary: "Accountability gaps widen as robots gain autonomy. Who pays when a collaborative robot causes harm?" },
  { id: "05", statement: "Generative AI gave robots a voice — and we are not ready.", summary: "Large language models make robots conversational. But conversational is not the same as trustworthy." },
];

const dates = [
  { label: "Submission deadline", value: "TBD" },
  { label: "Notification of acceptance", value: "TBD" },
  { label: "Workshop date", value: "January 5–8, 2027" },
];

const organizers = [
  { name: "Connor Esterwood", affiliation: "Wayne State University" },
  { name: "Filippo Sanfilippo", affiliation: "University of Agder" },
  { name: "Lionel P. Robert Jr.", affiliation: "University of Michigan" },
  { name: "Sangseok You", affiliation: "Sungkyunkwan University" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" as const },
  }),
};

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-card border-b border-border">
      <div className="container py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="font-mono text-meta text-primary mb-4">HICSS-60 · Half-day workshop · January 5–8, 2027</p>
            <h1 className="text-display-mobile md:text-display font-bold text-foreground leading-tight">
              Robots Among Us Workshop
            </h1>
            <p className="font-serif text-body-lg text-muted-foreground mt-4 measure-text">
              Provocations and debates on the future of human-robot collaboration. Robots have left the factory floor and entered hospitals, classrooms, warehouses, and offices. This workshop uses position statements and mini-panel conversations to turn disagreement into progress — surfacing competing viewpoints and opening them up to the room.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/submit"
                className="inline-flex h-12 items-center rounded-sm bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
              >
                Submit a Position Statement
              </Link>
              <Link
                to="/provocations"
                className="inline-flex h-12 items-center gap-2 rounded-sm border border-border bg-card px-8 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                View the provocations <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="hidden md:col-span-4 md:flex md:flex-col md:justify-end">
            <div className="rounded-sm bg-accent p-6">
              <p className="font-mono text-meta text-muted-foreground mb-3">Key dates</p>
              {dates.map((d) => (
                <div key={d.label} className="border-t border-border py-3">
                  <p className="font-mono text-meta text-muted-foreground">{d.label}</p>
                  <p className="text-sm font-semibold text-foreground">{d.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Mobile dates */}
    <section className="bg-accent border-b border-border md:hidden">
      <div className="container py-8">
        <p className="font-mono text-meta text-muted-foreground mb-3">Key dates</p>
        <div className="grid grid-cols-3 gap-4">
          {dates.map((d) => (
            <div key={d.label}>
              <p className="font-mono text-meta text-muted-foreground">{d.label}</p>
              <p className="text-sm font-semibold text-foreground">{d.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Provocations preview */}
    <section className="py-16 md:py-24">
      <div className="container">
        <p className="font-mono text-meta text-primary mb-2">Five provocations</p>
        <h2 className="text-h2-mobile md:text-h2 font-bold text-foreground mb-10">
          The debates this workshop is designed to advance
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {provocations.map((p, i) => (
            <motion.div
              key={p.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
            >
              <Link
                to={`/provocations#provocation-${p.id}`}
                className="group block rounded-sm border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-sm"
              >
                <span className="font-mono text-display-mobile md:text-display font-bold text-muted/80 leading-none">
                  {p.id}
                </span>
                <h3 className="mt-3 text-h3 font-bold text-foreground group-hover:text-primary transition-colors">
                  {p.statement}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground measure-text">
                  {p.summary}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Organizers preview */}
    <section className="border-t border-border bg-card py-16 md:py-24">
      <div className="container">
        <p className="font-mono text-meta text-primary mb-2">Organizers</p>
        <h2 className="text-h2-mobile md:text-h2 font-bold text-foreground mb-8">
          Who's behind this
        </h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {organizers.map((o) => (
            <div key={o.name}>
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-sm bg-accent font-mono text-sm font-semibold text-primary">
                {o.name.split(" ").map((w) => w[0]).join("")}
              </div>
              <p className="text-sm font-semibold text-foreground">{o.name}</p>
              <p className="text-sm text-muted-foreground">{o.affiliation}</p>
            </div>
          ))}
        </div>
        <Link
          to="/organizers"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          Meet the full team <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Index;
