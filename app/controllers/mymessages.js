import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		deleteMsg: function(msgId){
			this.store.peekRecord('message', msgId).destroyRecord();
		}
	}
});
