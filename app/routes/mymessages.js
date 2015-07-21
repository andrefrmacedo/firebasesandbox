import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return this.store.query('message', { uid: this.get('session.currentUser.id') });
	}
});
