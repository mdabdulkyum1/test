import HowYouCanHelp from "../../components/shared/HowYouCanHelp/HowYouCanHelp";

function HowToHelp() {
    return (
      <div className="bg-primary-bg text-primary-text font-poppins p-6 md:p-12">
        <div className="my-12">
           <HowYouCanHelp></HowYouCanHelp>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="bg-snowy-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-heading mb-4">Donate</h2>
            <p>
              Help us provide warmth to those in need by donating winter clothing,
              blankets, or funds. Every contribution makes a difference!
            </p>
          </div>
  
          <div className="bg-snowy-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-heading mb-4">Volunteer</h2>
            <p>
              Join our team of dedicated volunteers to collect, sort, and
              distribute donations to those in need. Your time can change lives.
            </p>
          </div>
  
          <div className="bg-snowy-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-heading mb-4">Spread the Word</h2>
            <p>
              Share our mission on social media and with friends. Raising
              awareness helps us reach more people who can contribute or benefit.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default HowToHelp;
  