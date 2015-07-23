import Ember from 'ember';


export default Ember.Controller.extend({
	display: true,
	type: 'Line',
	dataBar: {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [{
			label: "My First dataset",
			fillColor: "rgba(220,220,220,0.5)",
			strokeColor: "rgba(220,220,220,0.8)",
			highlightFill: "rgba(220,100,100,0.75)",
			highlightStroke: "rgba(220,220,220,1)",
			data: [65, 59, 80, 81, 56, 55, 40]
		}, {
			label: "My Second dataset",
			fillColor: "rgba(151,187,205,0.5)",
			strokeColor: "rgba(151,187,205,0.8)",
			highlightFill: "rgba(100,220,100,0.75)",
			highlightStroke: "rgba(151,187,205,1)",
			data: [28, 48, 40, 19, 86, 27, 90]
		}],

	},
	dataPie: [{
        value: 66,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    }, {
        value: 11,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    }, {
        value: 23,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }],

    actions:{
    	addData: function(){
    		console.log(this.dataBar.labels);
    		this.dataBar.labels.push('New Month');
    		this.dataBar.datasets[0].data.push(25);
    		this.dataBar.datasets[1].data.push(50);
    		if(this.display){
    			this.set('display',false);
    		}
    		else{
    			this.set('display',true);
    		}	
    	},
    	changeGraph: function(){
    		if(this.display){
    			this.set('type','Bar');
    			this.set('display',false);
    		}
    		else{
    			this.set('type','Line');
    			this.set('display',true);
    		}
    	}
    }

});
