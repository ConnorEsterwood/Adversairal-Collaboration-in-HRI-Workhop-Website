const Footer = () => (
  <footer className="border-t border-border bg-card py-12">
    <div className="container">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-meta text-muted-foreground">
            HICSS-60 · January 5–8, 2027 · Hilton Waikoloa Village, Big Island, Hawaiʻi
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Robots Among Us: Provocations and Debates on the Future of Human-Robot Collaboration
          </p>
        </div>
        <p className="font-mono text-meta text-muted-foreground">
          Primary point of contact: Connor Esterwood (<a href="mailto:cte@wayne.edu" className="text-primary hover:underline">cte@wayne.edu</a>)
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
