function Button({children}) {
  return (
    <button className="bg-primary hover:bg-primary_dark focus:bg-primary_dark py-4 px-8 text-white rounded">
      {children}
    </button>
  )
}

export default Button
