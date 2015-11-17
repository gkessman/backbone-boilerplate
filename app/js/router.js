define([
	'jquery', 
	'underscore', 
	'backbone',
	'views/mainView'
	], function($, _, Backbone, MainView) {

	var AppRouter = Backbone.Router.extend({
		routes: {

			// Default
			'*actions': 'defaultAction'	
		}
	});

	var initialize = function(){

		var app_router = new AppRouter;

		app_router.on('route:defaultAction', function(actions) {

			var mainView = new MainView();
			mainView.render();

		});

		Backbone.history.start();
	};

	return {
		initialize: initialize
	};

});