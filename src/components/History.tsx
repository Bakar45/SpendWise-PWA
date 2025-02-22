

import React from 'react'
import Card from './Card'
import Total from './Total'
import { useEffect, useState } from 'react'
const History = () => {


  const [totalTransaction, setTotalTransaction] = useState<any>([])
  const [totalRupee, setTotalRupee] = useState<number>(0)
  const [expenseRrupee, setExpenseRupee] = useState<number>(0)
  const [incomeRupee, setincomeRupee] = useState<number>(0)

  useEffect(() => {
    //////////////card return//////
    const data = JSON.parse(localStorage.getItem('Transactions') as any)
    setTotalTransaction(data)
    //////////////////total expense and income//////
    let total: number = 0
    let income: number = 0
    let expense: number = 0

    data.map((d: any) => {
      if (d.type == "income") {
        total += +(d.value)
        setTotalRupee(total)
        income = income + +(d.value)
        setincomeRupee(income)
      } else {
        total = total - +(d.value)
        setTotalRupee(total)
        expense = expense + +(d.value)
        setExpenseRupee(expense)
      }
      // console.log(t)
    })
  }, [])



  return (
    <div className='bg-f5f5fa p-8  flex flex-col  bg-gray-50 pt-16 pb-24 min-h-screen'>

      <div className='flex flex-col  w-full items-center py-3'><Total total={totalRupee} totalIncome={incomeRupee} totalExpense={expenseRrupee} />
      </div>
      <div>
        <div className='font-bold text-gray-600 p-3'>Your Transactions </div>
        <div className='w-full px-2  '>
          {

            totalTransaction.toReversed().map((transaction: any) => {
              return <Card tname={transaction.detail.name} payment={transaction.Payment} amount={transaction.value} date={transaction.Date} pic={transaction.detail.logo} typee={transaction.type} />

            })
          }
        </div>

      </div>
    </div>
  )
}

export default History