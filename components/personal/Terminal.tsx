import type { PersonalContent } from "@/content/types";

type TerminalData = PersonalContent["hero"]["terminal"];

export function Terminal({ terminal }: { terminal: TerminalData }) {
  return (
    <div
      aria-hidden
      className="mt-5 overflow-hidden rounded-xl border border-line-soft bg-surface shadow-md"
    >
      <div className="flex items-center gap-2 border-b border-line-soft bg-elevated px-4 py-3">
        <span className="size-2.5 rounded-full bg-[#F75A68]" />
        <span className="size-2.5 rounded-full bg-[#FBA94C]" />
        <span className="size-2.5 rounded-full bg-[#04D361]" />
        <span className="ml-2 font-mono text-[11px] text-fg-4">{terminal.title}</span>
      </div>
      <div className="overflow-x-auto p-4 font-mono text-xs leading-relaxed">
        {terminal.lines.map((line, i) =>
          line.kind === "command" ? (
            <div key={i} className="whitespace-pre text-fg-2">
              <span className="mr-2 text-purple-400">$</span>
              {line.text}
            </div>
          ) : (
            <div key={i} className="whitespace-pre text-fg-4">
              {line.text}
            </div>
          ),
        )}
        <div className="text-fg-2">
          <span className="mr-2 text-purple-400">$</span>
          <span className="inline-block h-3.5 w-2 translate-y-[2px] animate-pulse bg-purple-400" />
        </div>
      </div>
    </div>
  );
}
