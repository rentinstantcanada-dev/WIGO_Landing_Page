/**
 * Single place to edit marketing copy, links and numbers.
 * The QR codes on the page encode `downloadUrl`.
 *
 * The app is pre-launch: `androidReady`/`iosReady` gate the store buttons.
 * Flip them to `true` when each store listing goes live.
 */
export const site = {
  name: "WIGO",
  tagline: "Where I Go",
  comingSoon: true,
  // QR + primary CTA point at the Google Play listing (pre-registration).
  downloadUrl: "https://play.google.com/store/apps/details?id=com.rydr.ride",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.rydr.ride",
  appStoreUrl: "https://apps.apple.com/app/wigo",
  androidReady: true, // Play listing exists (pre-registration)
  iosReady: false, // App Store listing not published yet
  supportEmail: "bandibannu773@gmail.com",
};

/**
 * Legal identity used by /privacy, /support and /delete-account.
 * `legalEntity` must match the App Store / Play Store seller name, and
 * `policyUpdated` is shown to users — bump it whenever the policy text changes.
 */
export const legal = {
  entity: "Rent Instant Inc.",
  jurisdiction: "India",
  policyUpdated: "23 August 2026",
};

/** Pre-launch stats — promises, not fabricated traction. */
export const stats: { value: number; suffix: string; label: string; decimals?: number }[] = [
  { value: 5, suffix: "", label: "Vehicle types" },
  { value: 100, suffix: "%", label: "Upfront fares" },
  { value: 24, suffix: "/7", label: "On the road" },
  { value: 0, suffix: "", label: "Hidden charges" },
];
