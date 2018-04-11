var storage = window.localStorage;

function resetForm() {
	document.getElementById('form').reset();
}

function formCalc() {
	var elements = document.forms['form'].elements;
	var finalKeys = [];
	for (var i in elements) {
		var formElement = elements[i];
		var formData = {
			'formID' : formElement.id,
			'response': formElement.value
		};
		console.log(formData);
		var formDataString = JSON.stringify(formData);
		console.log(formDataString);
		finalKeys.push(formDataString);
	}
	console.log(finalKeys);
	var entries = -1;
	for (var i in storage) {
		if (i.startsWith('scoutForm')) {
			entries += 1;
		}
	}
	var newentry = entries + 1;
	console.log(finalKeys)
	var finalKeysString = finalKeys.toString();
	storage.setItem('scoutForm'+newentry, finalKeysString);
	window.sessionStorage.setItem('instantRecall', finalKeysString)
	alert("Form calculated");
	resetForm();
}

document.addEventListener('DOMContentLoaded', function buttonPress(){
	document.getElementById('button').addEventListener("click", formCalc);
	resetForm();
});