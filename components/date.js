import { parseISO, format } from 'date-fns'
import frenchLocale from 'date-fns/locale/fr'

export default function Date({ dateString, dateStringFormat }) {
    const date = parseISO(dateString)
    const dateFormat = dateStringFormat || 'LLLL	d, yyyy'
    return (
        <time dateTime={dateString} className="whitespace-nowrap">
            {format(date, dateFormat, { locale: frenchLocale }).toUpperCase()}
        </time>
    )
}
