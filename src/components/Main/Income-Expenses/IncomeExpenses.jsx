
import './IncomeExpenses.css'
import { useGlobalState } from '../../../context/GlobalState'

const IncomeExpenses = () => {

	const { transactions } = useGlobalState()

	const amount = transactions.map(transaction => transaction.amount)
	
	

	const incomes = amount
		.filter(item => item > 0)
		.reduce((acc, item) => (acc += item), 0).toFixed(2)
	
	const expenses = amount
		.filter(item => item < 0)
		.reduce((acc, item) => (acc += item), 0).toFixed(2) * -1

	console.log(expenses)

	return (
		<div className="Info">
			<div className="Info-container">
				<div className="incomes-div">
					<p className="Info-text">Income</p>
					<span className="inc">{incomes}</span>
				</div>
				<div className="expenses-div">
					<p className="Info-text">Expenses</p>
					<span className="exp">{expenses}</span>
				</div>
			</div>
		</div>
		)
}

export default IncomeExpenses