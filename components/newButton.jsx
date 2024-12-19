// components/Navbar.js
export default function CreateButton({onClick, setMapClick}) {

    const click = () => {
        setMapClick(false);
        onClick();
    }

    return (
        <div className="fixed bottom-8 left-4 sm:bottom-16 sm:left-24 z-[1000]">
            <button onClick={click}>
                <div className="flex flex-col justify-center items-center h-12 w-12 sm:h-20 sm:w-20 bg-brand hover:bg-neutral-100 opacity-80 rounded-lg text-neutral-100 hover:text-brand text-center text-4xl">+</div>
            </button>
            
            
        </div>
      
    );
  }
  