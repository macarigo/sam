// components/Navbar.js
export default function Card({title, description, location}) {
    return (
        <div className="mb-8 sm:mb-0 shadow-md w-full sm:w-96 rounded-xl border-brand h-52">
            <div className="w-full h-3/6 overflow-hidden rounded-t-xl">
                <img src="https://pplware.sapo.pt/wp-content/uploads/2022/08/buraco_00-1.jpg" alt="" />
            </div>
            <div className="bg-neutral-800 h-4/6 px-3 py-2 w-full rounded-b-xl">
            
                <div>
                    <p className="text-xl text-brand mb-1">{title}</p>
                    <p className="text-lg text-white mb-6 max-h-14 overflow-hidden">{description}</p>
                    <p className="text-sm text-neutral-300 mb-2">{location}</p>
                </div>
            </div>
        </div>
      
    );
  }
  