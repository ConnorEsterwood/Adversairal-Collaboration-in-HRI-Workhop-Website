import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const submissionFormUrl = "";

const stanceSignals = [
  {
    label: "Pick",
    value: "2–3 provocations",
    detail: "Choose the claims you want to sharpen, reject, or complicate.",
  },
  {
    label: "Length",
    value: "300–500 words",
    detail: "A concise argument is better than a mini-paper.",
  },
  {
    label: "Outcome",
    value: "Mini-panel invitation",
    detail: "Authors of accepted position statements may be invited to join the mini-panel for their relevant provocation.",
  },
];

const stanceCriteria = [
  "Address two or three provocations from the workshop set.",
  "Take a position that someone could disagree with immediately.",
  "Back the claim with reasoning, examples, evidence, or implications.",
  "Write clearly enough that the panel — and the room — has something real to respond to.",
];

const responseSteps = [
  {
    id: "01",
    title: "Choose the tension",
    detail: "Select the provocations that you think the field is getting wrong, avoiding, or flattening.",
  },
  {
    id: "02",
    title: "State your position",
    detail: "Lead with the central claim in a sentence that is clear enough to trigger a real response.",
  },
  {
    id: "03",
    title: "Make the case",
    detail: "Explain what your position means for HRI research, design, deployment, governance, or practice.",
  },
];

const dates = [
  { label: "Submission deadline", value: "TBD" },
  { label: "Notification of acceptance", value: "TBD" },
  { label: "Workshop date", value: "January 5–8, 2027" },
];

const Submit = () => (
  <Layout>
    <section className="bg-card border-b border-border">
      <div className="container py-16 md:py-20">
        <p className="font-mono text-meta text-primary mb-4">Submit</p>
        <h1 className="text-h1-mobile md:text-h1 font-bold text-foreground">
          Submit a position statement
        </h1>
        <p className="mt-4 text-body-lg text-muted-foreground measure-text font-serif">
          Pick two or three provocations and respond with a purposefully opinionated position statement. We are looking for short, argument-forward pieces that push the conversation and invite serious disagreement.
        </p>
        <p className="mt-3 text-sm text-muted-foreground measure-text">
          This is not a formal paper acceptance track. Authors of accepted position statements may be invited to join the mini-panel conversation for their relevant provocation.
        </p>
      </div>
    </section>

    <section className="border-t border-border bg-background">
      <div className="container py-16 md:py-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <section className="rounded-sm border border-border bg-card">
            <div className="grid md:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)]">
              <div className="px-6 py-8 md:px-8 md:py-10">
                <p className="font-mono text-meta text-primary">Submission route</p>
                <h2 className="mt-3 text-h3 font-bold text-foreground">Ready to take a position?</h2>
                <p className="mt-3 text-sm text-muted-foreground measure-text">
                  Use the external form to submit a brief position statement. The goal is to surface a position clearly enough that the panel — and the room — has something real to respond to.
                </p>

                <div className="mt-6">
                  {submissionFormUrl ? (
                    <a
                      href={submissionFormUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-12 items-center rounded-sm bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
                    >
                      Open submission form
                    </a>
                  ) : (
                    <button
                      disabled
                      className="inline-flex h-12 items-center rounded-sm bg-primary px-8 text-sm font-medium text-primary-foreground opacity-50 cursor-not-allowed"
                    >
                      Google Form link — coming soon
                    </button>
                  )}
                </div>

                <div className="mt-6 border-t border-border pt-5">
                  <p className="text-sm text-muted-foreground">Need to review the prompts first?</p>
                  <Link to="/provocations" className="mt-2 inline-flex text-sm font-medium text-primary hover:underline">
                    Revisit the workshop provocations
                  </Link>
                </div>
              </div>

              <div className="border-t border-border bg-warm px-6 py-8 md:border-l md:border-t-0 md:px-8 md:py-10">
                <p className="font-mono text-meta text-muted-foreground">At a glance</p>
                <div className="mt-5 space-y-5">
                  {stanceSignals.map((signal) => (
                    <div key={signal.label} className="border-t border-border pt-5 first:border-t-0 first:pt-0">
                      <p className="font-mono text-meta text-muted-foreground">{signal.label}</p>
                      <p className="mt-2 text-sm font-semibold text-foreground">{signal.value}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{signal.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="grid gap-8 md:grid-cols-2">
            <section className="rounded-sm border border-border bg-card px-6 py-7 md:px-8">
              <p className="font-mono text-meta text-primary">What makes a strong position statement</p>
              <h2 className="mt-3 text-h3 font-bold text-foreground">Write something the panel can respond to</h2>
              <ul className="mt-6 space-y-4">
                {stanceCriteria.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-sm border border-border bg-accent px-6 py-7 md:px-8">
              <p className="font-mono text-meta text-primary">Suggested structure</p>
              <div className="mt-6 space-y-5">
                {responseSteps.map((step) => (
                  <div key={step.id} className="grid gap-3 border-t border-border pt-5 first:border-t-0 first:pt-0 sm:grid-cols-[auto_1fr] sm:gap-4">
                    <span className="font-mono text-[1.75rem] font-semibold leading-none text-primary">
                      {step.id}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">{step.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <section className="rounded-sm border border-border bg-warm px-6 py-7 md:px-8">
              <p className="font-mono text-meta text-muted-foreground">Why this format</p>
              <p className="mt-3 text-sm text-foreground">
                This is an invitation mechanism, not a mini proceedings track. The format is intentionally short — a focused position that anchors a mini-panel conversation and opens things up for the room.
              </p>
            </section>

            <section className="rounded-sm border border-border bg-card">
              <div className="border-b border-border px-6 py-6 md:px-8">
                <p className="font-mono text-meta text-primary">Timing and contact</p>
                <h2 className="mt-3 text-h3 font-bold text-foreground">Key dates and logistics</h2>
              </div>

              <div className="px-6 py-2 md:px-8">
                {dates.map((d, i) => (
                  <div
                    key={d.label}
                    className={`flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between ${i > 0 ? "border-t border-border" : ""}`}
                  >
                    <span className="font-mono text-meta text-muted-foreground">{d.label}</span>
                    <span className="text-sm font-semibold text-foreground">{d.value}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-border px-6 py-6 md:px-8">
                <p className="text-sm text-muted-foreground">
                  Questions about submissions?{' '}
                  <a href="mailto:cte@wayne.edu" className="font-medium text-primary hover:underline">
                    Contact Connor Esterwood
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Submit;
