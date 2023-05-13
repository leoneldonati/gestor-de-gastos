import React from 'react'
import './Main.css'
import Balance from './Balance/Balance'
import Transaction from './Transaction/Transaction'
import TransactionList from './Transaction/TransactionList'
import IncomeExpenses from './Income-Expenses/IncomeExpenses'

const Main = () => {
	return (
		<main className="Main">
		
		<div className="Main-container">

			<Balance />

			<div className="Expenses-container">
				<Transaction />
				<IncomeExpenses />
			</div>

			<TransactionList />
		</div>
			
		</main>
		)
}

export default Main