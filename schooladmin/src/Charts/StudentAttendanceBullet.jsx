import React from 'react'
import { Bullet } from '@ant-design/plots';

export default function StudentAttendanceBullet() {
    const DemoBullet = () => {
        const config = {
          // default xField: 'title'、rangeField: 'ranges'、measureField: 'measures'、targetField: 'targets'
          data: [
            {
              title: 'Average Attendance in %',
              ranges: 100,
              measures: 80,
            //   targets: 85,
            },
          ],
        };
        return <Bullet {...config} />;
      };
  return (
    <div><DemoBullet /></div>
  )
}
