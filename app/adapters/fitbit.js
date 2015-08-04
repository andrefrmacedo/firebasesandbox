import DS from 'ember-data';

export default DS.RESTAdapter.extend({

	headers: function(){
		return {
			'Authorization': 'Bearer ' + this.get('session').get('currentUser.accounts.fitbit'),
		};
	}.property('session'),

	buildURL: function(){
		return 'https://api.fitbit.com/1/user/-/profile.json';
	},
});
