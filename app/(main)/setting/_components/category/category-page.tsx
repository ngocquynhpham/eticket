import React from 'react'
import CategoryTable from './category-table'
import { getListCategory } from '@/lib/category'

const CategoryPage = async () => {
  let listCategory = await getListCategory();
  return (
    <div className="w-full p-4">
      <CategoryTable data={listCategory}/>
    </div>
  )
}

export default CategoryPage