import React, { useContext, useEffect, useState } from 'react'
import { Text } from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../store/expenses-context'
import { getDateMinusDays } from '../util/date'
import { fetchExpenses } from '../util/http'
import LoadingOverlay from '../components/UI/LoadingOverlay'

function RecentExpenses() {
  const [isFetching, setIsFetching] = useState();
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      const expenses = await fetchExpenses();
      setIsFetching(false);
      expensesCtx.setExpenses(expenses)
    }

    getExpenses();
    
  }, []);

  if (isFetching){
    return <LoadingOverlay />
  }

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