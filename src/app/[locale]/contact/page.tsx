import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/sections/ContactForm";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Let's find out whether the Nordics make sense for your business. Get in touch with NordGate to discuss market entry.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's test the opportunity."
        description="Tell us what you're trying to achieve. We'll follow up to discuss whether, and how, we can help."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.2fr_0.8fr]">
            <ContactForm />

            <div>
              <p className="eyebrow text-ink-400">Where we work</p>
              <div className="mt-6 flex flex-col gap-6">
                {locations.map((loc) => (
                  <div key={loc.city} className="border-b border-border-soft pb-6 last:border-0">
                    <p className="text-lg font-semibold text-ink-900">{loc.city}</p>
                    <p className="mt-1 text-sm text-ink-500">{loc.country}</p>
                    <p className="coord-label mt-2 text-ink-400">
                      {loc.lat.toFixed(2)}°N {loc.lon.toFixed(2)}°E
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
