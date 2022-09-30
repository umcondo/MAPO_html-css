import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';

export default function FetchingData() {
	const [data, setData] = useState({ hits: [] });
	const [query, setQuery] = useState('redux');
	const [url, setUrl] = useState(
		`https://hn.algolia.com/api/v1/search?query=redux`
	);

	// loading indicator
	const [isLoading, setIsLoading] = useState(false);

	// error handling
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setIsError(false);
			setIsLoading(true);
			try {
				const result = await axios(url);

				setData(result.data);
			} catch {
				setIsError(true);
			}
			setIsLoading(false);
		};
		fetchData();
	}, [url]);

	return (
		<Fragment>
			<input
				type="text"
				value={query}
				onChange={(e) => {
					setQuery(e.target.value);
				}}
			/>
			<button
				type="button"
				onClick={() =>
					setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
				}
			>
				Search
			</button>

			{isError && <div>에러발생!!</div>}

			{isLoading ? (
				<div>Loading...</div>
			) : (
				<ul>
					{data.hits.map((item) => (
						<li key={item.objectId}>
							<a href={item.url}>{item.title}</a>
						</li>
					))}
				</ul>
			)}
		</Fragment>
	);
}
