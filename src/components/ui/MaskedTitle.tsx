import type { CSSProperties } from "react";

/**
 * Headline words that slide up out of a clipping mask on load (`.mask-word`
 * in globals.css); the words of `highlight` are set in the accent colour.
 * Render it inside the heading element. The spans keep the reading order,
 * so screen readers still get the plain sentence.
 */
export function MaskedTitle({
  text,
  highlight,
}: {
  text: string;
  highlight?: string;
}) {
  const hlStart = highlight ? text.indexOf(highlight) : -1;
  const hlEnd = hlStart === -1 || !highlight ? -1 : hlStart + highlight.length;

  // Split on spaces, keeping each word's offset so a word can be partly
  // highlighted (e.g. "products." -> "products" + ".").
  const words: { word: string; at: number }[] = [];
  let pos = 0;
  for (const word of text.split(" ")) {
    if (word) words.push({ word, at: pos });
    pos += word.length + 1;
  }

  return words.map(({ word, at }, i) => {
    const from = Math.max(0, Math.min(word.length, hlStart - at));
    const to = Math.max(0, Math.min(word.length, hlEnd - at));
    return (
      <span key={i}>
        {i > 0 ? " " : null}
        <span className="mask-word">
          <span style={{ "--i": i } as CSSProperties}>
            {word.slice(0, from)}
            {to > from ? (
              <span className="text-accent">{word.slice(from, to)}</span>
            ) : null}
            {word.slice(Math.max(from, to))}
          </span>
        </span>
      </span>
    );
  });
}
