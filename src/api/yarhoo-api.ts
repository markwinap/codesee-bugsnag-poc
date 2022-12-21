

// .then(response => response.json())
// .then(response => console.log(response))
// .catch(err => console.error(err));

const sucess = (symbol: string) => {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY || '',
			'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
		}
	};
	return fetch(`https://yh-finance.p.rapidapi.com/stock/v2/get-summary?symbol=${symbol}&region=US`, options)
}
const forbidden = (symbol: string) => {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'test',
			'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
		}
	};
	return fetch(`https://yh-finance.p.rapidapi.com/stock/v2/get-summary?symbol=${symbol}&region=US`, options)
};
const unauthorized = (symbol: string) => {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
		}
	};
	return fetch(`https://yh-finance.p.rapidapi.com/stock/v2/get-summary?symbol=${symbol}&region=US`, options)
};
const error = (symbol: string) => {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
		}
	};
	return fetch(`https://yh-finance.p.rapidapi.com/stock/v3`, options)
};
const fetchWithTimeout = async (symbol: string) => {
	try {
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY || '',
				'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
			}
		};
	
		const controller = new AbortController();
		const id = setTimeout(() => controller.abort(), 1);
		const response = await fetch(`https://yh-finance.p.rapidapi.com/stock/v2/get-summary?symbol=${symbol}&region=US`, {
			...options,
			signal: controller.signal
		});
		clearTimeout(id);
		return response;
	} catch (error) {
		console.log(error);
	}

}
const throwErrorAPI = () => {
	throw new Error('Throw Error API');
}
export {
	sucess,
	forbidden,
	unauthorized,
	fetchWithTimeout,
	throwErrorAPI,
	error
};