import { Link, useLoaderData } from "react-router-dom";
import { IoReturnUpBack } from "react-icons/io5";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

function DonationDetails() {
  const singleData = useLoaderData();
  const { title, image, description, contactInfo, division, status } =
    singleData;

  const notify = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Thank you ! We will reach your destination soon",
      text: "Do you want to continue",
      icon: "success",
      confirmButtonText: "Continue",
    });
    e.target.reset();
  };

  return (
    <>
    <Helmet>
        <title>{title} | Winter Clothing Donation</title>
    </Helmet>
    <section className="bg-ice-blue py-12">
      <div className="w-10/12 mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl text-heading font-bold mb-4">{title}</h1>
          <img
            src={image}
            alt={title}
            className="w-full h-[400px] object-cover rounded-md mb-6"
          />
          <p className="text-lg text-steel-gray mb-4">{description}</p>
          <div className="text-primary-text mb-4">
            <p>
              <strong>Contact Info:</strong> {contactInfo}
            </p>
            <p>
              <strong>Division:</strong> {division}
            </p>
            <p>
              <strong>Status:</strong> {status}
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-md shadow-lg">
          <h2 className="text-2xl text-heading font-semibold mb-4">
            Donation Form
          </h2>
          <form onSubmit={notify} className="space-y-6">
            <div className="mb-4">
              <label
                htmlFor="quantity"
                className="block text-primary-text font-medium mb-2"
              >
                Quantity of items
              </label>
              <input
                type="text"
                required
                id="quantity"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-navyblue"
                placeholder="e.g., 2 jackets, 3 blankets"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="itemType"
                className="block text-primary-text font-medium mb-2"
              >
                Item type
              </label>
              <input
                type="text"
                required
                id="itemType"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-navyblue"
                placeholder="e.g., blanket, jacket, sweater"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="pickupLocation"
                className="block text-primary-text font-medium mb-2"
              >
                Pickup location
              </label>
              <input
                type="text"
                required
                id="pickupLocation"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-navyblue"
                placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="notes"
                className="block text-primary-text font-medium mb-2"
              >
                Additional notes (optional)
              </label>
              <textarea
                id="notes"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-navyblue"
                placeholder="Any additional information"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-ice-blue text-black font-semibold rounded-md hover:bg-frosty-blue transition"
            >
              Submit Donation
            </button>
          </form>
        </div>

        <div className="mt-6">
          <Link
            to="/campaigns"
            className="btn flex gap-3 lg:w-1/2 bg-frosty-blue hover:bg-frost-green"
          >
            <IoReturnUpBack /> Back to Donation Campaigns
          </Link>
        </div>
      </div>
    </section>
    </>
  );
}

export default DonationDetails;
