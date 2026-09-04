/**
 * Minimal class name joiner. Intentionally tiny — no external dependency
 * (clsx / tailwind-merge are not used in this project).
 */
export function cn(
  ...parts: Array<string | number | false | null | undefined>
): string {
  return parts.filter(Boolean).join(" ");
}
