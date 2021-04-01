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
    <div>
      <div>{homeTeam}</div>
      <div>{awayTeam}</div>
      <p>
        {day} {months[month]} {year}
      </p>
    </div>
  )
}

export default TableRow
