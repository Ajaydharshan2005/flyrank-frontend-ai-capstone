
"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useState } from "react";

export default function Chat() {
  const [input, setInput] = useState("");

  const { messages, sendMessage, status, stop, error } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });

  const isBusy = status === "submitted" || status === "streaming";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const text = input.trim();
    if (!text || isBusy) return;

    sendMessage({ text });
    setInput("");
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col p-4 sm:p-6">
      <header className="border-b pb-4">
        <h1 className="text-2xl font-bold">AI Streaming Chat</h1>
        <p className="mt-1 text-sm text-gray-500">
          Ask a question and watch the answer arrive live.
        </p>
      </header>

      <section
        aria-label="Conversation"
        className="flex-1 space-y-4 overflow-y-auto py-6"
      >
        {messages.map((message) => (
          <article
            key={message.id}
            className={`rounded-xl p-4 ${
              message.role === "user"
                ? "ml-4 bg-blue-100 text-gray-900 sm:ml-8"
                : "mr-4 bg-gray-100 text-gray-900 sm:mr-8"
            }`}
          >
            <p className="mb-2 text-xs font-semibold uppercase">
              {message.role === "user" ? "You" : "Assistant"}
            </p>

            {message.parts.map((part, index) =>
              part.type === "text" ? (
                <p key={index} className="whitespace-pre-wrap break-words">
                  {part.text}
                </p>
              ) : null,
            )}
          </article>
        ))}

        {status === "submitted" && (
          <p role="status" className="text-sm text-gray-500">
            Thinking…
          </p>
        )}
      </section>

      {error && (
        <p role="alert" className="mb-3 text-sm text-red-600">
          Couldn't get a response. Check the server and try again.
        </p>
      )}

      <form onSubmit={handleSubmit} className="flex gap-2 border-t pt-4">
        <label htmlFor="chat-input" className="sr-only">
          Your message
        </label>

        <input
          id="chat-input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Type your message…"
          className="min-w-0 flex-1 rounded-lg border px-4 py-3"
          disabled={isBusy}
        />

        {isBusy ? (
          <button
            type="button"
            onClick={stop}
            className="rounded-lg bg-red-600 px-4 py-3 text-white"
          >
            Stop
          </button>
        ) : (
          <button
            type="submit"
            disabled={!input.trim()}
            className="rounded-lg bg-blue-600 px-4 py-3 text-white disabled:opacity-50"
          >
            Send
          </button>
        )}
      </form>
    </main>
  );
}
