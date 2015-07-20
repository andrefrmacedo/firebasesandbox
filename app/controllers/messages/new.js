import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addMsg: function(){
			var newMsg=this.store.createRecord('message', {
				handle: this.get('session.currentUser.handle'),
				body: this.get('body'),
				uid: this.get('session.currentUser.id')
			});
			newMsg.save();
			this.setProperties({
				body:''
			});
		}
	}
});
