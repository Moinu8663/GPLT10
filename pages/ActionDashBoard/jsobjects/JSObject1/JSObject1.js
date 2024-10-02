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
		if(this.currentPrice<1500000){
    // Increment the price by the base price
    this.currentPrice += this.basePrice;
		}
    // Check if current price equals or exceeds 1500000
    else if (this.currentPrice >= 1500000) {
      this.currentPrice += 200000;  // Add 200000 to current price
    }
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
  },

  // Function to sell player and reset auction state
  sellPlayer: function() {
    // Logic to handle what happens when the player is sold
    this.currentPrice = 0;  // Reset the price to 0 after the sale
    this.currentTeam = "";  // Clear the team name after the sale

    return {
      message: "Player sold!",
      currentPrice: this.currentPrice,
      currentTeam: this.currentTeam
    };
  },

  // Function to mark player as unsold and reset auction state
  UnsoldPlayer: function() {
    this.currentPrice = 0;  // Reset the price to 0 after the sale
    this.currentTeam = "";  // Clear the team name after the sale

    return {
      message: "Player unsold!",
      currentPrice: this.currentPrice,
      currentTeam: this.currentTeam
    };
  },
	  Player: function() {
    this.currentPrice = 0;  // Reset the price to 0 after the sale
    this.currentTeam = "";  // Clear the team name after the sale

    return {
      message: "New Player Added",
      currentPrice: this.currentPrice,
      currentTeam: this.currentTeam
    };
  }
}
