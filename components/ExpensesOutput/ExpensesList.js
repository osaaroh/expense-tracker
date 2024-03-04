import { FlatList, StyleSheet, Text } from "react-native"
import { GlobalStyles } from "../../constants/styles";
import ExpenseItem from "./ExpenseItem";

function renderExpenseItem(itemData) {
  return <ExpenseItem {...itemData.item} />
}

function ExpensesList({expenses}) {
  return (
    <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item) => item.id}/>
  )
}

export default ExpensesList;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400
  },
  sum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary500
  }
})