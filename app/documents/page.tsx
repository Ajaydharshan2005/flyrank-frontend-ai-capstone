
import Link from "next/link";

export default function DocumentsPage() {
  return (
    <main className="container" style={{ paddingBlock: 40 }}>
      <Link href="/">← Back to home</Link>

      <h1>Maintenance Documents</h1>

      <section className="card">
        <p>
          Browse approved maintenance manuals and troubleshooting procedures.
        </p>
        <p>
          Document search and management features will be added in a later
          assignment.
        </p>
      </section>
    </main>
  );
}
