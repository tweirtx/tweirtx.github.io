var storage = window.localStorage;
var currententry = -1;
var entries = -1;
var entry = 0;

scannedForms = storage.getItem('scannedForms');
try {
	console.log(scannedForms);
}
catch (ReferenceError) {
	storage.setItem('scannedForms', '')
}

for (var i in storage) {
	if (i.startsWith('scoutForm')) {
		entries += 1;
	}
}

function markScanned() {
	var currentlyRead = storage.getItem('scannedForms');
	var newScannedForms = currentlyRead+entry;
	storage.setItem('scannedForms', newScannedForms);
	alert('Successfully marked as scanned')
}

function qrGenerate() {
	var toQR = storage.getItem('scoutForm'+entry);
	var qrelement = document.getElementById('qrcode');
	var generatedQR = new QRious({
		size: 400,
		element: qrelement,
		value: toQR
	});

}

function advanceQR() {
	entry += 1
	if (entry == entries) {
		entry = 0;
	}
	qrGenerate();
	var isScannedElement = document.getElementById('scanned');
	var scannedforms = storage.getItem('scannedForms');
	var isScanned = scannedforms.toString().search(entry);
	if (isScanned == -1) {
		isScanned = false;
	}
	else {
		isScanned = true;
	}
	isScannedElement.innerHTML = 'Scanned: '+isScanned;
}

function scannedFormsFix() {
	storage.setItem('scannedForms', '');
	alert("Scanned form fix implemented, please back out of this page and come back");
}

document.addEventListener('DOMContentLoaded', function buttonPress(){
	document.getElementById('nextQR').addEventListener("click", advanceQR);
	document.getElementById('markScanned').addEventListener('click', markScanned);
	document.getElementById('fixScannedForms').addEventListener("click", scannedFormsFix);
	advanceQR();
});
