import DS from 'ember-data';

export default DS.Model.extend({
  	handle: DS.attr('string'),
  	uid: DS.attr('string'),
  	api: DS.attr(),
});
