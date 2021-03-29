type Props = {
  q: string
  a: string
}

function QA({q, a}: Props) {
  return (
    <div>
      <table className="table-fixed">
        <tbody>
          <tr className="border-b border-primary border-opacity-90">
            <td className="w-8 text-2xl text-primary font-semibold align-middle">
              Q
            </td>
            <td className="ml-2 text-gray_1 font-semibold align-middle">{q}</td>
          </tr>
          <tr>
            <td height="8"></td>
          </tr>
          <tr>
            <td valign="top" className="w-8 text-2xl text-accent font-semibold">
              A
            </td>
            <td valign="top" className="ml-4 text-gray_2 text-sm">
              {a}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default QA
