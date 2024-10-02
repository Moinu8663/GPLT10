export default {
	// Starting base price
	basePrice: Number(playerQuery.data[0].base_price),

	// Current auction state
	currentPrice: 0,
	currentTeam: "",
	biddingHistory: [],  // Array to store the bidding history

	// Function to initialize auction
	initAuction: function() {
		this.currentPrice = this.basePrice;
		this.currentTeam = "";
		this.biddingHistory = [];  // Reset bidding history
		return { 
			currentPrice: this.currentPrice, 
			currentTeam: this.currentTeam, 
			biddingHistory: this.biddingHistory 
		};
	},

	// Function to place a bid by team
	placeBid: function(teamName) {
		// Increment the price by the base price
		this.currentPrice += this.basePrice;  
		this.currentTeam = teamName;

		// Add the current bid to the bidding history (like chat format)
		this.biddingHistory.push(
			`${teamName} has bid ${this.currentPrice}`  // Adding the chat-like message
		);

		// Update the price, current bidding team, and bidding history
		return { 
			currentPrice: this.currentPrice, 
			currentTeam: this.currentTeam, 
			biddingHistory: this.biddingHistory 
		};
	},

	// Function to view bidding history
	getBiddingHistory: function() {
		return this.biddingHistory;
	}
}
