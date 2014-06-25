var ShelfView = Backbone.View.extend({


	tagName: 'div',

	className: 'container',

	template: _.template('<p><%= title %></p><p><%= author %></p><%= year %></p><%= category %></p><p><%= price %></p>'),

	initialize: function(){
		console.log('hey');
		this.render();
		this.collection.on('change add remove', function() {
			this.render();
		}, this);
	},


	//initialize: render();
	//call again on model change 'add change remove'



	render: function() {
		var self = this;
		// self.$el.html('');
		var html = '';


		for (var i = 0; i < self.collection.length; i++) {
			html += self.template(self.collection.models[i].attributes);
		}
		console.log(self.$el);
		self.$el.html(html);
	}

});

