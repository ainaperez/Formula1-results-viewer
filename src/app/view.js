const $form = document.querySelector('#search-form');
const $results = document.querySelector('#results');
const $selectYear = document.querySelector('#year-select');
const $stageSelect = document.querySelector('#stage-select');
const $modalWrapper = document.querySelector('#modal-wrapper');
const $modal = document.querySelector('#modal');

export function getSelectedYear() {
	console.log($selectYear.value)
	return $selectYear.value;

}

export function getSelectedStage() {
	return $stageSelect.value;
}

export function setFormListener(callback) {
	$form.addEventListener('submit', callback);
}

export function setModalOnClickListener() {
	$modalWrapper.addEventListener('click', _hideModal);
}

/**
 * Cleans the results
 */
export function clearResults() {
	$results.innerHTML = '';
	const loader = setLoading();
	document.body.appendChild(loader);
	const $thead = _createTheadElement();
	$results.appendChild($thead);
}

/**
 * TODO: Display loading text
 */
export function setLoading() {
	var newDiv = document.createElement("div");
	newDiv.id = 'loading';
	newDiv.style.display = 'block';
	newDiv.innerHTML= "<p>Loading...<p>";
	return newDiv;

	
		
}

/**
 * Sets an error whe happes
 * @param {*} err
 */
export function setError(err) {
	$results.innerHTML = err.toString();
}

/**
 * Adds a result to the table
 * @param {Result} result
 */
export function addResult(result) {
	for(var i=0; i<result.length; i++){
		var element = result[i];
		console.log(element);
	const tr = _createResult(element);
	$results.appendChild(tr);
	}
}

/**
 * TODO: Creates a new table row with the click listener attached
 * @param {Result} result
 */
function _createResult(result) {
	const tr = document.createElement('tr');
		
			for (var prop in result) {
				if (result.hasOwnProperty.call(result, prop)) {
					var cell = tr.insertCell();
					cell.innerHTML = result[prop];
					

		}
	}

	// TODO Complete code here
	
	if($modalWrapper.getAttribute('data-isVisible')=='true'){
		window.onclick = _hideModal($modalWrapper);
	}else{
		tr.addEventListener('click', _showModal);
	}
	return tr;
}




function _createTheadElement() {
	const thead = document.createElement('thead');

	thead.innerHTML = `
		<tr>
			<th>Position</th>
			<th>Driver</th>
			<th>Constructor</th>
			<th>Time</th>
			<th>Points</th>
		</tr>
	`;

	return thead;
}

/**
 * Shows the modal modifiying the data-isVisible attribute
 */
function _showModal(e) {
	const tr = e.target.closest("tr");
	console.log(tr);
	const text = tr.cells[1].textContent;
	$modal.innerHTML = text;
	$modalWrapper.setAttribute('data-isVisible', true);
	$modalWrapper.style.display = "grid";
	
}

/**
 * TODO: Hides the modal.
 *
 * - Should only hide the modal when the user clicks on the modal Wrapper (not the modal itself!)
 */
function _hideModal(e) {
	
	if (e.target !== $modal) {
		$modalWrapper.setAttribute('data-isVisible', false);
		if ($modalWrapper.getAttribute('data-isVisible')=='false'){
			$modalWrapper.style.display = "none";
		}
		
}
	  }
	
	
		
	

	

