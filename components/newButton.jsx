// components/Navbar.js
export default function CreateButton({onClick}) {
    return (
        <div className="fixed bottom-8 left-4 sm:bottom-16 sm:left-24 z-[1000]">
            <button onClick={onClick}>
                <div className="flex flex-col justify-center items-center h-12 w-12 sm:h-20 sm:w-20 bg-brand opacity-75 rounded-lg text-white text-center text-4xl">+</div>
            </button>
            
            
        </div>
      
    );
  }
  