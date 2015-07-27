import Ember from 'ember';


export default Ember.Component.extend({

	dataStructure: {
		labels: ['test'],
		datasets: [{
			data: []
		}],
	},

	display: true,

	data: function(){

		var store=this.get('store');
		store.map(item => {
    		this.dataStructure.labels.push(item.get('month'));
    		console.log(item.get('month'));
    		this.dataStructure.datasets[0].data.push(item.get('value'));
    	});
    	console.log(this.dataStructure.datasets[0].data);

		return this.dataStructure;

	}.property('dataStructure'),

	
	type: 'Bar',
	
	newDataSet: {
		label: "My Second dataset",
		fillColor: "rgba(151,187,205,0.75)",
		strokeColor: "rgba(0,0,0,0.5)",
		highlightFill: "rgba(100,220,100,0.75)",
		highlightStroke: "rgba(0,0,0,1)",
		data: [28, 48, 40, 19, 86, 27, 90]
	},

	
	actions:{

    	addData: function(){
    		

    		this.toggleProperty('display');	
    	},
    }
});
