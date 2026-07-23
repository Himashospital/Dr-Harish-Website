export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-teal-200 bg-teal-50 px-3.5 py-2 text-[13px] font-medium text-teal-800 transition hover:border-teal-400">
      {children}
    </span>
  );
}
