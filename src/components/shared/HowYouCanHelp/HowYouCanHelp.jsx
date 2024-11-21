import { Link } from 'react-router-dom';

function HowYouCanHelp() {
 

  return (
    <section className="bg-frost-green py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl text-heading font-extrabold">How You Can Help</h1>
      </div>
      <div className="w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 bg-white shadow-lg rounded-lg" >
          <h2 className="text-2xl text-heading font-semibold mb-4">Give Donation</h2>
          <p className="text-primary-text">100% of your donation will be invested in the orphans needs.</p>
          <Link to="/campaigns" className="mt-4 btn bg-ice-blue hover:bg-frosty-blue">
            Donate Now
          </Link>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg" >
          <h2 className="text-2xl text-heading font-semibold mb-4">Support Us</h2>
          <p className="text-primary-text">Donate $50 per month to provide more than basic needs to survive.</p>
          <button className="mt-4 btn bg-ice-blue hover:bg-frosty-blue">Join Us</button>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg" >
          <h2 className="text-2xl text-heading font-semibold mb-4">Become A Volunteer</h2>
          <p className="text-primary-text">Be a part of making an orphans future with our organization.</p>
          <button className="mt-4 btn bg-ice-blue hover:bg-frosty-blue">Apply Now</button>
        </div>
      </div>
    </section>
  );
}

export default HowYouCanHelp;
