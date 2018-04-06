/*jshint esversion: 6 */
import Vue from 'vue';

export const loadData = ({ commit }) => {
	// For saving data offsite using firebase
	/*Vue.http.get('data.json')
	.then(response => response.json())
	.then(data => {
		if(data) {
			const stocks = data.stocks;
			const funds = data.funds;
			const stockPortfolio = data.stockPortfolio;

			const portfolio = {
				stockPortfolio,
				funds
			};

			commit('SET_STOCKS', stocks);
			commit('SET_PORTFOLIO', portfolio);
		}
	});*/
	// For saving data on client localstorage
	if (localStorage.stocks) {
		const data = JSON.parse(localStorage.stocks);
		const stocks = data.stocks;
		const funds = data.funds;
		const stockPortfolio = data.stockPortfolio;

		const portfolio = {
			stockPortfolio,
			funds
		};

		commit('SET_STOCKS', stocks);
		commit('SET_PORTFOLIO', portfolio);
	}
};