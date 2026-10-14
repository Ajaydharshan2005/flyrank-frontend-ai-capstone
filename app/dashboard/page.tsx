
import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="container" style={{ paddingBlock: 40 }}>
      <Link href="/">← Back to home</Link>

      <h1>Maintenance Dashboard</h1>

      <section className="card">
        <p>
          Overview of maintenance activity and equipment.
        </p>
        <p>
          This is a placeholder for the MAINT-AI capstone.
          Features will be added in later assignments.
        </p>
      </section>
    </main>
  );
}
