
import Link from "next/link";

const pages = [
  {
    title: "Dashboard",
    description: "View your project dashboard.",
    href: "/dashboard",
  },
  {
    title: "New Query",
    description: "Explore the AI-powered query interface.",
    href: "/query",
  },
  {
    title: "Documents",
    description: "Explore project documents.",
    href: "/documents",
  },
  {
    title: "History",
    description: "Review previous activity.",
    href: "/history",
  },
  {
    title: "Settings",
    description: "Manage application preferences.",
    href: "/settings",
  },
  {
    title: "System Health",
    description: "View health-check data.",
    href: "/health",
  },
];

export default function HomePage() {
  return (
    <main className="container" style={{ paddingBlock: 40 }}>
      <p style={{ color: "var(--primary)", fontWeight: 700 }}>
        FLYRANK · FRONTEND AI CAPSTONE
      </p>

      <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
        Building an AI-powered frontend experience.
      </h1>

      <p style={{ maxWidth: 650, lineHeight: 1.7 }}>
        An AI-powered frontend application developed throughout the
        FlyRank Frontend AI Engineering track, focused on accessibility,
        responsiveness, and maintainable design.
      </p>

      <section
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
          gap: 16,
          marginTop: 32,
        }}
      >
        {pages.map((page) => (
          <article className="card" key={page.href}>
            <h2>{page.title}</h2>
            <p style={{ lineHeight: 1.6 }}>{page.description}</p>
            <Link
              href={page.href}
              style={{ color: "var(--primary)", fontWeight: 700 }}
            >
              Open page →
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
