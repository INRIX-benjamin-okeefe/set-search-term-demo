define(require => {
	'use strict';

	const 
		ListChamber = require('common/platform/chamber/ListChamber'),
		appData = [
			{ text: 'List Item 1' },
			{ text: 'List Item 2' },
			{ text: 'List Item 3' },
		];

	return class extends ListChamber {
		data () {
			return appData;
		}

		onSearch (term) {
			super.onSearch(term).then(result => {
				this.goto('result-chamber', { term: term });
			});
		}
	}
});
