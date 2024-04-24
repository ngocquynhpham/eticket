import React from 'react'
import TickerStatusTable from './ticket-status-table'
import { getListStatus } from '@/lib/ticket-status';

const TicketStatus = async() => {
    let listStatus =  await getListStatus();

  return (
    <div className="w-full p-2 sm:p-4">
      <TickerStatusTable data={listStatus}/>
    </div>
  )
}

export default TicketStatus