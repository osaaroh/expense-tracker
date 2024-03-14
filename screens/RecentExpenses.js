import React, { useContext, useEffect } from 'react'
import { Text } from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../store/expenses-context'
import { getDateMinusDays } from '../util/date'
import { fetchExpenses } from '../util/http'

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses(params) {
      const expenses = await fetchExpenses();
      expensesCtx.setExpenses(expenses)
    }

    getExpenses();
    
  }, []);

  const recentExpenses = expensesCtx.expenses.filter((expense)=>{
    const today = new Date();
    const date7daysAgo = getDateMinusDays(today, 7);

    return (expense.date >= date7daysAgo) && (expense.date <= today) ;
  })
    return (
        <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 Days" fallBackText="No expenses for the past 7 days"/>
      )
}

export default RecentExpenses