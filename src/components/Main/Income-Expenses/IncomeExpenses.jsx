import React from 'react'
import './IncomeExpenses.css'
import { useGlobalState } from '../../../context/GlobalState'

const IncomeExpenses = () => {

	const { transactions } = useGlobalState()

	const amount = transactions.map(transaction => transaction.amount)
	
	

	const incomes = amount
		.filter(item => item > 0)
		.reduce((acc, item) => (acc += item), 0)
	
	const expenses = amount
		.filter(item => item < 0)
		.reduce((acc, item) => (acc += item), 0) * -1

	console.log(expenses)

	return (
		<div className="Info">
			<p className="Info-text">Income: {incomes}</p>
			<p className="Info-text">Expenses: {expenses}</p>
		</div>
		)
}

export default IncomeExpenses