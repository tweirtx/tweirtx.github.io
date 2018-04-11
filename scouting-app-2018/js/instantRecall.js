var storage = window.sessionStorage;

function qrGenerate() {
	var toQR = storage.getItem('instantRecall');
	var qrelement = document.getElementById('qrcode');
	var generatedQR = new QRious({
		size: 400,
		element: qrelement,
		value: toQR
	});

}

document.addEventListener('DOMContentLoaded', function instantRecall(){
    qrGenerate();
});
