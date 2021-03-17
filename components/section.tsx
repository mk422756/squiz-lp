type Props = {
  children?: any
  className?: string
}

export default function Section({children, className}: Props) {
  return (
    <section className={className}>
      <div className="mx-5">{children}</div>
    </section>
  )
}
