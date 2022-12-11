import Image from "next/image"

export default function Profile() {
  return (
    <div className="bg-slate-200 main-profile md:container md:mx-auto">
        <table cellPadding={10}>
            <tr>
                <td>
                    <Image className="profile rounded-full " src="/Ayang.jpg" alt="Example Image Btw @sato._.hinata" width={250} height={250} />
                </td>
                <td>
                    <div className="font-semibold text-lg status-profile">    
                    <h2>
                        Nama     : Muhammad Raihan Aslan
                        <br />
                        Status   : Students <s className="tak">Ready For Work</s>
                        <br />
                        Class    : X Tech Computer Networking
                        <br />
                        Activity : Learning Next Js
                        <br />
                        Hobi : Anything Make Me Interisting
                    </h2>
                    </div>
                </td>
            </tr>
        </table>
    </div>
  )
}
