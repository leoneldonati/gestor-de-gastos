import React from 'react'
import { useGlobalState } from '../../../context/GlobalState'
import './Balance.css'

const Balance = () => {

	const {transactions} = useGlobalState()

	const amount = transactions.map(transaction => transaction.amount)
	const total  = amount.reduce((acc, item) => (acc += item), 0)

	return (
		<div className="Balance">
			<h1 className="Balance-title">Total Balance</h1>
			<p className="Balance-amount">${total}</p>
		</div>
		)
}

export default Balance