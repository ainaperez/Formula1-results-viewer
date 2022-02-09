import { clearResults, setFormListener, setModalOnClickListener } from './view';
import { removeLoading, setError, addResult} from './view';
import { getSelectedYear, getSelectedStage } from './view';
import {list } from './model'

/**
 * Inits the aplication setting the form listeners and the modal listener
 */
export function init() {
	setFormListener(handleSubmit);
	setModalOnClickListener();
}

/**
 * Set the callback that must be executed when the form is submited.
 * - should display loading when loading
 * - should display the error when the request fails
 * - should display the table when the request succeds
 */
async function handleSubmit(event) {
	event.preventDefault();
		clearResults();
		let a = list(getSelectedYear(), getSelectedStage())
		a.then(removeLoading);
		a.then(addResult);
		a.catch(setError);		
}	



