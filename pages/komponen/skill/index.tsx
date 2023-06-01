import Image from 'next/image';

export default function skill() {
  return (
    <div className="bg-skills">
        <div className='imageContainer'>
          <Image
      src="/me1.png"
      width={150}
      height={150}
      alt="Lagi Foto Cosplay ama hutao"
      loading="lazy"
    />
      </div>
      <div className='int-text'>
        <h2>Muhammad Raihan Aslan</h2>
        <h2>XI-TKJ</h2>
      </div>
    </div>
  )
}
