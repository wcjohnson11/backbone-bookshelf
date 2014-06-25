var Book = Backbone.Model.extend({
	defaults: {
		category: 'uncategorized',
		year: 0,
		price: 0.00,
		title: '',
		author: ''
	}
});