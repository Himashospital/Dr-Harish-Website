"use client";

import { useState } from "react";

export default function VideoTestimonial({
  youtubeId,
  tag,
}: {
  youtubeId: string;
  tag: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="relative aspect-[9/12] overflow-hidden border border-stone-300 bg-slate-900">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={`Patient testimonial \u2014 ${tag}`}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      aria-label={`Play patient testimonial video \u2014 ${tag}`}
      className="group relative block aspect-[9/12] w-full overflow-hidden border border-stone-300 bg-slate-900"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/60" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/40 backdrop-blur transition group-hover:scale-105 group-hover:bg-white/30">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white" className="translate-x-0.5">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900 to-transparent p-3 text-left">
        <span className="font-mono text-[10px] uppercase tracking-wider text-teal-300">{tag}</span>
      </div>
    </button>
  );
}
