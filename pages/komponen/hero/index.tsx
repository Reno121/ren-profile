import Image from "next/image"
export default function Hero() {
  return (
    /*<div className="p-5 m-5 rounded-md bg-gradient-to-r from-fuchsia-600 to-purple-800 shadow-2xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci dicta perspiciatis aut consectetur soluta, 
        explicabo quidem. Natus, quis? Aliquid architecto itaque repudiandae distinctio accusamus. Praesentium quam harum incidunt quas fugit.
        <Image className="bg-center" src="/Rina.jpg" alt="Rehan" width={200} height={200}/>
        </div>*/
            <div className="hero min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
                <div className="hero-content text-center">
                <div className="max-w-md">
                <h1 className="text-5xl font-bold line-1 anim-typewriter">Hallo Saya Rehan()</h1>
                <p className="py-6">Saya adalah WebDev Front End Dan Juga Back End, Saya juga bisa Networking Enginering</p>
                <button className="btn btn-primary opacity-80 transition ease-out hover:scale-110 hover:bg-violet-600 duration-200">Contact Now</button>
                </div>
            </div>
        </div>
  )
}
