import type { ReactNode } from "react";
import type { PersonalContent } from "@/content/types";

type TerminalData = PersonalContent["hero"]["terminal"];

const TOKEN = /("(?:[^"\\]|\\.)*"\s*:)|("(?:[^"\\]|\\.)*")|(-?\d+(?:\.\d+)?)|([{}[\],:])/g;

function highlightJson(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let key = 0;
  let match: RegExpExecArray | null;

  TOKEN.lastIndex = 0;
  while ((match = TOKEN.exec(text)) !== null) {
    if (match.index > last) out.push(text.slice(last, match.index));

    if (match[1]) {
      const colon = match[1].lastIndexOf(":");
      out.push(
        <span key={key++} className="text-purple-200">
          {match[1].slice(0, colon)}
        </span>,
        <span key={key++} className="text-fg-5">
          {match[1].slice(colon)}
        </span>,
      );
    } else if (match[2]) {
      out.push(
        <span key={key++} className="text-success-fg">
          {match[2]}
        </span>,
      );
    } else if (match[3]) {
      out.push(
        <span key={key++} className="text-warning-fg">
          {match[3]}
        </span>,
      );
    } else if (match[4]) {
      out.push(
        <span key={key++} className="text-fg-5">
          {match[4]}
        </span>,
      );
    }

    last = match.index + match[0].length;
  }
  if (last < text.length) out.push(text.slice(last));

  return out;
}

function highlightCommand(text: string): ReactNode {
  const space = text.indexOf(" ");
  if (space === -1) return <span className="font-semibold text-fg-1">{text}</span>;
  return (
    <>
      <span className="font-semibold text-fg-1">{text.slice(0, space)}</span>
      <span className="text-fg-2">{text.slice(space)}</span>
    </>
  );
}

export function Terminal({ terminal }: { terminal: TerminalData }) {
  return (
    <div
      aria-hidden
      className="mt-6 overflow-hidden rounded-2xl border border-line-soft bg-surface shadow-lg"
    >
      <div className="flex items-center gap-2 border-b border-line-soft bg-elevated px-4 py-3">
        <span className="size-3 rounded-full bg-[#F75A68]" />
        <span className="size-3 rounded-full bg-[#FBA94C]" />
        <span className="size-3 rounded-full bg-[#04D361]" />
        <span className="ml-3 font-mono text-[11px] tracking-[0.02em] text-fg-4">
          {terminal.title}
        </span>
      </div>
      <div className="overflow-x-auto p-5 font-mono text-[13px] leading-[1.85] lg:p-6 lg:text-sm">
        {terminal.lines.map((line, i) =>
          line.kind === "command" ? (
            <div key={i} className="whitespace-pre">
              <span className="mr-2 select-none text-purple-400">$</span>
              {highlightCommand(line.text)}
            </div>
          ) : (
            <div key={i} className="whitespace-pre text-fg-4">
              {highlightJson(line.text)}
            </div>
          ),
        )}
        <div className="text-fg-2">
          <span className="mr-2 select-none text-purple-400">$</span>
          <span className="inline-block h-4 w-2 translate-y-[3px] animate-pulse bg-purple-400" />
        </div>
      </div>
    </div>
  );
}
