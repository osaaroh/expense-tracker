import { View } from "react-native"
import Input from "./Input"

function ExpenseForm() {
    function amountChangedHandler(params) {
        
    }
    return  <View>
        <Input label="Amount" textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: amountChangedHandler,
        }}/>
        <Input label="Date" textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: ()=>{}
        }}/>
        <Input label="Description" textInputConfig={{
            multiline: true,
            autoCapitalize: 'none'
            // autoCorrect: false //set to true by default
        }}/>
    </View>
}

export default ExpenseForm