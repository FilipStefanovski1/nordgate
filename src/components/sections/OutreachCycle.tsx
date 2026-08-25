import { Phone, Mail, Share2, Users } from "lucide-react";

const channels = [
  { icon: Phone, label: "Cold calling" },
  { icon: Mail, label: "Email outreach" },
  { icon: Share2, label: "LinkedIn outreach" },
  { icon: Users, label: "Physical meetings" },
];

export function OutreachCycle() {
  return (
    <div className="rounded-2xl border border-border-soft bg-white p-8 sm:p-10">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {channels.map(({ icon: Icon, label }) => (
          <div key={label} className="rounded-xl border border-border-soft p-5 text-center">
            <Icon className="mx-auto h-5 w-5 text-blue-600" aria-hidden="true" />
            <p className="mt-3 text-sm font-medium text-ink-800">{label}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
