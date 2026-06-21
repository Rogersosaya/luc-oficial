import { formatNumber } from "@/lib/utils";

function BannerTeachers({ totalCount }: { totalCount: number }) {
  return (
    <div className="border-b border-border bg-surface">
      <div className="mx-auto max-w-content px-5 py-12 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Profesores de la UNI
        </h1>
        <p className="mt-3 max-w-prose text-muted-foreground">
          {formatNumber(totalCount)} profesores registrados de la Facultad de
          Ingeniería Industrial y de Sistemas. Filtra y compara antes de
          matricularte.
        </p>
      </div>
    </div>
  );
}

export default BannerTeachers;
