import Image from "next/image";
import Navbar from "./komponen/navbar";
import ImageBg from "./komponen/imagebg";

export default function index (){
    return (
        <div>
            <title>Ren Profiles</title>
            <link rel="icon" href="/favicon.ico" />
            <Navbar />
            <ImageBg />
            <h1 className="text-3xl font-bold">Coming Soon</h1>
            <br />
            <h2><a href="https://www.instagram.com/muhamad_reno1215/">My Instagram Account</a></h2>
            <h2>Powered By Next Js</h2>
            <Image src='/hina.png' alt="hikawa hina" width={1334} height={1002}/>
        </div>
    );
};
