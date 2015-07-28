import Ember from 'ember';

export default Ember.Component.extend({
	
    type: 'Pie',

    display: true,

    data: function(){
        var dataStructure=[];

        this.get('store').map(item => {
            dataStructure.push({
                label: item.get('month'),
                value: item.get('value'),   
                highlight: "#FFC870",   //you can get the color from a 
                color:"#F7464A"         //function or an array or colors
            });
        });
        return dataStructure;
    }.property('store'),

});
