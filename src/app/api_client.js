/**
 * Use and asynchronous function to return a list of results from the https://ergast.com/ API using fetch
 */

export async function list(year, stage) {
	let req = fetch(`https://ergast.com/api/f1/${year}/${stage}/results.json`)
		.then(res => {
			return res.json();	
		})
		.then(data => {
			return data;
		});

	return req;
}

const apiClient = {
	list,
};

export default apiClient;
