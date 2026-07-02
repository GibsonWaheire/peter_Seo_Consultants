import PageHeader from '../components/PageHeader'
import DownloadPolicyButton from '../components/DownloadPolicyButton'

const Section = ({ title, children }) => (
  <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3">
    <h2 className="text-slate-900 font-bold text-base">{title}</h2>
    <div className="text-slate-600 text-sm leading-relaxed space-y-3">{children}</div>
  </div>
)

export default function TermsOfService() {
  return (
    <div className="bg-slate-50 pt-[104px]">
      <PageHeader
        label="Legal"
        title="Terms &amp; Conditions"
        subtitle="Last updated: 15 April 2026"
        images={[{ src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80', alt: 'Documents' }]}
      />

      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 policy-content">

          {/* Print header */}
          <div className="hidden page-header-print">
            <h1 className="text-2xl font-bold">Iknus Consultants — Terms &amp; Conditions</h1>
            <p className="text-sm text-slate-500">Last updated: 15 April 2026 · waheire60@gmail.com · +254 727 957 175</p>
          </div>

          <div className="flex items-center justify-between mb-6 no-print">
            <p className="text-xs text-slate-400">Effective: 15 April 2026</p>
            <DownloadPolicyButton label="Download Terms" />
          </div>

          {/* Intro box */}
          <div className="bg-slate-900 text-white rounded-xl p-6 mb-6 text-sm leading-relaxed">
            These Terms and Conditions ("Agreement") constitute a legally binding contract between
            you ("Client", "you", "your") and Iknus Consultants ("Company", "we", "us", "our"),
            an SEO and digital marketing consultancy registered and operating in Nairobi, Kenya.
            By accessing this website, requesting a quote, or completing any payment transaction
            with Iknus Consultants, you unconditionally accept and agree to be bound by the
            terms set out herein. If you do not agree with any part of this Agreement, you must
            not use our services.
          </div>

          <div className="space-y-4">

            <Section title="1. Parties and Agreement">
              <p>
                This Agreement is entered into between Iknus Consultants (Nairobi, Kenya)
                and the Client. It governs all services procured through our website, via WhatsApp,
                or through any other channel through which Iknus Consultants receives a service
                request or payment.
              </p>
              <p>
                By proceeding with a purchase, the Client confirms they have read, understood, and
                agreed to this Agreement in its entirety, including the{' '}
                <a href="/refund" className="text-emerald-400 underline">Refund Policy</a> and{' '}
                <a href="/privacy" className="text-emerald-400 underline">Privacy Notice</a>, which
                are incorporated herein by reference.
              </p>
            </Section>

            <Section title="2. Scope of Services">
              <p>
                Iknus Consultants provides the following categories of services, the full details
                of which are set out on our Services and Pricing pages:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Search engine optimisation (SEO) — monthly management packages and one-off audits</li>
                <li>Pay-per-click (PPC) and Google Ads campaign management</li>
                <li>Meta Ads (Facebook &amp; Instagram) campaign management</li>
                <li>Website design and development (landing pages, business sites, e-commerce)</li>
                <li>Content strategy, blog writing, and keyword research</li>
                <li>Technical SEO audits, on-page optimisation, and link building</li>
                <li>Local SEO and Google Business Profile optimisation</li>
              </ul>
              <p>
                All prices are quoted in Kenyan Shillings (KES) unless otherwise stated. Prices are
                subject to change without prior notice; the price applicable to your order is the
                price displayed at the time your payment is confirmed.
              </p>
            </Section>

            <Section title="3. Payment Obligations">
              <p>
                Payment is due in full (or as a confirmed deposit) prior to commencement of any work,
                unless a separate written arrangement has been agreed. Iknus Consultants shall
                not be obligated to commence or continue any service until payment has been received
                and verified.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong className="text-slate-800">Accepted methods:</strong> Paystack (card, Apple Pay,
                  M-Pesa via Paystack) and direct M-Pesa transfer. All transactions are settled in KES.
                </li>
                <li>
                  <strong className="text-slate-800">International clients (UAE and other):</strong> Where
                  payment is entered in AED or another foreign currency, the equivalent KES amount is
                  calculated using the live exchange rate at the time of transaction. Iknus Consultants
                  is not responsible for currency fluctuations between quote and payment.
                </li>
                <li>
                  <strong className="text-slate-800">Project deposits:</strong> A minimum deposit of 50%
                  is required before work commences on any website or large SEO project. The remaining
                  balance is payable upon delivery of the completed project.
                </li>
                <li>
                  <strong className="text-slate-800">Monthly retainers:</strong> SEO management plans are
                  billed monthly in advance. Access to ongoing services and reporting is contingent on
                  payment being received at the start of each billing period.
                </li>
              </ul>
            </Section>

            <Section title="4. Refunds">
              <p>
                All refunds are governed by Iknus Consultants'{' '}
                <a href="/refund" className="text-emerald-600 underline">Refund Policy</a>, which forms
                part of this Agreement. Where an approved refund is due, it shall be returned exclusively
                via the same payment channel used for the original transaction. Iknus Consultants shall
                not redirect refunds to any alternative account, number, or payment method. International
                clients should note that currency conversion differences and any fees imposed by their
                card issuer or bank are non-reimbursable by Iknus Consultants.
              </p>
            </Section>

            <Section title="5. Turnaround Times and Delays">
              <p>
                Turnaround times published on this website are reasonable estimates based on normal
                operating conditions (Monday–Saturday, 8:00 am–8:00 pm EAT). They do not constitute
                guaranteed delivery dates. Iknus Consultants shall not be held in breach of this
                Agreement solely on account of delays attributable to:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Search engine algorithm updates or third-party platform changes (Google, Meta, etc.)</li>
                <li>Incomplete, inaccurate, or late submission of required information by the Client</li>
                <li>Public holidays, force majeure events, or other circumstances beyond our control</li>
              </ul>
              <p>
                Iknus Consultants shall notify the Client of any material delay and shall take
                reasonable steps to complete the service as soon as practicable.
              </p>
            </Section>

            <Section title="6. Client Obligations">
              <p>By engaging Iknus Consultants, the Client agrees to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Provide accurate, complete, and truthful information required for service delivery</li>
                <li>Respond to queries from Iknus Consultants within a reasonable time to avoid project delays</li>
                <li>Grant necessary access to website, analytics, and ad accounts required to perform the agreed service</li>
                <li>Use Iknus Consultants' services solely for lawful purposes and in compliance with all applicable laws of Kenya</li>
              </ul>
              <p>
                Iknus Consultants reserves the right to suspend or terminate service delivery
                without refund if the Client is found to have provided false information or to be
                using the service for unlawful purposes.
              </p>
            </Section>

            <Section title="7. Intellectual Property">
              <p>
                Upon receipt of final payment in full, all intellectual property rights in the
                deliverables produced for the Client (including website code, design assets, content,
                and strategy documents) are assigned to the Client. Iknus Consultants retains no
                ongoing licence to use such materials, save that the Company reserves the right to
                display completed work in its portfolio unless the Client provides written objection
                within 14 days of delivery.
              </p>
              <p>
                Third-party software, frameworks, fonts, and libraries incorporated into deliverables
                remain subject to their respective licence terms, which are separate from this Agreement.
              </p>
            </Section>

            <Section title="8. Limitation of Liability">
              <p>
                To the maximum extent permitted by applicable law, Iknus Consultants' total
                aggregate liability to the Client under or in connection with this Agreement shall
                not exceed the total fees paid by the Client for the specific service giving rise
                to the claim.
              </p>
              <p>
                Iknus Consultants shall not be liable for any indirect, consequential, special,
                or punitive damages, including but not limited to loss of revenue, loss of data, loss
                of business opportunity, or reputational damage, whether arising in contract, tort,
                or otherwise, even if Iknus Consultants has been advised of the possibility of
                such damages.
              </p>
              <p>
                Iknus Consultants expressly excludes liability for ranking fluctuations caused
                by search engine algorithm updates, delays or errors caused by third-party platforms
                (including Paystack, Safaricom, Google, or Meta), or the Client's own acts or omissions.
              </p>
            </Section>

            <Section title="9. Cookies and Third-Party Tools">
              <p>
                This website uses cookies and third-party tools to enhance your browsing experience,
                enable secure payments, and protect your privacy. We do not use advertising cookies
                or behavioural tracking scripts. By accepting our cookie notice, you consent to the
                use of these functional cookies. You may withdraw consent at any time by clearing your
                browser cookies and local storage. See our{' '}
                <a href="/privacy" className="text-emerald-600 underline">Privacy Notice</a> for full details.
              </p>
            </Section>

            <Section title="10. Governing Law and Dispute Resolution">
              <p>
                This Agreement shall be governed by and construed in accordance with the laws of Kenya.
                Any dispute, controversy, or claim arising out of or in connection with this Agreement
                shall first be referred to Iknus Consultants for informal resolution. If not resolved
                within 14 days, the matter shall be subject to the exclusive jurisdiction of the competent
                courts of Kenya.
              </p>
              <p>
                International clients, including those located in the UAE, Gulf Cooperation Council
                (GCC) states, or any other jurisdiction, expressly agree that Kenyan law governs
                all transactions and disputes with Iknus Consultants, and waive any objection to
                Kenyan jurisdiction on grounds of inconvenience or otherwise.
              </p>
            </Section>

            <Section title="11. Amendments">
              <p>
                Iknus Consultants reserves the right to amend this Agreement at any time. The
                version published on this page at the date of your order shall be the version that
                governs your transaction. Continued use of the website or services after any amendment
                constitutes acceptance of the revised terms.
              </p>
            </Section>

            <Section title="12. Contact">
              <p>
                For any questions, disputes, or notices under this Agreement, contact Iknus Consultants at:
              </p>
              <ul className="list-none space-y-1">
                <li><strong className="text-slate-800">Email:</strong>{' '}
                  <a href="mailto:waheire60@gmail.com" className="text-emerald-600 underline">waheire60@gmail.com</a>
                </li>
                <li><strong className="text-slate-800">WhatsApp:</strong> +254 727 957 175</li>
                <li><strong className="text-slate-800">Location:</strong> Nairobi, Kenya</li>
              </ul>
            </Section>

          </div>
        </div>
      </section>
    </div>
  )
}
