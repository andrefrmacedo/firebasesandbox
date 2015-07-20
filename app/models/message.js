import DS from 'ember-data';

export default DS.Model.extend({
  	handle: DS.attr('string'),
  	body: DS.attr('string'),
  	uid: DS.attr('string')
});
