import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

export default function App() {
	const [results, setResults] = useState([]);

	useEffect(() => {
		getResults();
	}, []);

	const getResults = async () => {
		const response = await axios.get(
			'http://hn.algolia.com/api/v1/search?query=reacthooks'
		);
		setResults(response.data.hits);
	};

	return (
		<Fragment>
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
