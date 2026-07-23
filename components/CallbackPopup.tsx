"use client";

import { useEffect, useState } from "react";
import { PHONE_TEL, whatsappHref } from "@/lib/contact";

const SESSION_KEY = "hg-callback-shown";

export default function CallbackPopup() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const timer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(SESSION_KEY, "1");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const message = `Hi Dr. Harish Gowda, I'm reaching out from your website (drharishgowda.in). Please call me back.${
    name ? `\n\nName: ${name}` : ""
  }${phone ? `\nPhone: ${phone}` : ""}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/60 p-4 backdrop-blur-sm sm:items-center"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-sm animate-fade-up border border-stone-200 bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-teal-700">Request a Callback</span>
            <h2 className="mt-1.5 font-serif text-xl font-semibold text-slate-900">
              We&apos;ll call you back
            </h2>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="shrink-0 text-stone-400 transition hover:text-slate-900"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-stone-600">
          Leave your number and Dr. Harish Gowda&apos;s team will call you back, usually within the day.
        </p>
        <div className="mt-5 space-y-3">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-stone-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-teal-700"
          />
          <input
            type="tel"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-stone-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-teal-700"
          />
        </div>
        <a
          href={whatsappHref(message)}
          target="_blank"
          rel="noopener"
          onClick={() => setOpen(false)}
          className="mt-4 flex items-center justify-center gap-2 rounded-md bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-emerald-800 hover:shadow-lg"
        >
          Send on WhatsApp
        </a>
        <a
          href={`tel:${PHONE_TEL}`}
          className="mt-2.5 flex items-center justify-center gap-2 rounded-md border border-stone-300 px-5 py-3 text-sm font-medium text-slate-900 transition hover:border-teal-800 hover:text-teal-800"
        >
          Or call us directly
        </a>
        <button
          onClick={() => setOpen(false)}
          className="mt-3 w-full text-center text-xs text-stone-400 transition hover:text-stone-600"
        >
          Not now
        </button>
      </div>
    </div>
  );
}
