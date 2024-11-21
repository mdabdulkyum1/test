import { Helmet } from "react-helmet-async";


function Contact() {
  return (
    <>
    <Helmet>
      <title>Contact | Winter Clothing Donation</title>
    </Helmet>
    <div className="bg-primary-bg text-primary-text font-poppins min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-snowy-white p-8 rounded-lg shadow-lg">
        <h2 className="text-heading text-2xl font-bold mb-6 text-center">
          Get in Touch
        </h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-primary-text">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-slate-gray rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-frosty-blue focus:border-transparent"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-primary-text">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-slate-gray rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-frosty-blue focus:border-transparent"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-primary-text">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full border border-slate-gray rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-frosty-blue focus:border-transparent"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-frost-green text-snowy-white py-2 px-4 rounded-md font-medium hover:bg-primary-text transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Contact;
