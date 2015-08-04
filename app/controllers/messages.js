import Ember from 'ember';
import Firebase from 'firebase';

export default Ember.Controller.extend({

	url: 'https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=229MLM&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Ftransition&scope=profile&expires_in=2592000',
	queryParams: ['access_token'],

	gotAccess: function(){
		if(this.get('session.currentUser.accounts.fitbit') || this.access_token){
			return true;
		}
		return false;
	}.property('session','access_token'),

	actions:{

		fitbit: function(fitbitAccess){
			if(fitbitAccess===undefined){
				var ref=new Firebase('https://sandboxfirebase.firebaseio.com/users/'+this.get('session.currentUser.id'));
				ref.update({
					accounts: {
						fitbit: this.get('access_token'),
					}
				});
				this.set('session.currentUser.accounts',{
					fitbit:this.get('access_token')
				});
			}
			
			//this.store.query('fitbit',{});
			
			self=this;
			Ember.$.ajax({
				url: 'https://api.fitbit.com/1/user/-/profile.json',
				type: 'GET',

				headers:{
					'Authorization': 'Bearer ' + this.get('session.currentUser.accounts.fitbit'),
				},

				success: function(data){
					self.set('fitbitResponse',data.user);
				},
				error: function(data){
					console.log(data);
				},
			});

			
		},

	}

});
