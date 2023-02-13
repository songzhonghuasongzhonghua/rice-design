import React from 'react'
import GhostButton from '../GhostButton'
import { buildWeeks } from './generator'

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
                      <GhostButton>{date}</GhostButton>
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
