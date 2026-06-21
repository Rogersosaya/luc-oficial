"use client";

import * as React from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { MagnifyingGlass, X } from "@phosphor-icons/react";

import type { Career } from "@/interfaces/career.interface";
import type { Cycle } from "@/interfaces/cycle.interface";
import type { Faculty } from "@/interfaces/faculty.interface";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/primitives/Select";
import { Button } from "@/components/ui/primitives/Button";

interface CourseOption {
  name: string;
}

interface Props {
  faculties: Faculty[];
  careers: Career[];
  cycles: Cycle[];
  courses: CourseOption[];
}

const ALL = "__all__";

function FilterSelect({
  label,
  value,
  options,
  onChange,
  disabled,
}: {
  label: string;
  value?: string;
  options: { key: string; label: string }[];
  onChange: (value: string) => void;
  disabled?: boolean;
}) {
  return (
    <label className="flex w-full flex-col gap-1.5">
      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
      <Select
        value={value ?? ALL}
        onValueChange={(v) => onChange(v === ALL ? "" : v)}
        disabled={disabled}
      >
        <SelectTrigger aria-label={label}>
          <SelectValue placeholder={`Todas`} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={ALL}>Todas</SelectItem>
          {options.map((o) => (
            <SelectItem key={o.key} value={o.key}>
              {o.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </label>
  );
}

function Filters({ faculties, careers, cycles, courses }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const get = (key: string) => searchParams.get(key)?.toString() || undefined;

  function setParam(name: string, value: string) {
    const params = new URLSearchParams(searchParams);
    params.delete("page");
    // Cascade resets
    if (name === "faculty") {
      params.delete("career");
      params.delete("course");
    }
    if (name === "career" || name === "cycle") params.delete("course");

    if (value) params.set(name, value);
    else params.delete(name);
    replace(`${pathname}?${params.toString()}`);
  }

  const onSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    params.delete("page");
    if (value) params.set("query", value);
    else params.delete("query");
    replace(`${pathname}?${params.toString()}`);
  }, 350);

  const hasFilters = ["query", "faculty", "career", "cycle", "course"].some((k) =>
    searchParams.get(k)
  );

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 sm:p-5">
      <div className="relative">
        <MagnifyingGlass
          size={18}
          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
        <input
          type="search"
          defaultValue={get("query") ?? ""}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Busca por nombre del profesor…"
          aria-label="Buscar profesor"
          className="h-11 w-full rounded-lg border border-border bg-background pl-10 pr-3 text-sm outline-none transition-colors focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <FilterSelect
          label="Facultad"
          value={get("faculty")}
          onChange={(v) => setParam("faculty", v)}
          options={faculties.map((f) => ({ key: f.name, label: f.name }))}
        />
        <FilterSelect
          label="Carrera"
          value={get("career")}
          onChange={(v) => setParam("career", v)}
          options={careers.map((c) => ({ key: c.name, label: c.name }))}
        />
        <FilterSelect
          label="Ciclo"
          value={get("cycle")}
          onChange={(v) => setParam("cycle", v)}
          options={cycles.map((c) => ({ key: c.name, label: c.name }))}
        />
        <FilterSelect
          label="Curso"
          value={get("course")}
          onChange={(v) => setParam("course", v)}
          options={courses.map((c) => ({ key: c.name, label: c.name }))}
        />
      </div>

      {hasFilters && (
        <div className="flex justify-end">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => replace(pathname)}
            className="text-muted-foreground"
          >
            <X size={15} weight="bold" />
            Limpiar filtros
          </Button>
        </div>
      )}
    </div>
  );
}

export default Filters;
