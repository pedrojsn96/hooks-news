import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

export default function App() {
	const [results, setResults] = useState([]);
	const [query, setQuery] = useState('reacthooks');

	useEffect(() => {
		getResults();
	}, [query]);

	const getResults = async () => {
		const response = await axios.get(
			`http://hn.algolia.com/api/v1/search?query=${query}`
		);
		setResults(response.data.hits);
	};

	return (
		<Fragment>
			<input type={'text'} onChange={event => setQuery(event.target.value)} />
			<ul>
				{results.map(results => (
					<li key={results.objectID}>
						<a href={results.url}>{results.title}</a>
					</li>
				))}
			</ul>
		</Fragment>
	);
}
