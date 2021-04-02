import './TableRow.css'

const TableRow = ({homeTeam, awayTeam, date}) => {
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ]
  const d = new Date(date)
  const month = d.getMonth()
  const day = d.getDate()
  const year = d.getFullYear()
  return (
    <tr>
      <td className="cell">{homeTeam}</td>
      <td className="cell">{awayTeam}</td>
      <td className="cell">
        {day} {months[month]} {year}
      </td>
    </tr>
  )
}

export default TableRow
