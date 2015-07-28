import Ember from 'ember';

export default Ember.Component.extend({

	type: 'Bar',

	display: true,
	
	data: function(){

		var dataStructure={
			labels: [],
			datasets: [{

				data: []
			}],
		};

		this.get('store').map(item => {
    		dataStructure.labels.push(item.get('month'));
    		dataStructure.datasets[0].data.push(item.get('value'));
    	});
    	dataStructure.datasets[0]['label']='Test Label';
    	dataStructure.datasets[0]['fillColor']='rgba(151,187,205,0.75)';
    	dataStructure.datasets[0]['strokeColor']='rgba(0,0,0,0.5)';
    	dataStructure.datasets[0]['highlightFill']='rgba(100,220,100,0.75)';
    	dataStructure.datasets[0]['highlightStroke']='rgba(0,0,0,1)';
		
		return dataStructure;
	}.property('store'),

	// newDataSet: {
	// 	label: "My Second dataset",
	// 	fillColor: "rgba(151,187,205,0.75)",
	// 	strokeColor: "rgba(0,0,0,0.5)",
	// 	highlightFill: "rgba(100,220,100,0.75)",
	// 	highlightStroke: "rgba(0,0,0,1)",
	// 	data: [28, 48, 40, 19, 86, 27, 90]
	// },

	
});
