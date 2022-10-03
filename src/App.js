import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';
import List from './components/List';
import CompletedItems from './components/CompletedItems';

const App = () => {
	return (
		<div className='container bg-white p-4 mt-5'>
			<h1>Todo List</h1>
			<Form />
			<List />
			<CompletedItems />
		</div>
	);
};

export default App;
