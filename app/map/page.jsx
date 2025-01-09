import dynamic from "next/dynamic";

const MyApp = dynamic(() => import("../../components/myApp"));

export default function Home() {
    return (<><MyApp/></>)
}