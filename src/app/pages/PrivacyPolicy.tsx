import { Mail, MapPin } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 md:px-8">
      <div className="mx-auto max-w-[900px]">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#94A3B8]">Last updated: February 17, 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-[#F8FAFC] mb-4">
              Introduction
            </h2>
            <div className="text-[#94A3B8] space-y-4 leading-relaxed">
              <p>
                Apps From Zero LTD ("we," "our," or "us") is committed to
                protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website and use our services.
              </p>
              <p>
                Please read this privacy policy carefully. If you do not agree
                with the terms of this privacy policy, please do not access the
                site or use our services.
              </p>
            </div>
          </section>

          {/* Information Collection */}
          <section className="bg-[#1E293B] border border-[#334155] rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-[#F8FAFC] mb-4">
              Information Collection and Use
            </h2>
            <div className="text-[#94A3B8] space-y-4 leading-relaxed">
              <p>
                We may collect information about you in a variety of ways. The
                information we may collect on the site includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong className="text-[#F8FAFC]">Personal Data:</strong>{' '}
                  Personally identifiable information, such as your name and
                  email address, that you voluntarily give to us when you
                  contact us through our website.
                </li>
                <li>
                  <strong className="text-[#F8FAFC]">Usage Data:</strong>{' '}
                  Information our servers automatically collect when you access
                  the site, such as your IP address, browser type, operating
                  system, access times, and the pages you have viewed.
                </li>
                <li>
                  <strong className="text-[#F8FAFC]">Cookies and Tracking:</strong>{' '}
                  We may use cookies and similar tracking technologies to track
                  activity on our site and store certain information.
                </li>
              </ul>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-semibold text-[#F8FAFC] mb-4">
              Data Security
            </h2>
            <div className="text-[#94A3B8] space-y-4 leading-relaxed">
              <p>
                We use administrative, technical, and physical security measures
                to help protect your personal information. While we have taken
                reasonable steps to secure the personal information you provide
                to us, please be aware that despite our efforts, no security
                measures are perfect or impenetrable.
              </p>
              <p>
                Any information disclosed online is vulnerable to interception
                and misuse by unauthorized parties. Therefore, we cannot
                guarantee complete security if you provide personal information.
              </p>
            </div>
          </section>

          {/* Third-Party Services */}
          <section className="bg-[#1E293B] border border-[#334155] rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-[#F8FAFC] mb-4">
              Third-Party Services
            </h2>
            <div className="text-[#94A3B8] space-y-4 leading-relaxed">
              <p>
                We may use third-party service providers to monitor and analyze
                the use of our service, to contact you, and to assist us in
                providing and improving our services.
              </p>
              <p>
                These third parties have access to your personal information
                only to perform these tasks on our behalf and are obligated not
                to disclose or use it for any other purpose.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Analytics providers</li>
                <li>Email service providers</li>
                <li>Cloud hosting providers</li>
              </ul>
            </div>
          </section>

          {/* User Rights */}
          <section>
            <h2 className="text-2xl font-semibold text-[#F8FAFC] mb-4">
              User Rights
            </h2>
            <div className="text-[#94A3B8] space-y-4 leading-relaxed">
              <p>
                Depending on your location and applicable law, you may have the
                following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong className="text-[#F8FAFC]">Access:</strong> You have
                  the right to request copies of your personal data.
                </li>
                <li>
                  <strong className="text-[#F8FAFC]">Rectification:</strong> You
                  have the right to request that we correct any information you
                  believe is inaccurate or complete information you believe is
                  incomplete.
                </li>
                <li>
                  <strong className="text-[#F8FAFC]">Erasure:</strong> You have
                  the right to request that we erase your personal data, under
                  certain conditions.
                </li>
                <li>
                  <strong className="text-[#F8FAFC]">Restrict Processing:</strong>{' '}
                  You have the right to request that we restrict the processing
                  of your personal data, under certain conditions.
                </li>
                <li>
                  <strong className="text-[#F8FAFC]">Data Portability:</strong>{' '}
                  You have the right to request that we transfer the data that
                  we have collected to another organization, or directly to you,
                  under certain conditions.
                </li>
              </ul>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-gradient-to-br from-[#2563EB] to-[#38BDF8] rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Contact Information
            </h2>
            <div className="text-white/90 space-y-6">
              <p>
                If you have questions or comments about this Privacy Policy,
                please contact us at:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Apps From Zero LTD</p>
                    <p>London, United Kingdom</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={20} className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <a
                      href="mailto:privacy@appsfromzero.com"
                      className="hover:underline"
                    >
                      privacy@appsfromzero.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-[#F8FAFC] mb-4">
              Changes to This Privacy Policy
            </h2>
            <div className="text-[#94A3B8] space-y-4 leading-relaxed">
              <p>
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date at the top of
                this Privacy Policy.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for
                any changes. Changes to this Privacy Policy are effective when
                they are posted on this page.
              </p>
            </div>
          </section>

          {/* Legal Compliance */}
          <section className="bg-[#1E293B] border border-[#334155] rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-[#F8FAFC] mb-4">
              Legal Compliance
            </h2>
            <div className="text-[#94A3B8] space-y-4 leading-relaxed">
              <p>
                We comply with applicable data protection laws, including but
                not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>UK General Data Protection Regulation (UK GDPR)</li>
                <li>Data Protection Act 2018</li>
                <li>Other applicable international data protection laws</li>
              </ul>
              <p>
                Apps From Zero LTD is registered and operates in the United
                Kingdom. Our services are intended for users in compliance with
                applicable local laws.
              </p>
            </div>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-12 pt-8 border-t border-[#334155] text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-[#38BDF8] hover:text-[#2563EB] transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
