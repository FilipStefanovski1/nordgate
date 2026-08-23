import { locations } from "@/data/locations";

export function LocationsGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {locations.map((loc) => (
        <div key={loc.city} className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
          <p className="coord-label text-cyan-400">
            {loc.lat.toFixed(2)}°N {loc.lon.toFixed(2)}°E
          </p>
          <p className="mt-3 text-xl font-semibold text-white">{loc.city}</p>
          <p className="mt-1 text-sm text-white/50">{loc.country}</p>
          <p className="mt-4 text-sm leading-relaxed text-white/60">{loc.role}</p>
        </div>
      ))}
    </div>
  );
}
