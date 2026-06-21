"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { Button } from "@/components/ui/primitives/Button";
import { cn } from "@/lib/utils";

export function SearchBox({
  className,
  autoFocus,
  placeholder = "Busca por nombre del profesor…",
}: {
  className?: string;
  autoFocus?: boolean;
  placeholder?: string;
}) {
  const router = useRouter();
  const [value, setValue] = React.useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = value.trim();
    router.push(q ? `/teachers?query=${encodeURIComponent(q)}` : "/teachers");
  };

  return (
    <form
      onSubmit={onSubmit}
      role="search"
      className={cn(
        "flex w-full items-center gap-2 rounded-2xl border border-border bg-card p-2 shadow-sm transition-shadow focus-within:border-primary focus-within:shadow-md",
        className
      )}
    >
      <MagnifyingGlass size={20} className="ml-2 shrink-0 text-muted-foreground" />
      <input
        type="search"
        autoFocus={autoFocus}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        aria-label="Buscar profesor"
        className="h-10 min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
      />
      <Button type="submit" className="shrink-0">
        Buscar
      </Button>
    </form>
  );
}
