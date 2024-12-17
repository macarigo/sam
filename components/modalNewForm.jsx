import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 h-full w-full bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={onClose}>
      <div className="flex flex-col modal-content bg-neutral-500 p-5 rounded-xl w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
        
        <h1 className="text-2xl text-brand mb-6">New occurency</h1>

        <div className="flex flex-wrap flex-col w-full px-3 mb-2">
            <label htmlFor="occurencyTitle" className="block text-white font-regular">Occurency title</label>
            <input type="text" name="occurencyTitle" id="occurencyTitle" placeholder="Pothole close to the hospital"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand focus:border-brand text-gray-900"
                required/>
        </div>

        <div className="flex flex-wrap flex-col w-full px-3 mb-2">
            <label htmlFor="occurencyDescription" className="block text-white font-regular">Occurency description</label>
            <textarea type="text" name="occurencyDescription" id="occurencyDescription" placeholder="The pothole is very wide and could hurt vulnerable people. Please be careful when passing by!"
                className="h-36 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand focus:border-brand text-gray-900"
                required/>
        </div>

        <div className="flex flex-wrap flex-col w-full px-3 mb-2">
            <label htmlFor="OccurencyCategory" className="block text-white font-regular">Occurency category</label>
            <input type="text" name="OccurencyCategory" id="OccurencyCategory" placeholder="Pothole close to the hospital"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand focus:border-brand text-gray-900"
                required/>
        </div>

      </div>
    </div>
  );
};

export default Modal;
