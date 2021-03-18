import Image from 'next/image'

type Props = {
  children: any
  imageSrc: string
  index: number
}

function Reason({children, imageSrc, index}: Props) {
  return (
    <div className="text-center relative">
      <span className="absolute italic text-primary text-6xl font-semibold left-4">
        {index}
      </span>
      <Image src={imageSrc} alt="イメージ図" width={150} height={150}></Image>
      <p className="text-lg font-semibold text-gray_1 pt-2">{children}</p>
    </div>
  )
}

export default Reason
