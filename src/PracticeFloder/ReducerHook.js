import {useReducer, useState} from "react";

const initialState = [];

const reducer = (state, action) => {

switch (action.type) {
  case "ADD":
    return [...state, {id:Date.now(), text:action.payload}];
  case "REMOVE":
    return state.filter((expense)=> expense.id !== action.payload);
  default:
    return state;
  }

};


function ExpenseTracker() {
 const [expenses,dispatch] = useReducer(reducer, initialState);
 const [text, setText] = useState("");

 const addExpense = () => {
  
 if(!text.trim()) return;
 dispatch({type:"ADD", payload:text});
 setText("");

 };



  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-lg font-semibold">Expense Tracker</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} className="border px-3 py-2 rounded w-full" />
      
      <button onClick={addExpense} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Add</button>

      <ul className="mt-2">
        {expenses.map((expense) => (
          <li key={expense.id} className="flex justify-between">
            {expense.text}
            <button onClick={() => dispatch({ type: "REMOVE", payload: expense.id })} className="text-red-500">❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseTracker;
