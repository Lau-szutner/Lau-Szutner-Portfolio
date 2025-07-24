import Container from './Container';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const FormPanel: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const currentTime = new Date().toLocaleString(); // para la variable {{time}}

    // Agregamos dinámicamente un campo hidden para time
    const form = formRef.current;
    if (!form) return;

    const hiddenInput = document.createElement('input');
    hiddenInput.type = 'hidden';
    hiddenInput.name = 'time';
    hiddenInput.value = currentTime;
    form.appendChild(hiddenInput);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert('Mensaje enviado con éxito ✅');
      form.reset();
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      alert('Hubo un error al enviar el mensaje ❌');
    }

    // Limpieza del campo hidden
    form.removeChild(hiddenInput);
  };

  return (
    <div className="flex flex-col w-full">
      <h3 className="text-2xl font-bold mb-6 text-left">Send a Message</h3>

      <Container>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full grid place-items-center gap-5"
        >
          <div className="w-full">
            <label
              htmlFor="name"
              className="block text-sm font-bold mb-2 text-left pl-2"
            >
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full !box-border px-4 py-3 border border-darktech-border rounded-lg focus:outline-none focus:ring-2 focus:ring-darktech-neon-green/50 focus:border-transparent"
              placeholder="John Doe"
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="email"
              className="block text-sm font-bold mb-2 text-left pl-2"
            >
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full !box-border px-4 py-3 border border-darktech-border rounded-lg focus:outline-none focus:ring-2 focus:ring-darktech-neon-green/50 focus:border-transparent"
              placeholder="john@example.com"
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="message"
              className="block text-sm font-bold mb-2 text-left pl-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full !box-border px-4 py-3 border border-darktech-border rounded-lg focus:outline-none focus:ring-2 focus:ring-darktech-neon-green/50 focus:border-transparent"
              placeholder="Your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 flex items-center justify-center gap-2 bg-gradient-to-r from-darktech-neon-green to-darktech-holo-cyan text-darktech-background font-bold rounded-lg transition-transform duration-300 hover:scale-[1.02] disabled:opacity-70"
          >
            {/* Send Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-send"
            >
              <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
              <path d="m21.854 2.147-10.94 10.939"></path>
            </svg>
            Send Message
          </button>
        </form>
      </Container>
    </div>
  );
};

export default FormPanel;
