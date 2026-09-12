import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { site } from "@/lib/config";

export const metadata: Metadata = {
  title: "Delete your account — WIGO",
  description:
    "How to permanently delete your WIGO account and all associated data, from inside the app.",
};

const intro =
  "You can delete your WIGO account yourself, from inside the app, at any time. You do not need to contact us first.";

export default function DeleteAccountPage() {
  return (
    <LegalLayout title="Delete your account" intro={intro} showUpdated={false}>
      <h2>How to delete it</h2>
      <ul>
        <li>
          Open {site.name} and go to <strong>Settings</strong>
        </li>
        <li>
          Scroll to the bottom and tap <strong>Delete Account</strong>, just below Logout
        </li>
        <li>
          Read the confirmation, type <strong>DELETE</strong>, and confirm
        </li>
      </ul>
      <p>
        Your account is removed immediately. You will be signed out and returned to the
        login screen.
      </p>

      <h2>What gets deleted</h2>
      <p>Everything tied to your account is permanently erased:</p>
      <ul>
        <li>Your profile — name, phone number, email, date of birth and photo</li>
        <li>Your vehicles and any driver details or documents you uploaded</li>
        <li>Your trips, bookings and ride history</li>
        <li>Ratings and reviews you gave and received</li>
        <li>Saved locations and ride preferences</li>
      </ul>
      <p>
        <strong>This cannot be undone.</strong> There is no grace period and no way for
        us to restore a deleted account. If you sign up again later with the same phone
        number, you start from scratch.
      </p>

      <h2>What we may keep</h2>
      <p>
        We may retain a minimal record of completed transactions where tax or accounting
        law requires it. Those records do not contain your profile, location history or
        contact details.
      </p>

      <h2>If deletion is blocked</h2>
      <p>
        If you have a ride or booking still in progress, the app will ask you to complete
        or cancel it first. This is deliberate — deleting an account mid-trip would leave
        the driver or passenger on the other side stranded with no way to finish the
        journey or settle payment.
      </p>

      <h2>Cannot get into the app?</h2>
      <p>
        If you are unable to sign in and need your account deleted, email{" "}
        <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a> from the address
        on your account, or include the phone number you registered with so we can verify
        it is yours. We will confirm once it is done.
      </p>
      <p>
        For more on what we collect and why, see our{" "}
        <a href="/privacy">privacy policy</a>.
      </p>
    </LegalLayout>
  );
}
