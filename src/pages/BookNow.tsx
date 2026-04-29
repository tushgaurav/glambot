import { useState } from 'react';
import PageLayout from '../components/PageLayout';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000';
const EVENT_TYPES = ['WEDDING', 'CORPORATE', 'BRAND ACTIVATION', 'PRIVATE PARTY', 'OTHER'];

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  eventType: '',
  eventDate: '',
  venue: '',
  guestCount: '',
  message: '',
};

export default function BookNow() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    const payload: Record<string, unknown> = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      eventType: formData.eventType,
      eventDate: formData.eventDate,
    };
    if (formData.venue) payload.venue = formData.venue;
    if (formData.guestCount) payload.guestCount = Number(formData.guestCount);
    if (formData.message) payload.message = formData.message;

    try {
      const res = await fetch(`${API_BASE}/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error?.message || 'Something went wrong');
      }

      setSubmitSuccess(true);
      setFormData(initialFormData);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    border: '3px solid #000',
    backgroundColor: 'transparent',
    padding: '12px 16px',
    width: '100%',
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '13px',
    color: '#000',
    outline: 'none',
  };

  return (
    <PageLayout sectionId="BOOKING" sectionLabel="BOOK NOW">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left: Form */}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-0" style={{ border: '3px solid #000' }}>
            {/* Name */}
            <div className="p-4 md:p-6" style={{ borderBottom: '3px solid #000' }}>
              <label className="font-mono-ibm text-xs tracking-widest block mb-2 font-semibold" style={{ color: '#858585' }}>
                NAME *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="ENTER FULL NAME"
                required
                style={inputStyle}
              />
            </div>

            {/* Email */}
            <div className="p-4 md:p-6" style={{ borderBottom: '3px solid #000' }}>
              <label className="font-mono-ibm text-xs tracking-widest block mb-2 font-semibold" style={{ color: '#858585' }}>
                EMAIL *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ENTER EMAIL ADDRESS"
                required
                style={inputStyle}
              />
            </div>

            {/* Phone */}
            <div className="p-4 md:p-6" style={{ borderBottom: '3px solid #000' }}>
              <label className="font-mono-ibm text-xs tracking-widest block mb-2 font-semibold" style={{ color: '#858585' }}>
                PHONE *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXXXXXXX"
                required
                style={inputStyle}
              />
            </div>

            {/* Event Type */}
            <div className="p-4 md:p-6" style={{ borderBottom: '3px solid #000' }}>
              <label className="font-mono-ibm text-xs tracking-widest block mb-2 font-semibold" style={{ color: '#858585' }}>
                EVENT TYPE *
              </label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
                style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }}
              >
                <option value="">SELECT EVENT TYPE</option>
                {EVENT_TYPES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Date + Venue row */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-4 md:p-6" style={{ borderBottom: '3px solid #000', borderRight: '3px solid #000' }}>
                <label className="font-mono-ibm text-xs tracking-widest block mb-2 font-semibold" style={{ color: '#858585' }}>
                  DATE *
                </label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  required
                  style={{ ...inputStyle, cursor: 'pointer' }}
                />
              </div>
              <div className="p-4 md:p-6" style={{ borderBottom: '3px solid #000' }}>
                <label className="font-mono-ibm text-xs tracking-widest block mb-2 font-semibold" style={{ color: '#858585' }}>
                  VENUE
                </label>
                <input
                  type="text"
                  name="venue"
                  value={formData.venue}
                  onChange={handleChange}
                  placeholder="CITY / VENUE NAME"
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Guest count */}
            <div className="p-4 md:p-6" style={{ borderBottom: '3px solid #000' }}>
              <label className="font-mono-ibm text-xs tracking-widest block mb-2 font-semibold" style={{ color: '#858585' }}>
                EST. GUEST COUNT
              </label>
              <input
                type="number"
                name="guestCount"
                value={formData.guestCount}
                onChange={handleChange}
                placeholder="NUMBER OF GUESTS"
                style={inputStyle}
              />
            </div>

            {/* Message */}
            <div className="p-4 md:p-6">
              <label className="font-mono-ibm text-xs tracking-widest block mb-2 font-semibold" style={{ color: '#858585' }}>
                ADDITIONAL NOTES
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="ANY SPECIAL REQUIREMENTS..."
                rows={4}
                style={{ ...inputStyle, resize: 'vertical' }}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="cta-button font-mono-ibm text-sm tracking-widest px-8 py-4 mt-6 w-full md:w-auto"
            style={{
              border: '3px solid #000',
              backgroundColor: '#000',
              color: '#FAFAFA',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              opacity: isSubmitting ? 0.6 : 1,
            }}
          >
            {isSubmitting ? 'SUBMITTING...' : 'SUBMIT BOOKING REQUEST →'}
          </button>

          {submitError && (
            <div
              className="font-mono-ibm text-sm p-4 mt-4"
              style={{ border: '3px solid #FF4D00', color: '#FF4D00' }}
            >
              {submitError}
            </div>
          )}

          {submitSuccess && (
            <div
              className="font-mono-ibm text-sm p-4 mt-4"
              style={{ border: '3px solid #000' }}
            >
              <p className="font-semibold">BOOKING REQUEST SUBMITTED.</p>
              <p className="mt-1" style={{ color: '#858585' }}>
                We will contact you within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setSubmitSuccess(false)}
                className="font-mono-ibm text-xs tracking-widest mt-3 underline cursor-pointer"
              >
                SUBMIT ANOTHER REQUEST
              </button>
            </div>
          )}
        </form>

        {/* Right: Info panel */}
        <div>
          <div className="mb-8 p-6 md:p-8" style={{ border: '3px solid #000', borderTop: '4px solid #FF4D00' }}>
            <span className="font-mono-ibm text-xs tracking-widest block mb-4" style={{ color: '#858585' }}>
              BOOKING INFO
            </span>
            <p className="font-mono-ibm text-sm leading-relaxed" style={{ color: '#000' }}>
              Submit your event details and our team will get back to you within
              24 hours with availability confirmation and a detailed quote.
            </p>
            <p className="font-mono-ibm text-sm leading-relaxed mt-4" style={{ color: '#858585' }}>
              GlamBot requires a minimum 3-week lead time for event bookings.
              Last-minute requests subject to availability.
            </p>
          </div>

          <div className="p-6 md:p-8" style={{ border: '3px solid #000' }}>
            <span className="font-mono-ibm text-xs tracking-widest block mb-4" style={{ color: '#858585' }}>
              CONTACT DIRECT
            </span>
            <div className="flex flex-col gap-3">
              <div>
                <span className="font-mono-ibm text-xs block" style={{ color: '#858585' }}>EMAIL</span>
                <span className="font-mono-ibm text-sm" style={{ color: '#000' }}>glambot@orangewood.co</span>
              </div>
              <div>
                <span className="font-mono-ibm text-xs block" style={{ color: '#858585' }}>PHONE</span>
                <span className="font-mono-ibm text-sm" style={{ color: '#000' }}>+91 80 XXXX XXXX</span>
              </div>
              <div>
                <span className="font-mono-ibm text-xs block" style={{ color: '#858585' }}>LOCATION</span>
                <span className="font-mono-ibm text-sm" style={{ color: '#000' }}>BANGALORE, INDIA</span>
              </div>
            </div>
          </div>

          <div className="mt-6 font-mono-ibm text-xs" style={{ color: '#B0B0B0' }}>
            [FORM:V2.1] [ENCRYPTION:ACTIVE]
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
