
import Link from "next/link";

export default function QueryPage() {
  return (
    <main className="container" style={{ paddingBlock: 40 }}>
      <Link href="/">← Back to home</Link>

      <h1>New Troubleshooting Query</h1>

      <section className="card">
        <p>
          Submit an equipment issue, error code, symptoms, and problem
          description.
        </p>
        <p>
          This screen will let technicians request source-referenced
          troubleshooting guidance in a later assignment.
        </p>
      </section>
    </main>
  );
}
