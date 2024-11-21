import { useEffect } from "react";
import { useState } from "react";

function HowItWorks() {
  const [divisions, setDivisions] = useState([]);

  useEffect(() => {
    fetch("/winterDonations.json")
      .then((res) => res.json())
      .then((data) => {
        const allDivisions = data.map((item) => item.division);

        const uniqueDivisions = [...new Set(allDivisions)];
        setDivisions(uniqueDivisions);
      });
  }, []);
  return (
    <section className="bg-primary-bg py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl text-heading font-extrabold">How It Works</h1>
      </div>
      <div className="w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          className="p-6 bg-white shadow-lg rounded-lg"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-2xl text-heading font-semibold mb-4">
            Step 1: Prepare Your Donation
          </h2>
          <p className="text-primary-text">
            Gather gently used or new winter clothing items such as coats, hats,
            scarves, and gloves.
          </p>
        </div>
        <div
          className="p-6 bg-white shadow-lg rounded-lg"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <h2 className="text-2xl text-heading font-semibold mb-4">
            Step 2: Find a Collection Point
          </h2>
          <p className="text-primary-text">
            Locate the nearest collection point using our interactive map or
            contact our support team for guidance.
          </p>
        </div>
        <div
          className="p-6 bg-white shadow-lg rounded-lg"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-2xl text-heading font-semibold mb-4">
            Step 3: Supported Divisions
          </h2>
          <p className="text-primary-text">
            We work with local shelters, community centers, and non-profit
            organizations to distribute your donations efficiently.
          </p>
        </div>
      </div>
      <div
        className="w-5/6 mx-auto mt-12 p-6 bg-white shadow-lg rounded-lg"
        data-aos="fade-up"
      >
        <h2 className="text-2xl text-heading font-semibold mb-4">
          Supported Divisions
        </h2>
        <p className="text-gray-700 mb-4">
          We currently support donations and distribution in the following
          divisions:
        </p>
        <ul className="list-disc list-inside space-y-2">
          {divisions.map((d, idx) => (
            <li key={idx}>{d}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default HowItWorks;
