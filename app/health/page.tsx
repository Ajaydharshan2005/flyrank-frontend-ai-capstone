
export default async function HealthPage() {
  const healthData = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1",
    { cache: "no-store" }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Health check request failed");
      }
      return response.json();
    })
    .catch(() => ({
      status: "unavailable",
      message: "The health-check service could not be reached.",
    }));

  const isAvailable = healthData.status !== "unavailable";

  return (
    <main className="container" style={{ paddingBlock: 40 }}>
      <h1>System Health</h1>

      <section className="card">
        <p>
          Status: <strong>{isAvailable ? "Reachable" : "Unavailable"}</strong>
        </p>
        <p>Data source: External test API</p>
        <pre style={{ whiteSpace: "pre-wrap", overflowWrap: "anywhere" }}>
          {JSON.stringify(healthData, null, 2)}
        </pre>
      </section>
    </main>
  );
}
