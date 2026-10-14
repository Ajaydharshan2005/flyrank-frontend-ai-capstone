
import Link from "next/link";

export default function SettingsPage() {
  return (
    <main className="container" style={{ paddingBlock: 40 }}>
      <Link href="/">← Back to home</Link>

      <h1>Settings</h1>

      <section className="card">
        <p>Manage your account and workspace preferences.</p>
        <p>
          Account settings and preferences will be implemented in a later
          assignment.
        </p>
      </section>
    </main>
  );
}
