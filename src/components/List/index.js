import React from 'react';
import { useSelector } from 'react-redux';

import Item from '../Item';

const List = () => {
	const todos = useSelector((state) => state.todos)

	return (
		<ul className='list-group'>
			{todos.map((todo, index) => (
				<Item key={index} id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default List;
