import { MapPin } from "lucide-react";
import { distances } from "@/lib/distances";

const tones = {
  dark: { table: "text-offwhite/90", head: "text-offwhite/75", row: "border-offwhite/20", icon: "text-offwhite/90" },
  light: { table: "text-charcoal", head: "text-sage/80", row: "border-charcoal/15", icon: "text-sage" },
};

export function DistanceTable({ tone = "dark", className = "" }: { tone?: keyof typeof tones; className?: string }) {
  const colors = tones[tone];

  return (
    <table className={`w-full text-left font-body text-[0.95rem] leading-[1.6] ${colors.table} ${className}`}>
      <caption className="sr-only">Distance and drive time from Jiana Suites</caption>
      <thead>
        <tr className={`font-nav text-[0.7rem] uppercase tracking-[0.2em] ${colors.head}`}>
          <th scope="col" className="pb-3 pr-4 font-semibold">Place</th>
          <th scope="col" className="pb-3 pr-4 font-semibold">Distance</th>
          <th scope="col" className="pb-3 font-semibold">Drive time</th>
        </tr>
      </thead>
      <tbody>
        {distances.map((row) => (
          <tr key={row.place} className={`border-t ${colors.row}`}>
            <th scope="row" className="py-3.5 pr-4 font-normal">
              <span className="flex items-start gap-3">
                <MapPin className={`mt-1 shrink-0 ${colors.icon}`} size={17} aria-hidden="true" />
                {row.place}
              </span>
            </th>
            {row.driveTime ? (
              <>
                <td className="py-3.5 pr-4">{row.distance}</td>
                <td className="py-3.5">{row.driveTime}</td>
              </>
            ) : (
              <td colSpan={2} className="py-3.5">
                {row.distance}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
