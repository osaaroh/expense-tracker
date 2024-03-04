import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";


const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2024-03-03')
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date('2024-03-08')
    },
    {
        id: 'e3',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2024-03-13')
    },
    {
        id: 'e4',
        description: 'A book',
        amount: 14.99,
        date: new Date('2024-03-15')
    },
    {
        id: 'e5',
        description: 'Another book',
        amount: 18.59,
        date: new Date('2024-03-15')
    },
    {
        id: 'e6',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date('2024-03-08')
    },
    {
        id: 'e7',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2024-03-13')
    },
    {
        id: 'e8',
        description: 'A book',
        amount: 14.99,
        date: new Date('2024-03-15')
    },
    {
        id: 'e9',
        description: 'Another book',
        amount: 18.59,
        date: new Date('2024-03-15')
    }
];

function ExpensesOutput({expenses, expensesPeriod}) {
  return (
    <View style={styles.container}>
        <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
        <ExpensesList expenses={DUMMY_EXPENSES}/>
    </View>
  )
}

export default ExpensesOutput

const styles =  StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700,
        flex: 1,
    }
    
});