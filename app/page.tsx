import Link from "next/link";

const pages = [
  {
    title: "Dashboard",
    description: "View your maintenance workspace and equipment overview.",
    href: "/dashboard",
  },
  {
    title: "New Troubleshooting Query",
    description: "Describe a maintenance issue and find relevant guidance.",
    href: "/query",
  },
  {
    title: "Documents",
    description: "Explore approved maintenance manuals and procedures.",
    href: "/documents",
  },
  {
    title: "Query History",
    description: "Review previous troubleshooting requests.",
    href: "/history",
  },
  {
    title: "Settings",
    description: "Manage your workspace preferences.",
    href: "/settings",
  },
  {
    title: "System Health",
    description: "Check the application health endpoint.",
    href: "/health",
  },
];

export default function HomePage() {
  return (
    <main className="container" style={{ paddingBlock: 40 }}>
      <p style={{ color: "var(--primary)", fontWeight: 700 }}>
        MAINT-AI · MAINTENANCE SUPPORT
      </p>

      <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
        Maintenance knowledge, in one place.
      </h1>

      <p style={{ maxWidth: 650, lineHeight: 1.7 }}>
        Find approved maintenance information and source-referenced
        troubleshooting guidance. MAINT-AI supports technician decisions; it
        does not control machinery.
      </p>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
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