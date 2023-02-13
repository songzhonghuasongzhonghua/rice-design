import { startOfWeek, addDays } from 'date-fns'
import { chunk } from 'lodash'
export function buildWeeks (year: number, monthIndex: number): Date[][] {
  const firstDayOfMonth = new Date(year, monthIndex)
  const firstDayOfWeek = startOfWeek(firstDayOfMonth, { weekStartsOn: 0 })

  const weeks = new Array(6 * 7).fill(0).map((_, i) => {
    return addDays(firstDayOfWeek, i)
  })

  return chunk(weeks, 7)
}
