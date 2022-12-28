import Image from "next/image"

export default function Profile() {
  return (
    <div className="bg-slate-200 bg-profiles">
        <div className="grid-profiles">
            <Image className="profile rounded-full " src="/Ayang.jpg" alt="Example Image Btw @sato._.hinata" width={250} height={250} />
        </div>                
    </div>
  )
}
