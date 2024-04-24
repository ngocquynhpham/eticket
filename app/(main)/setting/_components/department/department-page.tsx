import React from 'react'
import DepartmentTable from './department-table'
import { getListDepartment } from '@/lib/department'

const DepartmentPage = async () => {
  let listDepartment =  await getListDepartment();
  return (
    <div className="w-full p-2 sm:p-4">
      <DepartmentTable data={listDepartment}/>
    </div>
  )
}

export default DepartmentPage