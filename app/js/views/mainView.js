define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/mainTemplate.html'
], function($, _, Backbone, MainTemplate) {

	var MainView = Backbone.View.extend({

		el: $('.content'),

		render: function() {
			console.log("This is the main view!");
			this.$el.html(MainTemplate);
		}
	});

	return MainView;

});