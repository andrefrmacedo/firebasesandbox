import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function() {
  		this.get("session").fetch().catch(function() {});
  	},

});
