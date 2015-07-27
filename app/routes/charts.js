import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		console.log('chart route called');
		return this.store.findAll('data');
	},
});
