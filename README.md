# Aplicación para gestion de gastos creada con React JS & Vite JS.


> reducer
---
```js
export default (state, action) => {
	switch(action.type) {
	case "ADD_TRANSACTION":
		return {
			...state,
			transactions: [...state.transactions, action.payload],
		}
	case "DELETE_TRANSACTON":
		return {
			...state,
			transactions: state.transactions.filter(
				(transaction) => transaction.id !== action.payload
				)
		}
	default:
		return state
	}
}

```

## Estado global app y custom hook

```jsx
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
```



Si gustas mirar mas a fondo el proyecto podes revisar el repo que tengo en GitHub!

*Leonel Donati . -*