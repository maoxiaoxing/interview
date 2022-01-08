import React from 'react'
import { Table } from 'antd'
import { employeeColumns } from './colums'
import QueryForm from './queryForm'

const Employee = () => {
  
  return (
    <>
      <QueryForm />
      <Table columns={employeeColumns}></Table>
    </>
  )
}

export default Employee
