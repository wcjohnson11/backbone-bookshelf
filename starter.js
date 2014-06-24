<html>
  <head>
    <title>Shelf of Books</title>
  </head>
  <body>
    <script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min.js"></script>
    <script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min.js"></script>
    <script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.1.1/js/bootstrap.min.js"></script>
  </body>
</html>

var bookData = {
			 
			  "books": [

			    {"category": "cooking", 
			     "year": 2009, 
			     "price": 22.00, 
			     "title": "Breakfast for Dinner", 
			     "author": "Amanda Camp"},

			    {"category": "cooking",
			     "year": 2014, 
			     "price": 21.00, 
			     "title": "21 Burgers for the 21st Century",
			      "author": "Stuart Reges"},

			    {"category": "JavaScript",
			     "year": 2011,
			      "price": 55.00, 
			     "title": "HackReactor: A Place with People",
			      "author": "Bernie Bennings"},

			    {"category": "JavaScript",
			     "year": 2012,
			      "price": 35.50, 
			      "title": "Closure for Fun and Profit",
			     "author": "Linda Lunga"},

			   {"category": "cooking", "year": 2009, "price": 22.00, 
			     "title": "Chocolate", "author": "Tina Uruguay"},

			    {"category": "cooking", "year": 2004, "price": 16.00, 
			     "title": "Pizza for the 21st Century", "author": "Stan Hurrys"},

			    {"category": "JavaScript", "year": 1998, "price": 12.00, 
			   "title": "Adreneline Driven Development", "author": "Bob Nugget"},

			    {"category": "JavaScript", "year": 1999, "price": 85.50, 
			   "title": "3 months to a better life", "author": "Champion Champ"},
			  ]
};

var Book = Backbone.Model.extend({ 
	defaults: { 
		category: 'uncategorized',	 
		year: 0, 
		price: 0.00, 
		title: '', 
		author: ''
	});


var Books = Backbone.Collection.extend({model: Book});

var ShelfView = Backbone.View.extend({collection: Books});

