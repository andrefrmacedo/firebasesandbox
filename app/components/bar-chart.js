import Ember from 'ember';


export default Ember.Component.extend({
	display: true,
	type: 'Line',
	data: {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [{
			label: "My First dataset",
			fillColor: "rgba(220,220,220,0.75)",
			strokeColor: "rgba(0,0,0,0.5)",
			highlightFill: "rgba(220,100,100,0.75)",
			highlightStroke: "rgba(0,0,0,1)",
			data: [65, 59, 80, 81, 56, 55, 40]
		}],
	},
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
    		//var ctx = document.getElementById("test").getContext("2d");
    		//var myNewChart = new Chart(ctx).Bar(this.dataBar);
    		//myNewChart.addData([10,10],'August');
    	
    		this.data.datasets.push(this.newDataSet);

    		//myNewChart.update();
    		if(this.display){
    			this.set('display',false);
    		}
    		else{
    			this.set('display',true);
    		}	
    	},
    }
});
