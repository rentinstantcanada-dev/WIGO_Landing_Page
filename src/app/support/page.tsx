import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { site } from "@/lib/config";

export const metadata: Metadata = {
  title: "Support — WIGO",
  description:
    "Get help with your WIGO account, rides, payments and vehicles, or contact the team.",
};

const intro =
  "Something not working, or a question about a ride? Start here — most answers are below, and if yours is not, email us and a person will reply.";

export default function SupportPage() {
  return (
    <LegalLayout title="Support" intro={intro} showUpdated={false}>
      <h2>Contact us</h2>
      <p>
        Email <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>. We aim to
        reply within one working day.
      </p>
      <p>
        To help us fix things faster, please include the phone number on your account,
        roughly when the problem happened, and a screenshot if you have one.
      </p>

      <h2>Common questions</h2>

      <h3>I am not receiving the login code</h3>
      <p>
        The code arrives by SMS and can take up to a minute. Check that the number you
        entered is correct, including the country code, and that you have signal. If
        nothing arrives after two minutes, wait a moment and request a new code. Still
        stuck? Email us with the number you are trying to use.
      </p>

      <h3>The map is blank or my location is wrong</h3>
      <p>
        {site.name} needs location access to set your pickup point. Check that location
        permission is granted in your device settings and that location services are
        switched on. Moving outdoors or near a window usually improves accuracy.
      </p>

      <h3>How do I add a vehicle?</h3>
      <p>
        Go to <strong>Settings</strong> then <strong>Add Vehicles</strong>. You can list
        a bike, scooter, auto, car or van. You will be asked for the vehicle details and
        photos so riders know what they are booking.
      </p>

      <h3>How is my fare calculated?</h3>
      <p>
        Fares are shown in full before you confirm a ride — a base fare plus distance and
        time, with any service fee itemised. There are no hidden charges added
        afterwards. If a completed fare looks wrong, email us with the trip details and
        we will look into it.
      </p>

      <h3>A payment failed or I was charged twice</h3>
      <p>
        Payments run through Razorpay. A failed payment is usually reversed automatically
        within a few working days. If a duplicate charge has not reversed after five
        working days, email us with the date, amount and the last four digits of the
        payment method.
      </p>

      <h3>I want to report a driver, passenger or safety concern</h3>
      <p>
        Email us straight away with the trip details and what happened. We take safety
        reports seriously and will investigate. If you are in immediate danger, contact
        the emergency services first.
      </p>

      <h3>How do I delete my account?</h3>
      <p>
        Open <strong>Settings</strong>, scroll to <strong>Delete Account</strong> below
        Logout, and type <strong>DELETE</strong> to confirm. It is permanent. Full
        details are on the <a href="/delete-account">account deletion page</a>.
      </p>

      <h2>Privacy</h2>
      <p>
        For anything about your personal data — what we hold, corrections, or erasure —
        see our <a href="/privacy">privacy policy</a> or email us directly.
      </p>
    </LegalLayout>
  );
}
