export default {
	logoutUser:() =>{
		storeValue('user_session', null);
			storeValue('auth_token', null); 
		showAlert('Logged out successfully!','success');
		navigateTo('Login');
	},
isTokenExpired: () => {
		 const token = appsmith.store.auth_token;
		 if (!token) {
			 navigateTo('Login');
			 return true;
		 }
		 const tokenPayload = JSON.parse(atob(token));
		 const currentTime = new Date().getTime();
		 if (currentTime > tokenPayload.expiresAt) {
			 this.logoutUser();
			 //storeValue('user_session', null);
			 //storeValue('auth_token', null);
			 //navigateTo('Login'); // Navigate to the login page return true;
		 }
		 return false;
	 }
}