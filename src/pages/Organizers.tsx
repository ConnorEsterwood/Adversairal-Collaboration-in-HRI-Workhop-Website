import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

const organizers = [
  {
    name: "Connor Esterwood",
    title: "Assistant Professor",
    affiliation: "Wayne State University, USA",
    email: "cte@wayne.edu",
    bio: "Connor Esterwood researches trust, reliance, and decision-making in human-robot and human-AI teams. His work focuses on understanding how people calibrate their trust in robotic partners and how design choices influence collaborative outcomes.",
  },
  {
    name: "Filippo Sanfilippo",
    title: "Professor",
    affiliation: "University of Agder, Norway",
    email: "Filippo.Sanfilippo@uia.no",
    bio: "Filippo Sanfilippo's research centres on robotics, human-robot interaction, and mechatronics. He has published extensively on modular robotics and leads projects exploring how robotic systems can collaborate effectively with human teams in applied settings.",
  },
  {
    name: "Lionel P. Robert Jr.",
    title: "Professor",
    affiliation: "University of Michigan, USA",
    email: "lprobert@umich.edu",
    bio: "Lionel P. Robert Jr. studies human-robot teamwork, trust in autonomous systems, and the organizational implications of deploying robots alongside human workers. His work bridges information systems, robotics, and organizational behaviour.",
  },
  {
    name: "Sangseok You",
    title: "Assistant Professor",
    affiliation: "Sungkyunkwan University, South Korea",
    email: "sangseok@skku.edu",
    bio: "Sangseok You investigates how people perceive and respond to robotic and AI agents in collaborative environments. His research examines the psychological and social dynamics that shape human-robot interaction in both experimental and field settings.",
  },
];

const Organizers = () => (
  <Layout>
    <section className="bg-card border-b border-border">
      <div className="container py-16 md:py-20">
        <p className="font-mono text-meta text-primary mb-4">Workshop organizers</p>
        <h1 className="text-h1-mobile md:text-h1 font-bold text-foreground">
          The team behind the argument
        </h1>
      </div>
    </section>

    <div className="container py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-2">
        {organizers.map((o, i) => (
          <motion.div
            key={o.name}
            className="rounded-sm border border-border bg-card p-6 md:p-8"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: i * 0.07 }}
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-sm bg-accent font-mono text-lg font-bold text-primary">
              {o.name.split(" ").map((w) => w[0]).join("")}
            </div>
            <h2 className="text-h3 font-bold text-foreground">{o.name}</h2>
            <p className="font-mono text-meta text-muted-foreground mt-1">
              {o.title} · {o.affiliation}
            </p>
            <p className="mt-4 text-sm text-muted-foreground measure-text">{o.bio}</p>
            <a
              href={`mailto:${o.email}`}
              className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
            >
              {o.email}
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </Layout>
);

export default Organizers;
