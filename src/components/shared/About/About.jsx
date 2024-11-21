

import community from '../../../assets/community.jpeg'
import { Link } from 'react-router-dom';

const About = () => {
    return (
     <section className="bg-frost-green py-12">
      <div className="text-center mb-8" >
          <h1 className="text-4xl text-heading font-extrabold">About Us</h1>
          <p className="text-lg text-primary-text mt-2">Learn more about our mission and how you can make a difference.</p>
      </div>
      <div className="w-5/6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="lg:pr-6" data-aos="fade-up" data-aos-delay="100">
              <h2 className="text-2xl text-heading font-semibold mb-3">Our Mission</h2>
              <p className="text-primary-text mb-4">
                  At <strong>Winter Clothing Donation</strong>, our mission is to ensure warmth and comfort for everyone during the harsh winter months. We strive to collect gently used or new winter clothing and distribute it to individuals and families in need. Our goal is to unite communities through acts of kindness and compassion, making sure that nobody is left vulnerable to the cold.
              </p>
              <h2 className="text-2xl text-heading font-semibold mb-3">How You Can Contribute</h2>
              <p className="text-primary-text">
                  You can be part of this mission by donating your gently used winter coats, hats, scarves, gloves, and other warm clothing. We also welcome financial contributions to help support distribution efforts and logistics. Volunteer opportunities are available for those who want to join our team in organizing and distributing donations. Every contribution, no matter how big or small, helps keep someone warm this winter.
              </p>
              <Link to="/campaigns" className="mt-6 btn bg-ice-blue font-semibold rounded-md hover:bg-frosty-blue transition">Donate Now</Link>
          </div>
          <div className="flex justify-center lg:justify-end">
              <img 
                  src={community}
                  alt="Community donating winter clothes" 
                  className="rounded-lg shadow-lg w-full lg:w-4/5"
              />
          </div>
      </div>
     </section>
    );
};

export default About;