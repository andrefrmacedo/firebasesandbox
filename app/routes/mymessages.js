import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return this.store.find('message', { uid: this.get('session.currentUser.id') });
	}
});
