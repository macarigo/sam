'use client';
import React, { useEffect, useState } from 'react';

const Form = () => {

    const [result, setResult] = useState("Send");
    const [sent, setSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (sent) {
            return;
        }

        setResult("Sending...");

        const formData = new FormData(e.target);

        formData.append("access_key", "bdeb75b9-d8a4-4bc2-8540-16560e8a91dd");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form sent successfully");
            e.target.reset();
            setSent(true);
        } else {
            console.log("Error", data);
            setResult("Error sending, please click to try again.");
        }

    };

    return (

        <div className="w-full">
            <form onSubmit={handleSubmit}>

                <div className='flex flex-col md:flex-row md:gap-2'>

                    <div className="flex flex-wrap flex-col w-full md:w-3/6 mb-2">
                        <label htmlFor="name" className="block text-neutral-800 font-regular">Name</label>
                        <input type="text" name="name" id="name" placeholder="John Doe"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand focus:border-brand text-neutral-800"
                            required />
                    </div>

                    <div className="flex flex-wrap flex-col w-full md:w-3/6 mb-2">
                        <label htmlFor="email" className="block text-neutral-800 font-regular">Email</label>
                        <input type="email" name="email" id="email" placeholder="johndoe@anincrediblecity.com"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand focus:border-brand text-neutral-800"
                            required />
                    </div>

                </div>

                <div className="flex flex-wrap flex-col w-full mb-2">
                    <label htmlFor="subject" className="block text-neutral-800 font-regular">Subject</label>
                    <input type="text" name="subject" id="subject" placeholder="Partnership proposal from An Incredible City"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand focus:border-brand text-neutral-800"
                        required />
                </div>



                <div className="flex flex-wrap flex-col w-full mb-2">
                    <label htmlFor="subject" className="block text-neutral-800 font-regular">Message</label>
                    <textarea type="text" name="message" id="message"
                        placeholder="Greetings from An Incredible City! We got to know your platform and would like to get in touch to discuss future partnerships between SAM and our city council! We look forward to hearing from you soon!"
                        className="resize-vertical min-h-32 h-32 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand focus:border-brand text-neutral-800"
                        required />
                </div>



                <div className="flex flex-wrap flex-col w-full">
                    <button type="submit"
                        className="bg-brand text-neutral-100 hover:bg-neutral-100 hover:text-brand font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
                        {result}
                    </button>
                </div>
            </form>
        </div>



    );
};

export default Form;
