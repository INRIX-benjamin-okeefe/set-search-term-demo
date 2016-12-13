
define(require => {
	'use strict';

	const 
		ListChamber = require('common/platform/chamber/ListChamber'),
		appData = [
			{ text: 'Result 1' },
			{ text: 'Result 2' },
			{ text: 'Result 3' },
		],
		mySearchTerm = '';

	return class extends ListChamber {
		data () {
			return appData;
		}

		activate (data) {
			this.setSearchTerm(data.term);
		}

		getListConfig () {
			return {
				itemClick: function () {
					this.setSearchTerm(mySearchTerm);
				}.bind(this)
			}
		}
	}
});
