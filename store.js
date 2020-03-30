const fs = require('fs');
function KeyStore(file) {
	if (!new.target) { // if you run me without new
		throw new Error('Please call this with the new operator.');
	}
	if (!file) { // if you run me without new
		throw new Error('Missing file to read/write');
	}
	async function setItem(key, value) {
		fs.readFile(file, (err, data) => {
			if (err) throw err;
			var dataParsed = JSON.parse(data);
			dataParsed[key] = value;
			fs.writeFile(file, JSON.stringify(dataParsed), (err, data) => {
				if (err) throw err;
				console.log(data);
			});
		});
	}
	this.set = setItem;
	return this;
}
exports.KeyStore = KeyStore;