import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jarly Privacy Policy",
  description:
    "Privacy policy for Jarly: Mood Tracker & Diary, an Android and iOS app by FarazInc.",
  alternates: { canonical: "/jarly/privacy-policy" },
};

const EFFECTIVE_DATE = "October 31, 2026";
const CONTACT_EMAIL = "farazabir50@gmail.com";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="space-y-3 text-muted-foreground leading-relaxed">{children}</div>
    </section>
  );
}

export default function JarlyPrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 space-y-10">
        <header className="space-y-2">
          <p className="text-sm text-muted-foreground">FarazInc</p>
          <h1 className="text-3xl font-bold sm:text-4xl">Jarly Privacy Policy</h1>
          <p className="text-sm text-muted-foreground">Effective date: {EFFECTIVE_DATE}</p>
        </header>

        <p className="leading-relaxed text-muted-foreground">
          This policy explains how <strong className="text-foreground">Jarly: Mood Tracker &amp; Diary</strong>{" "}
          (&quot;Jarly&quot;, &quot;the app&quot;), developed by Faraz Ahmed Abir (FarazInc,
          &quot;we&quot;, &quot;us&quot;), handles your information. In short: your diary stays on
          your device. We do not run servers that collect, store or read your entries.
        </p>

        <Section title="1. Information you create in the app">
          <p>
            Moods, emojis, notes, tags, mood ratings, photos, videos and voice notes that you add
            to entries are stored <strong className="text-foreground">only on your device</strong>,
            in the app&apos;s private storage. We never receive, upload or have access to this
            content.
          </p>
          <p>
            App settings (such as your jar theme, reminder time and achievements) are also stored
            locally on your device.
          </p>
        </Section>

        <Section title="2. Device permissions">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-foreground">Microphone</strong> – only when you record a
              voice note. Recordings are saved on your device.
            </li>
            <li>
              <strong className="text-foreground">Photos, videos and camera</strong> – only when
              you choose to attach media to an entry.
            </li>
            <li>
              <strong className="text-foreground">Motion sensors</strong> – used to let the emojis
              in your jar move when you tilt your phone. Sensor data is not stored or shared.
            </li>
            <li>
              <strong className="text-foreground">Notifications</strong> – used for optional daily
              reminders that you can turn off at any time.
            </li>
            <li>
              <strong className="text-foreground">Biometrics / PIN</strong> – used for the optional
              app lock. Fingerprint and face data are handled by your device&apos;s operating
              system and are never available to us. Your PIN is stored on your device only as a
              salted hash.
            </li>
          </ul>
        </Section>

        <Section title="3. Backups and sharing">
          <p>
            If you export a backup or share a mood card, the app creates a file and hands it to the
            destination you choose (for example, your files app or another app). Where that file
            goes is controlled by you and that destination&apos;s own privacy policy. We do not
            receive a copy.
          </p>
          <p>
            Your device&apos;s own system backup (such as Google or iCloud device backup) may
            include app data, depending on your device settings.
          </p>
        </Section>

        <Section title="4. Advertising">
          <p>
            Jarly is free and shows ads through{" "}
            <strong className="text-foreground">Google AdMob</strong>. AdMob is provided by Google
            and is governed by{" "}
            <a
              className="underline text-foreground"
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noopener noreferrer"
            >
              how Google uses information from apps that use its services
            </a>{" "}
            and the{" "}
            <a
              className="underline text-foreground"
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Privacy Policy
            </a>
            .
          </p>
          <p>
            Where required (for example in the EEA, UK and Switzerland), the app asks for your
            consent before showing personalised ads, using Google&apos;s consent tool. You can
            change your choice at any time from the app&apos;s Settings (Privacy options). You can
            also reset or delete your advertising ID, or opt out of personalised ads, in your
            device settings.
          </p>
          <p>Your diary content is never used for advertising and is never shared with Google.</p>
        </Section>

        <Section title="5. What we do not do">
          <ul className="list-disc space-y-2 pl-5">
            <li>We do not require an account or collect your name, email or phone number.</li>
            <li>We do not sell your personal information.</li>
            <li>We do not use analytics or tracking tools of our own.</li>
          </ul>
        </Section>

        <Section title="6. Data retention and deletion">
          <p>
            Your data stays on your device until you delete it. You can delete individual entries
            in the app, or remove everything by clearing the app&apos;s data or uninstalling the
            app. Because we hold no copy, we cannot recover deleted data, so export a backup first
            if you want to keep it.
          </p>
        </Section>

        <Section title="7. Children">
          <p>
            Jarly is not directed at children under 13, and we do not knowingly collect personal
            information from them. If you believe a child has provided information through the
            app&apos;s ads, contact us and we will help.
          </p>
        </Section>

        <Section title="8. Security">
          <p>
            Your data is protected by your device&apos;s security and the app&apos;s private
            storage. You can add a PIN or biometric lock in Settings. No method of storage is 100%
            secure, so keep your device protected with a screen lock.
          </p>
        </Section>

        <Section title="9. Changes to this policy">
          <p>
            We may update this policy from time to time. Changes will be posted on this page with a
            new effective date.
          </p>
        </Section>

        <Section title="10. Contact">
          <p>
            Questions about this policy? Email{" "}
            <a className="underline text-foreground" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </Section>
      </article>
    </main>
  );
}
