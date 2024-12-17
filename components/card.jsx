// components/Navbar.js
export default function Card({title, description, location}) {
    return (
        <div className="mb-8 sm:mb-0 shadow-md w-full sm:max-w-xs rounded-b-xl">
            <div className="w-full max-h-24 overflow-hidden rounded-t-xl">
                <img src="https://pplware.sapo.pt/wp-content/uploads/2022/08/buraco_00-1.jpg" alt="" />
            </div>
            <div className="bg-neutral-500 px-3 py-2 w-full rounded-b-xl">
            
                <div>
                    <p className="text-xl text-brand mb-1">{title}</p>
                    <p className="text-lg text-white mb-6 max-h-20 overflow-hidden">{description + "..."}</p>
                    <p className="text-sm text-neutral-300 mb-2">{location}</p>
                </div>
            </div>
        </div>
      
    );
  }
  