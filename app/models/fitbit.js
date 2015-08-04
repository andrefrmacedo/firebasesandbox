import DS from 'ember-data';

export default DS.Model.extend({
  	age: DS.attr(),
	avatar: DS.attr(),
	avatar150: DS.attr(),
	averageDailySteps: DS.attr(),
	dateOfBirth: DS.attr(),
	displayName: DS.attr(),
	distanceUnit: DS.attr(),
	encodedId: DS.attr(),
	foodsLocale: DS.attr(),
	fullName: DS.attr(),
	gender: DS.attr(),
	glucoseUnit: DS.attr(),
	height: DS.attr(),
	heightUnit: DS.attr(),
	locale: DS.attr(),
	memberSince: DS.attr(),
	offsetFromUTCMillis: DS.attr(),
	startDayOfWeek: DS.attr(),
	strideLengthRunning: DS.attr(),
	strideLengthWalking: DS.attr(),
	timezone: DS.attr(),
	topBadges: DS.attr(),
	waterUnit: DS.attr(),
	waterUnitName: DS.attr(),
	weight: DS.attr(),
	weightUnit: DS.attr(),
});
