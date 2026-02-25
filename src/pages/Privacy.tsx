import PageLayout from '../components/PageLayout';

const SECTIONS = [
  {
    id: 'PVY_01',
    title: 'DATA COLLECTION',
    content: `When you use the GlamBot service at an event, we capture video footage of you using our robotic motion capture system. We also collect personal information you provide when booking our services, including your name, email address, phone number, and event details. We do not collect data passively — all capture is initiated by the subject stepping into the designated capture zone.`,
  },
  {
    id: 'PVY_02',
    title: 'USE OF FOOTAGE',
    content: `Video footage captured by GlamBot is processed on-site and delivered digitally to the subject within minutes. Footage may be used by Orangewood Labs for promotional purposes (social media, website, marketing materials) unless the subject explicitly opts out at the time of capture. All promotional usage is non-commercial with respect to the subject's likeness.`,
  },
  {
    id: 'PVY_03',
    title: 'DATA STORAGE',
    content: `Captured footage is stored on secure cloud infrastructure for a period of 90 days following the event, after which it is permanently deleted. Booking information (name, email, phone, event details) is retained for 12 months for operational purposes. All data is encrypted at rest and in transit using industry-standard AES-256 encryption.`,
  },
  {
    id: 'PVY_04',
    title: 'THIRD-PARTY SHARING',
    content: `We do not sell, trade, or otherwise transfer your personal information or footage to third parties. Footage is shared only with the event organizer who booked the GlamBot service and the individual subjects captured. Cloud infrastructure providers (Google Cloud) process data on our behalf under strict data processing agreements.`,
  },
  {
    id: 'PVY_05',
    title: 'YOUR RIGHTS',
    content: `You have the right to: (a) request access to your captured footage, (b) request deletion of your footage and personal data, (c) opt out of promotional usage of your footage, (d) withdraw consent at any time. To exercise any of these rights, contact us at privacy@orangewood.co with your request and event details.`,
  },
  {
    id: 'PVY_06',
    title: 'COOKIES & ANALYTICS',
    content: `This website uses minimal analytics to understand traffic patterns. We do not use third-party advertising cookies. Essential cookies are used for site functionality only. No personal data is collected through this website beyond what you voluntarily submit through our booking form.`,
  },
  {
    id: 'PVY_07',
    title: 'CONTACT',
    content: `For any privacy-related inquiries or data requests, contact our data protection team at privacy@orangewood.co. We will respond to all requests within 30 business days. Orangewood Labs Pvt. Ltd., Bangalore, Karnataka, India.`,
    accent: true,
  },
];

export default function Privacy() {
  return (
    <PageLayout sectionId="SEC_PRIVACY" sectionLabel="PRIVACY POLICY">
      <div className="font-mono-ibm text-xs mb-8" style={{ color: '#858585' }}>
        LAST_UPDATED: 2026.02.24 // VERSION: 1.2
      </div>

      <div className="flex flex-col gap-0">
        {SECTIONS.map((s) => (
          <div
            key={s.id}
            className="p-6 md:p-8"
            style={{
              borderLeft: s.accent ? '5px solid #FF4D00' : '5px solid #000',
              borderBottom: '1px solid #000',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono-ibm text-xs" style={{ color: '#858585' }}>
                {s.id}
              </span>
              <span className="font-anton text-xl md:text-2xl" style={{ color: '#000' }}>
                {s.title}
              </span>
            </div>
            <p className="font-mono-ibm text-xs md:text-sm leading-relaxed" style={{ color: '#858585' }}>
              {s.content}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 font-mono-ibm text-xs" style={{ color: '#B0B0B0' }}>
        [DOC:LEGAL_PVY] [JURISDICTION:IN] [COMPLIANCE:IT_ACT_2000]
      </div>
    </PageLayout>
  );
}
