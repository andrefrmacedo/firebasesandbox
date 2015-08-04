import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function(){
		return this.transitionTo('messages',{
			queryParams:{
				'access_token': this.get('router.url').substring(this.get('router.url').lastIndexOf('=')+1),
			}
		});
	}
});
