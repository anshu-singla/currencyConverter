(function(angular){
	'use strict';
	angular.module('Invoice1',[])
	.controller('InCtrl',function(){
		this.qty =1;
		this.cost=1;
		this.inCurr='EUR';
		this.currencies=['USD','EUR','CNY'];
		this.usdToForeignRates = {
			USD: 1,
			EUR: 0.74,
			CNY: 6.09
		};
		this.total=function total(outCurr){
			return this.convertC(this.qty*this.cost,this.inCurr,this.outCurr);
		};
		this.convertC=function convertC(amt, inCurr, outCurr){
			return amt*this.usdToForeignRates[outCurr]/this.usdToForeignRates[inCurr];
		};
		this.pay=function pay(){
			window.alert("Thanks!");
		};
	});
})(window.angular);
