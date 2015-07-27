import DS from 'ember-data';

export default DS.Model.extend({
  	month: DS.attr('string'),
  	value: DS.attr('string')
});
