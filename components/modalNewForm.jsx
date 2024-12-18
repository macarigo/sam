import React, { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        location: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/api/occurencies', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                alert(result.message); // Show success message
                onClose(); // Close modal
            } else {
                throw new Error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting the form.');
        }
    };

    return (
        <div className="fixed inset-0 h-full w-full bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={onClose}>
            <div className="flex flex-col modal-content bg-neutral-500 p-5 rounded-xl w-full max-w-lg" onClick={(e) => e.stopPropagation()}>

                <h1 className="text-2xl text-brand mb-6">New occurency</h1>

                <form onSubmit={handleSubmit}>

                    <div className="flex flex-wrap flex-col w-full px-3 mb-2">
                        <label htmlFor="title" className="block text-white font-regular">Occurency title</label>
                        <input type="text" name="title" id="title" placeholder="Pothole close to the hospital"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand focus:border-brand text-gray-900"
                            required
                            value={formData.title}
                            onChange={handleChange} />
                    </div>

                    <div className="flex flex-wrap flex-col w-full px-3 mb-2">
                        <label htmlFor="description" className="block text-white font-regular">Occurency description</label>
                        <textarea type="text" name="description" id="description" placeholder="The pothole is very wide and could hurt vulnerable people. Please be careful when passing by!"
                            className="h-36 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand focus:border-brand text-gray-900"
                            required
                            value={formData.description}
                            onChange={handleChange} />
                    </div>

                    <div className="flex flex-wrap flex-col w-full px-3 mb-2">
                        <label htmlFor="category" className="block text-white font-regular">Occurency category</label>
                        <input type="text" name="category" id="category" placeholder="Pothole close to the hospital"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand focus:border-brand text-gray-900"
                            required
                            value={formData.category}
                            onChange={handleChange} />
                    </div>

                    <button type="submit">SUBMIT</button>

                </form>


            </div>
        </div>
    );
};

export default Modal;
