import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { site, legal } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy — WIGO",
  description:
    "How WIGO collects, uses, stores and deletes your personal data, and how to exercise your rights.",
};

const intro =
  "This policy explains what WIGO collects, why, who we share it with, and how you can get it deleted. It covers the WIGO mobile app and this website.";

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" intro={intro}>
      <h2>1. Who we are</h2>
      <p>
        {site.name} is operated by <strong>{legal.entity}</strong> (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;). We are the data fiduciary for the personal data described
        below. You can reach us at{" "}
        <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.
      </p>

      <h2>2. What we collect</h2>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Why we need it</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Phone number</td>
            <td>To create your account and sign you in. It is how we identify you.</td>
          </tr>
          <tr>
            <td>Full name</td>
            <td>So drivers and passengers know who they are travelling with.</td>
          </tr>
          <tr>
            <td>Date of birth</td>
            <td>To confirm you are 18 or over.</td>
          </tr>
          <tr>
            <td>Email address (optional)</td>
            <td>Receipts and account notices. You can use {site.name} without one.</td>
          </tr>
          <tr>
            <td>Profile photo</td>
            <td>So the other party can recognise you at pickup.</td>
          </tr>
          <tr>
            <td>Precise location</td>
            <td>
              To set your pickup point, find rides near you, and show your live position
              to the driver or passengers during a trip.
            </td>
          </tr>
          <tr>
            <td>Vehicle details, photos and driving documents</td>
            <td>
              Only if you list a vehicle or drive. Used to verify that vehicles and
              drivers on the platform are genuine.
            </td>
          </tr>
          <tr>
            <td>Trip and booking history</td>
            <td>To show your rides, calculate fares, and resolve disputes.</td>
          </tr>
          <tr>
            <td>Ratings and reviews</td>
            <td>To keep the platform trustworthy for everyone.</td>
          </tr>
          <tr>
            <td>Saved locations and ride preferences</td>
            <td>Convenience features you choose to use.</td>
          </tr>
        </tbody>
      </table>

      <h3>Payments</h3>
      <p>
        Payments are processed by <strong>Razorpay</strong>. Card, UPI and bank details
        are entered directly with Razorpay and are{" "}
        <strong>never stored on our servers</strong>. We keep only the amount, status and
        reference for each transaction.
      </p>

      <h2>3. How we use location</h2>
      <p>
        {site.name} requests location access{" "}
        <strong>only while the app is in use</strong>. We do not track your location in
        the background, and we do not collect location when the app is closed. You can
        revoke location access at any time in your device settings, though core features
        such as setting a pickup point will not work without it.
      </p>

      <h2>4. Who we share it with</h2>
      <p>
        We do not sell your personal data. We share it only with the service providers
        needed to run {site.name}, and only what each one needs:
      </p>
      <ul>
        <li>
          <strong>Other users of the platform</strong> — when you book or accept a ride,
          the other party sees your name, photo, rating and live location for the
          duration of that trip.
        </li>
        <li>
          <strong>Twilio</strong> — receives your phone number to deliver the one-time
          login code.
        </li>
        <li>
          <strong>Amazon Web Services</strong> — hosts our servers and stores uploaded
          photos and documents.
        </li>
        <li>
          <strong>MongoDB</strong> — stores our application database.
        </li>
        <li>
          <strong>Razorpay</strong> — processes payments.
        </li>
        <li>
          <strong>Google Maps Platform</strong> — provides maps, routing and address
          lookup.
        </li>
      </ul>
      <p>
        We may also disclose data where required by law, or to investigate fraud or a
        safety incident on the platform.
      </p>

      <h2>5. Where your data is stored</h2>
      <p>
        Our servers and file storage are located in <strong>India</strong> (AWS Mumbai
        region). Some of the providers listed above may process limited data outside
        India in the course of delivering their service.
      </p>

      <h2>6. How long we keep it</h2>
      <p>
        We keep your data for as long as your account exists. When you delete your
        account we remove it permanently, as described below. We may retain a minimal
        transaction record where tax or accounting law requires it.
      </p>

      <h2>7. Deleting your account</h2>
      <p>You can delete your {site.name} account at any time, from inside the app:</p>
      <ul>
        <li>
          Open <strong>Settings</strong>
        </li>
        <li>
          Scroll to <strong>Delete Account</strong>, below Logout
        </li>
        <li>
          Type <strong>DELETE</strong> to confirm
        </li>
      </ul>
      <p>
        This is immediate and cannot be undone. It permanently removes your profile,
        phone number, photo, vehicles, driver details, trips, bookings, ratings and saved
        locations. Full instructions are on our{" "}
        <a href="/delete-account">account deletion page</a>.
      </p>
      <p>
        If you have a ride or booking in progress, finish or cancel it first — we block
        deletion mid-trip so the other party is not left stranded.
      </p>

      <h2>8. Your rights</h2>
      <p>
        Under India&apos;s Digital Personal Data Protection Act, 2023, you have the right
        to access the personal data we hold about you, to have inaccurate data corrected,
        to have your data erased, and to complain to the Data Protection Board of India.
        Most of this you can do yourself in the app; for anything else, email{" "}
        <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a> and we will
        respond within 30 days.
      </p>

      <h2>9. Children</h2>
      <p>
        {site.name} is not intended for anyone under 18. We ask for your date of birth at
        sign-up for this reason. If you believe a minor has created an account, contact
        us and we will remove it.
      </p>

      <h2>10. Security</h2>
      <p>
        Traffic between the app and our servers is encrypted in transit using TLS. Access
        to production systems is restricted. No system is perfectly secure, but if a
        breach affects your personal data we will notify you and the relevant authority
        as the law requires.
      </p>

      <h2>11. Changes to this policy</h2>
      <p>
        We will update this page when our practices change and revise the date at the
        top. If a change is significant we will tell you in the app.
      </p>

      <h2>12. Contact</h2>
      <p>
        Questions, requests or complaints about your data:{" "}
        <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
        <br />
        {legal.entity}, {legal.jurisdiction}
      </p>
    </LegalLayout>
  );
}
