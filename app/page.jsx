import dynamic from "next/dynamic";
import Link from "next/link";

const GetInTouchForm = dynamic(() => import("../components/getInTouchForm"));

export default function Home() {
    return (
        <>
        <div className="w-full flex flex-col flex-grow px-2 py-3 pt-8 md:px-56 justify-center items-center">
            <div className="w-full flex flex-col md:flex-row gap-3 justify-center items-center">

                <div className="flex flex-col">
                    <h1 className="py-3 text-4xl text-neutral-800 font-bold mb-2">Report local occurrences and help your community!</h1>
                    <Link href="/map"
                        className="flex justify-center items-center w-fit mb-6 bg-brand text-neutral-100 hover:bg-neutral-100 hover:text-brand font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
                        Try it now!
                    </Link>
                </div>

                <div className="flex justify-center items-center w-full md:min-w-[400px] md:w-[400px] h-[400px] overflow-hidden rounded-lg shadow-md">
                    <img className="h-[450px] max-w-none" src="https://github.com/user-attachments/assets/7824ed87-10f8-4c19-aeb8-18134d1ddf90" alt="How to report an occurrence GIF" />
                </div>
            </div>
        </div>
        <div className="w-full flex flex-col px-2 py-3 pb-8 md:px-56 justify-start items-center">
            <h2 className="px-2 py-3 text-neutral-800 text-4xl font-bold mb-2">Partner with SAM to address local needs!</h2>
            <GetInTouchForm />
        </div>
        </>
    )
}