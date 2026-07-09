export function SectionLabel({ children, light = false }) {
  return (
    <div className="inline-flex items-center gap-3 mb-8">
      <div className="w-6 h-px bg-cherry" />
      <span
        className={`text-[10px] font-semibold tracking-widest3 uppercase ${
          light ? "text-cherry" : "text-cherry"
        }`}
      >
        {children}
      </span>
    </div>
  );
}
