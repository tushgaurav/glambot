import { useState, useEffect } from 'react';
import PageLayout from '../components/PageLayout';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000';

interface ActiveEvent {
  id: number;
  name: string;
  location: string | null;
  eventDate: string;
}

const initialFormData = {
  name: '',
  email: '',
  eventId: '',
};

export default function Event() {
  const [formData, setFormData] = useState(initialFormData);
  const [events, setEvents] = useState<ActiveEvent[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE}/events/active`)
      .then((res) => res.json())
      .then((data) => setEvents(data.events || []))
      .catch(() => {});
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const res = await fetch(`${API_BASE}/shot-requests`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          eventId: Number(formData.eventId),
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error?.message || 'Something went wrong');
      }

      setSubmitSuccess(true);
      setFormData(initialFormData);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : 'Network error. Please try again.'
      );
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
    <PageLayout sectionId="EVENT" sectionLabel="CAPTURE YOUR MOMENT">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <form onSubmit={handleSubmit}>
          <div
            className="flex flex-col gap-0"
            style={{ border: '3px solid #000' }}
          >
            <div
              className="p-4 md:p-6"
              style={{ borderBottom: '3px solid #000' }}
            >
              <label
                className="font-mono-ibm text-xs tracking-widest block mb-2 font-semibold"
                style={{ color: '#858585' }}
              >
                NAME *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="ENTER YOUR NAME"
                required
                style={inputStyle}
              />
            </div>

            <div
              className="p-4 md:p-6"
              style={{ borderBottom: '3px solid #000' }}
            >
              <label
                className="font-mono-ibm text-xs tracking-widest block mb-2 font-semibold"
                style={{ color: '#858585' }}
              >
                EMAIL *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ENTER YOUR EMAIL"
                required
                style={inputStyle}
              />
            </div>

            <div className="p-4 md:p-6">
              <label
                className="font-mono-ibm text-xs tracking-widest block mb-2 font-semibold"
                style={{ color: '#858585' }}
              >
                EVENT *
              </label>
              <select
                name="eventId"
                value={formData.eventId}
                onChange={handleChange}
                required
                style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }}
              >
                <option value="">SELECT EVENT</option>
                {events.map((ev) => (
                  <option key={ev.id} value={ev.id}>
                    {ev.name}
                    {ev.location ? ` — ${ev.location}` : ''}
                  </option>
                ))}
              </select>
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
            {isSubmitting ? 'SUBMITTING...' : 'SUBMIT →'}
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
              <p className="font-semibold">REQUEST SUBMITTED.</p>
              <p className="mt-1" style={{ color: '#858585' }}>
                Thank you! Your shot request has been captured.
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

        <div>
          <div
            className="mb-8 p-6 md:p-8"
            style={{ border: '3px solid #000', borderTop: '4px solid #FF4D00' }}
          >
            <span
              className="font-mono-ibm text-xs tracking-widest block mb-4"
              style={{ color: '#858585' }}
            >
              HOW IT WORKS
            </span>
            <p
              className="font-mono-ibm text-sm leading-relaxed"
              style={{ color: '#000' }}
            >
              Select the event you're attending, enter your details, and we'll
              make sure your GlamBot shots are ready for you.
            </p>
            <p
              className="font-mono-ibm text-sm leading-relaxed mt-4"
              style={{ color: '#858585' }}
            >
              Your photos will be delivered to the email address you provide.
            </p>
          </div>

          <div className="mt-6 font-mono-ibm text-xs" style={{ color: '#B0B0B0' }}>
            [FORM:CAPTURE-V1] [ENCRYPTION:ACTIVE]
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
