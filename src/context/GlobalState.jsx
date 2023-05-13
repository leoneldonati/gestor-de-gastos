import { createContext, useContext, useReducer, useEffect } from 'react'
import AppReducer from './AppReducer'

const inititalState = {
	transactions: []
}


export const Context = createContext()

//export global state
export const useGlobalState = () => {
	const context = useContext(Context)
	return context
}

export const GlobalProvider = ({ children }) => {

	const [state, dispatch] = useReducer(AppReducer, inititalState, 
		() => {
			const localData = localStorage.getItem("transactions")
			return localData ? JSON.parse(localData) : inititalState
		}
		)

	useEffect(() => {
		localStorage.setItem('transactions', JSON.stringify(state))
	},[state])

	//ADD TRANSACTION
	const addTransaction = (transaction) => {
		dispatch({
			type: "ADD_TRANSACTION",
			payload: transaction
		})
	}

	//DELETE TRANSACTION
	const deleteTransaction = (id) => {
		dispatch({
			type: "DELETE_TRANSACTON",
			payload: id
		})
	}

	return (
		<Context.Provider value={{
			transactions: state.transactions,
			addTransaction,
			deleteTransaction,
		}}>
			{ children }
		</Context.Provider>
		)
}