import Image from 'next/image'

type Props = {
  children: any
  imageSrc: string
  index: number
}

function Reason({children, imageSrc, index}: Props) {
  return (
    <div className="text-center relative">
      <span className="absolute italic text-primary text-5xl font-semibold sm:left-12 left-2 opacity-50 z-50 w-20">
        {index}
      </span>
      <Image src={imageSrc} alt="イメージ図" width={200} height={200}></Image>
      <p className="text-lg font-semibold text-gray_1 pt-4">{children}</p>
    </div>
  )
}

export default Reason
