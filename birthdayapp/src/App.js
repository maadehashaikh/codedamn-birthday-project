import React, { useState } from 'react'
import data from './data'
import List from './List'
import "./App.css"
function App() {
	// create a state variable here
	const [people, setPeople] = useState(data);
	// this should clear all records
	function clearAllRecords() {
		setPeople([]);
	}
	return (
		<main>
			<section className="container">
				{/* change this to state variable data */}
				<h3>{[].length} birthdays today</h3>
				<List people={people} />
				<button onClick={clearAllRecords}>Clear All</button>
			</section>
		</main>
	)
}

export default App
