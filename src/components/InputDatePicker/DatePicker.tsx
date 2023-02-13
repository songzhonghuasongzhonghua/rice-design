import React from 'react'
import GhostButton from '../GhostButton'
import { buildWeeks } from './generator'
import styled from 'styled-components'
import { isToday, isSameMonth } from 'date-fns'

const CalendarButton = styled(GhostButton) <{ isToday: boolean, isOtherMonth: boolean }>`
padding:0;
width:2.5rem;
height:2.5rem;
:hover{
  border-radius: 50%;
}
${props => props.isToday && `
border: 0.1rem solid rgba(22, 119, 255);
border-radius: 50%;
`}
${props => props.isOtherMonth && `
color:rgba(0,0,0,0.5)`}
`

interface Iprops {
  calendar: { year: number, monthIndex: number }
}
function DatePicker (props: Iprops): JSX.Element {
  const { year, monthIndex } = props.calendar
  const getWeeks = buildWeeks(year, monthIndex)

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>日</th>
            <th>一</th>
            <th>二</th>
            <th>三</th>
            <th>四</th>
            <th>五</th>
            <th>六</th>
          </tr>
        </thead>
        <tbody>
          {getWeeks.map((weeks, i): JSX.Element => {
            return (
              <tr key={i}>
                {weeks.map((date, weekIndex): JSX.Element => {
                  return (
                    <td key={weekIndex}>
                      <CalendarButton isToday={isToday(date)} isOtherMonth={!isSameMonth(date, new Date(year, monthIndex))} >{date.getDate()}</CalendarButton>
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default DatePicker
