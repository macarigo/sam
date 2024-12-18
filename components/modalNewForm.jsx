'use cliente'
import React, { useEffect, useState } from 'react';
import FormMap from "../components/formMap";

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [getLocation, setGetLocation] = useState([]);

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        location: 'placeholder',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = { ...formData, location: getLocation };

        try {
            const response = await fetch('http://localhost:4000/api/occurencies', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                onClose(); // Close modal
            } else {
                throw new Error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting the form.');
        }
    };

    useEffect(() => { // Verifica se getLocation tem lat e lng
        console.log("getLocation: " + getLocation),
        setFormData((prev) => ({
            ...prev,
            location: [getLocation[0], getLocation[1]], // Atualiza o campo "location" com a string de coordenadas
        }));
    }, [getLocation]);



    return (
        <div className="fixed inset-0 h-full w-full bg-black bg-opacity-50 flex justify-center items-center z-50 shadow-md z-[1000]" onClick={onClose}>
            <div className="flex flex-col modal-content bg-neutral-800 p-5 rounded-xl w-full max-w-lg" onClick={(e) => e.stopPropagation()}>

                <h1 className="text-2xl text-brand mb-6">New occurency</h1>

                <form onSubmit={handleSubmit}>

                    <div className="flex flex-wrap flex-col w-full px-3 h-32 mb-2">
                        <div className="w-full h-full">
                            <FormMap setGetLocation={setGetLocation} />
                            <input
                                type="text"
                                hidden
                                value={formData.location}
                                readOnly
                            />
                        </div>
                    </div>

                    <div className='flex flex-row '>

                        <div className="flex flex-wrap flex-col w-3/6 px-3 mb-2">
                            <label htmlFor="title" className="block text-white font-regular">Occurency title</label>
                            <input type="text" name="title" id="title" placeholder="Pothole close to the mall"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand focus:border-brand text-gray-900"
                                required
                                defaultValue={formData.title}
                                onChange={handleChange} />
                        </div>

                        <div className="flex flex-wrap flex-col w-3/6 px-3 mb-2">
                            <label htmlFor="category" className="block text-white font-regular">Occurency category</label>
                            <select type="text" name="category" id="category"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand focus:border-brand text-gray-900 box-border h-[42px]"
                                required
                                value={formData.category}
                                onChange={handleChange}>
                                <option value="" selected hidden>Select an option</option>
                                <option value="Danger">Danger</option>
                                <option value="Missing Animal">Missing animal</option>
                                <option value="Missing person">Missing person</option>
                                <option value="Noise complaints">Noise complaints</option>
                                <option value="Other">Other</option>
                                <option value="Parking">Parking</option>
                                <option value="Road maintenance">Road maintenance</option>
                                <option value="Sewage">Sewage</option>
                                <option value="Traffic issue">Traffic issue</option>
                                <option value="Trash accumulation">Trash accumulation</option>
                            </select>
                        </div>

                    </div>



                    <div className="flex flex-wrap flex-col w-full px-3 mb-2">
                        <label htmlFor="description" className="block text-white font-regular">Occurency description</label>
                        <textarea type="text" name="description" id="description" placeholder="The pothole is very wide and could hurt vulnerable people. Please be careful when passing by!"
                            className="resize-none h-32 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand focus:border-brand text-gray-900"
                            required
                            value={formData.description}
                            onChange={handleChange} />
                    </div>


                    <div className="flex flex-wrap flex-col w-full px-3 mb-4">
                        <input id="image" name="image" type="file" class="block w-full text-md text-slate-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-md file:border-0
                                file:text-sm file:font-semibold
                                file:bg-neutral-100 file:text-brand
                                hover:file:bg-brand hover:file:text-neutral-100 mb-2
                                "
                            accept="image/*" />
                        <p className='text-neutral-300'>Files should be images (PNG, JPEG, JPG, ...)</p>
                    </div>

                    <div className="flex flex-wrap flex-col w-full px-3 mb-2">
                        <button type="submit"
                            class="mb-6 bg-neutral-100 text-brand hover:bg-brand hover:text-neutral-100 font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
                            Submit
                        </button>
                    </div>
                </form>


            </div>
        </div>
    );
};

export default Modal;
