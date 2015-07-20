import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('messages', function(){
      this.route('myMessages');
      this.route('addNewMessage');
    });
});

export default Router;
