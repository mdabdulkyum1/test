import { useEffect, useState} from "react"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"


function DonationCampaigns() {

    const [campaigns, setCampaigns] = useState([])

    useEffect(()=> {
        fetch('/winterDonations.json')
        .then(res => res.json())
        .then(data => setCampaigns(data))
    } ,[])

  return (
    <>
    
    <Helmet>
        <title>Campaigns | Winter Clothing Donation</title>
    </Helmet>
    
    <section className="bg-frost-green py-12">
    <div className="w-5/6 mx-auto">
        <div className="my-4 mb-9">
            <h1 className="text-center text-heading font-bold text-4xl">Donation Campaigns</h1>
            <p className='text-center text-primary-text mt-2 w-3/4 mx-auto'>Join us in making a difference by supporting our ongoing donation campaigns. Your contribution can help change lives and spread warmth and hope to those in need.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns.map(card => (
                <div key={card.id} className="bg-primary-bg shadow-lg rounded-lg p-4 flex flex-col justify-between hover:shadow-xl transition-shadow">
                    <div className="mb-4">
                        <img src={card.image} alt="" className="w-full h-[250px] rounded-md object-cover" />
                    </div>
                    <div className="mb-4 flex-grow">
                        <h1 className="text-heading text-xl font-semibold">{card.title}</h1>
                        <p className="text-steel-gray mt-2">{card.description}</p>
                        <p className="text-slate-gray mt-1 italic">{card.division}</p>
                    </div>
                    <div className="mt-auto">

                        <Link to={`/donation-details/${card.id}`} className="w-full py-2 inline-block text-center bg-ice-blue text-black font-semibold rounded-md hover:bg-frosty-blue transition">
                         Donate Now
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
    </section>
    </>

  )
}

export default DonationCampaigns