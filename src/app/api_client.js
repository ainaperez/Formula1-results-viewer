/**
 * TODO: Complete this function to return a list of results from the https://ergast.com/ API
 */



export async function list(year, stage) {
	let req = fetch('https://ergast.com/api/f1/'+ year +'/'+stage+'/results.json')
		.then(res => {
			return res.json();	
		})
		.then(data => {
			const $loader = document.querySelector('#loading');
			$loader.style.display='none';
			return data;
		});

	return req;
}

const apiClient = {
	list,
};

export default apiClient;
