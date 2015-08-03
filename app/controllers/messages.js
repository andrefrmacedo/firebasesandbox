import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		fitbitPermission: function(){
			if(this.session.get('currentUser.api.fitbit')===undefined){
				Ember.$.ajax({
					headers: {
						'Access-Control-Allow-Origin': '*',
					},
					type: 'GET',
					url: 'https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=229MLM&redirect_uri=http%3A%2F%2Flocalhost%3A4200&scope=profile',
					//response_type: 'code',
					//client_id: '229MLM',
					//redirect_uri: 'http://localhost:4200',
					//scope: 'profile',

					success: function(){
						console.log('fitbit permission page');
					},
					error: function(){
						console.log('erro');
					},
				});
			}
			else{
				console.log('Already have fitbit permission');
			}
		}
	}
});
