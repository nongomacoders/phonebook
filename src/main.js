import App from './App.svelte';

const app = new App({
	target: document.body,
	props:{
		//id: 1,
		name: 'Hello',
		surname: 'Setho',
		cell: '084 308 8893',
		email: 'sdsd@sd.com'
	}	
});

export default app;