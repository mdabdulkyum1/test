

import faq from '../../../assets/faq.jpg'
import { Link } from 'react-router-dom';

function Faq() {
  return (
    <section className="text-center my-8">
      <h1 className="text-4xl text-heading font-extrabold">Frequently Asked Questions</h1>
      <p className="text-lg text-primary-text mt-2">Get answers to your questions about our mission and how you can contribute.</p>

      <div className="flex flex-col lg:flex-row gap-6 w-5/6 mx-auto">
        <div className="w-full lg:w-1/2 mx-auto mt-8">
          <div className="collapse collapse-arrow mb-6">
            <input type="checkbox" className="peer" />
            <div className="text-left collapse-title text-2xl font-semibold text-heading">
              What type of clothing can I donate?
            </div>
            <div className="collapse-content text-primary-text text-left">
              <p className="">
                We accept gently used or new winter coats, hats, scarves, gloves, and other warm clothing items. Please make sure the items are in good condition, clean, and free of stains.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow mb-6">
            <input type="checkbox" className="peer" />
            <div className="text-left collapse-title text-2xl font-semibold text-heading">
              How can I volunteer for this cause?
            </div>
            <div className="collapse-content text-primary-text text-left">
              <p className="">
                You can volunteer by helping us organize donation drives, sort donated clothing, and assist with distribution. Check our volunteer page to sign up for upcoming events and opportunities.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow mb-6">
            <input type="checkbox" className="peer" />
            <div className="text-left collapse-title text-2xl font-semibold text-heading">
              Can I make a monetary donation?
            </div>
            <div className="collapse-content text-primary-text text-left">
              <p className="">
                Yes, we welcome financial contributions to support our logistics and distribution efforts. Every donation helps us reach more people in need. You can donate securely through our website.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow mb-6">
            <input type="checkbox" className="peer" />
            <div className="text-left collapse-title text-2xl font-semibold text-heading">
              Where are the donation drop-off locations?
            </div>
            <div className="collapse-content text-primary-text text-left">
              <p className="">
                Our donation drop-off locations are available throughout the city. Visit our Donate page for a list of all locations and hours of operation.
              </p>
            </div>
          </div>
        </div>

      
        <div className="w-full lg:w-1/2" >
          <img src={faq} alt="Faq" className="w-full h-auto rounded-md" />
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link to="/campaigns" className="btn bg-ice-blue font-semibold rounded-md hover:bg-frosty-blue transition py-2 px-6">
          Donate Now
        </Link>
      </div>
    </section>
  );
}

export default Faq;
