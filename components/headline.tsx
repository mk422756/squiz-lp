function Headline({children}) {
  return (
    <div className="leading-0 text-center">
      <span className="w-6 h-6 bg-accent inline-block rounded"></span>
      <span className="text-2xl font-semibold align-bottom text-gray_1 ml-2">
        {children}
      </span>
    </div>
  )
}

export default Headline
