"use client";

import type { ReactNode } from "react";

// A reusable Jupyter-style cell: a right-aligned Run button floating above a
// bordered box that holds the (horizontally-scrollable, non-wrapping) code and,
// once run, an output area below it.
export function CodeCell({
  onRun,
  children,
  output,
  disabled = false,
  runLabel = "▶ Run",
  outputDark = false,
}: {
  onRun: () => void;
  children: ReactNode;
  output?: ReactNode;
  disabled?: boolean;
  runLabel?: string;
  outputDark?: boolean;
}) {
  return (
    <div>
      {/* Run button — above the box, right-aligned */}
      <div className="mb-2 flex justify-end">
        <button
          type="button"
          onClick={onRun}
          disabled={disabled}
          className="rounded border border-border px-3 py-1 text-sm text-[var(--cli)] transition-colors hover:border-[var(--accent)] disabled:opacity-60"
        >
          {runLabel}
        </button>
      </div>
      <div className="rounded border border-border bg-surface">
        <div className="overflow-x-auto px-4 py-3">
          <code className="block select-none whitespace-nowrap text-sm leading-relaxed">
            {children}
          </code>
        </div>
        {output != null && (
          <div
            className={`overflow-x-auto border-t border-border px-4 py-3 text-sm leading-relaxed${
              outputDark ? " bg-background" : ""
            }`}
          >
            {output}
          </div>
        )}
      </div>
    </div>
  );
}

// `variable.display('arg')` — one syntax-highlighted call line.
export function DisplayLine({
  variable,
  arg,
}: {
  variable: string;
  arg?: string;
}) {
  return (
    <span className="block">
      <span className="text-[var(--muted)]">{variable}</span>
      <span className="text-[var(--cli)]">.</span>
      <span className="text-[var(--fn)]">display</span>
      <span className="text-[var(--bracket)]">(</span>
      {arg && <span className="text-[var(--foreground)]">&apos;{arg}&apos;</span>}
      <span className="text-[var(--bracket)]">)</span>
    </span>
  );
}

// The standard 3-line import + instantiate + display block.
export function ImportCode({
  cls,
  variable,
  arg,
}: {
  cls: string;
  variable: string;
  arg?: string;
}) {
  return (
    <>
      <span className="block">
        <span className="text-[var(--keyword)]">from </span>
        <span className="text-[var(--accent)]">stevenlu0830</span>
        <span className="text-[var(--keyword)]"> import </span>
        <span className="text-[var(--accent)]">{cls}</span>
      </span>
      <span className="block">&nbsp;</span>
      <span className="block">
        <span className="text-[var(--muted)]">{variable}</span>
        <span className="text-[var(--cli)]"> = </span>
        <span className="text-[var(--accent)]">{cls}</span>
        <span className="text-[var(--bracket)]">()</span>
      </span>
      <DisplayLine variable={variable} arg={arg} />
    </>
  );
}

// A simulated Python NameError line.
export function NameErrorLine({ name }: { name: string }) {
  return (
    <p>
      <span className="text-[var(--errname)]">NameError</span>
      <span className="text-[var(--cli)]">: </span>
      <span className="text-[var(--errmsg)]">
        name &apos;{name}&apos; is not defined
      </span>
    </p>
  );
}

// Renders an array of plain string→string objects as a Python-style
// list-of-dicts repr, in console white.
export function DictList({ rows }: { rows: Record<string, string>[] }) {
  return (
    <div className="text-[var(--cli)]">
      {rows.map((row, i) => {
        const inner = Object.entries(row)
          .map(([k, v]) => `'${k}': '${v}'`)
          .join(", ");
        const prefix = i === 0 ? "[" : "";
        const suffix = i === rows.length - 1 ? "]" : ",";
        return (
          <div key={i} className="whitespace-nowrap">
            {prefix}
            {"{"}
            {inner}
            {"}"}
            {suffix}
          </div>
        );
      })}
    </div>
  );
}
