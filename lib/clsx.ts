/** Minimal classnames joiner — avoids a dependency for a one-line need. */
export function clsx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}
