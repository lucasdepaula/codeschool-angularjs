(function(){
	var app = angular.module('store', []);
	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('PanelController', function(){
		this.tab = 1;
		this.selectTab = function(setTab) {
			this.tab = setTab;
		}
		this.isSelected = function(checkTab) {
			return this.tab===checkTab;
		}
	});
	var gems = [
		{
			name: 'Bola de futebol',
			price: 90.00,
			description: 'Bola do último hat trick do Messi',
			canPurchase: true,
			images: [

			]
		},
		{
			name: 'Chuteira do Neymar',
			price: 900.00,
			description: 'Chuteira do melhor jogador do Brasil na última década',
			canPurchase: false
		}
	]
})();