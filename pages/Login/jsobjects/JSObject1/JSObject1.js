export default {
	loginUser: async () => {
		const response = await Query1.run();
		if(response.length > 0) {
			const user = response[0]; // Generate a token with expiration (simplified example)
			const expiresAt = new Date().getTime() + 360 * 60 * 1000; // 50 minutes from now
			const tokenPayload = {
				mobileno: user.mobile_no,
				password: user.user_password,
				expiresAt: expiresAt 
			};
			const token = btoa(JSON.stringify(tokenPayload));
			// Store session and token
			storeValue('user_session', user);
			storeValue('auth_token', token);       
			//console.log(token);
			// Show success message
			showAlert('Login Successful!', 'success');
			navigateTo('AuctionDashBoard');
		} 
		else {
			showAlert('Invalid MobileNo or Password', 'error');
		}
	}
}