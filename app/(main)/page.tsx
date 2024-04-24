import React from 'react'
import { ChartBar } from './(dashboard)/ChartBar'
import { BarChart } from 'lucide-react'

const Dashboard = () => {
  return (
    <div className='body-main'>
      <div className="flex justify-center items-center w-full gap-2 my-2">
        <BarChart strokeWidth={2.5} size={30} className="text-primary" />
        <h1 className="text-primary font-bold text-xl">Dashboard</h1>
      </div>
      <ChartBar />
    </div>
  )
}

export default Dashboard