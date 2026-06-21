import Link from "next/link";
import { Logo } from "@/components/icons/logo";
import { cn } from "@/lib/utils";

/** Wordmark + mark lockup used in the nav and footer. */
export function Brand({
  className,
  href = "/",
  withWordmark = true,
}: {
  className?: string;
  href?: string;
  withWordmark?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-label="Cátedra, inicio"
      className={cn(
        "inline-flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
    >
      <Logo className="h-8 w-8 shrink-0" />
      {withWordmark && (
        <span className="font-display text-lg font-semibold tracking-tight">
          Cátedra
        </span>
      )}
    </Link>
  );
}
