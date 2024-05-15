import React from 'react'
import StudentAttendanceBullet from '../Charts/StudentAttendanceBullet'

export default function Attendance() {
  return (
    <div className="main-panel">
      
   
     <StudentAttendanceBullet/>
    

      <div>My Today's Status
        <table>
          <tr>
            <td>
              Day
            </td>
            <td>
              Status
            </td>
          </tr>
          <tr>
            <td>
              {new Date().getDate()}
            </td>
            <td>
              A
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}
