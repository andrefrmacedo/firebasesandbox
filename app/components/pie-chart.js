import Ember from 'ember';

export default Ember.Component.extend({
	type: 'Pie',

	data: [{
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

    isDisplayed: true,

    actions:{
    	display: function(){
    		if(this.isDisplayed){
    			this.set('isDisplayed',false);
    		}
    		else{
    			this.set('isDisplayed',true);
    		}
    	}
    }
});
