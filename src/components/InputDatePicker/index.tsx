import React from 'react'
import type { IinputDatePicker } from './type'
import DatePicker from './DatePicker'
export const InputDatePicker: IinputDatePicker = () => {
  return (
    <div>
      <DatePicker calendar={{ year: 2023, monthIndex: 1 }} />
    </div>
  )
}
