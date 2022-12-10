import Image from "next/image"

export default function Profile() {
  return (
    <div className="drop-shadow-xl bg-slate-200 m-5 rounded-xl">
        <table cellPadding={10}>
            <tr>
                <td>
                    <Image className="profile " src="/Rina.jpg" alt="Rina ku" width={250} height={250} />
                </td>
                <td>
                    <h2 className="font-semibold text-lg">
                        Nama: Muhammad Raihan Aslan
                    </h2>
                    <h2 className="font-semibold text-lg">
                        Status: Pelajar
                    </h2>
                </td>
            </tr>
        </table>
    </div>
  )
}
