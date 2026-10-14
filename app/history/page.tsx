
import Link from "next/link";

export default function HistoryPage() {
  return (
    <main className="container" style={{ paddingBlock: 40 }}>
      <Link href="/">← Back to home</Link>

      <h1>Query History</h1>

      <section className="card">
        <p>
          Review previous troubleshooting requests and their sources.
        </p>
        <p>
          Query history and saved results will be implemented in a later
          assignment.
        </p>
      </section>
    </main>
  );
}
