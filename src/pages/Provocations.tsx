import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

const provocations = [
  {
    id: "01",
    statement: "Robots should be allowed to lie.",
    framing: "Transparency is treated as a design axiom in human-robot interaction. But absolute transparency can undermine collaboration. Humans lie strategically — white lies, face-saving omissions, motivational exaggerations. If robots cannot do the same, they operate under constraints no human teammate faces. This provocation asks whether we are handicapping collaborative robots by insisting they remain perpetually honest, and what a principled framework for robotic deception might look like.",
    topics: [
      "Strategic deception vs. harmful deception",
      "Trust calibration through selective disclosure",
      "Cultural variation in expectations of honesty",
      "Ethical frameworks for permissible robot deception",
    ],
  },
  {
    id: "02",
    statement: "Anthropomorphism is manipulation, not design.",
    framing: "Giving robots human-like faces, voices, and gestures is a deliberate design choice that exploits evolved social instincts. Users form attachments, defer to authority cues, and extend moral consideration to machines that do not warrant it. This provocation challenges the field to distinguish between useful social signalling and manipulative anthropomorphic design, and to consider who benefits when users treat a machine as a social partner.",
    topics: [
      "Social robotics and parasocial relationships",
      "Emotional exploitation in commercial robot design",
      "Non-anthropomorphic alternatives for collaboration",
      "Informed consent and anthropomorphic cues",
    ],
  },
  {
    id: "03",
    statement: "Your next coworker will be a robot — and you won't get a say.",
    framing: "Decisions about deploying collaborative robots in workplaces are typically made by management without meaningful input from the workers who must share tasks with those robots. This provocation examines the power dynamics of human-robot teaming, the organizational processes that exclude frontline workers, and the consequences of imposing robot teammates without consent.",
    topics: [
      "Worker agency in human-robot team formation",
      "Organizational justice and robot deployment",
      "Resistance, sabotage, and adaptation in imposed teaming",
      "Participatory design for workplace robots",
    ],
  },
  {
    id: "04",
    statement: "When the robot fails, nobody is responsible.",
    framing: "As robots become more autonomous, accountability becomes harder to assign. The manufacturer blames the deployer. The deployer blames the operator. The operator blames the algorithm. And the algorithm is not a moral agent. This provocation interrogates the growing accountability vacuum in human-robot collaboration and asks what institutional, legal, and design mechanisms can close it.",
    topics: [
      "Distributed responsibility in autonomous systems",
      "Legal liability frameworks for collaborative robots",
      "Designing for meaningful human oversight",
      "Post-incident accountability in human-robot teams",
    ],
  },
  {
    id: "05",
    statement: "Generative AI gave robots a voice — and we are not ready.",
    framing: "The integration of large language models into robotic systems has made robots conversational in ways that were not possible even two years ago. But conversational fluency is not understanding. Robots can now generate plausible, persuasive, and contextually appropriate language without any grounding in lived experience. This provocation asks what happens when the interface layer becomes indistinguishable from genuine comprehension.",
    topics: [
      "LLM-powered robots and the illusion of understanding",
      "Persuasion without comprehension",
      "Trust miscalibration in conversational robots",
      "Grounding, embodiment, and language in HRI",
    ],
  },
];

const Provocations = () => (
  <Layout>
    <section className="bg-card border-b border-border">
      <div className="container py-16 md:py-20">
        <p className="font-mono text-meta text-primary mb-4">Workshop provocations</p>
        <h1 className="text-h1-mobile md:text-h1 font-bold text-foreground measure-text">
          Five contested questions. No settled answers.
        </h1>
        <p className="mt-4 text-body-lg text-muted-foreground measure-text font-serif">
          Each provocation is drawn directly from the accepted workshop proposal. They are designed to be argued with, not agreed upon.
        </p>
      </div>
    </section>

    <div className="container py-16 md:py-24">
      {provocations.map((p, i) => (
        <motion.article
          key={p.id}
          id={`provocation-${p.id}`}
          className="scroll-mt-20 border-t border-border py-12 md:py-16 first:border-t-0 first:pt-0"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          <div className="grid gap-6 md:grid-cols-12">
            <div className="md:col-span-2">
              <span className="font-mono text-display-mobile md:text-display font-bold text-muted/60">
                {p.id}
              </span>
            </div>
            <div className="md:col-span-10">
              <h2 className="text-h2-mobile md:text-h2 font-bold text-foreground">{p.statement}</h2>
              <p className="mt-4 text-body-lg text-muted-foreground measure-text">{p.framing}</p>
              <ul className="mt-6 space-y-2">
                {p.topics.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </Layout>
);

export default Provocations;
