import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
    	signIn: function(authWith) {
      		this.get("session").open("firebase", { authWith: authWith});
    	},

    	logout: function() {
      		this.get("session").close();
    	}
  	}
});
