import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

/**
 * Locale-aware navigation primitives. Components import `Link` from here so
 * internal links automatically resolve to the localized slug for the active
 * locale instead of hard-coding prefixes.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
