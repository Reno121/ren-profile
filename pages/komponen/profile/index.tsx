import Image from "next/image";

export default function Profile() {
  return (
    <div>
        <table border={1}>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Umur</th>
            <th>Kelas</th>
            <th>Sekolah</th>
            <th>Pengalaman</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>MUHAMMAD RAIHAN ASLAN</td>
              <td>17</td>
              <td>11-TKJ</td>
              <td>SMK KOMPUTER INDONESIA</td>
              <td>Menjadi UI/UX Di Smk Komputer Indonesia selama 3 tahun</td>
            </tr>
        </tbody>
        </table>     
    </div>
  )
}
