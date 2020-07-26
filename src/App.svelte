<script>
	import Contact from './Contact.svelte';
	import Modal from './Modal.svelte';
	let showModal = false;

	const toggleAdd = () => {
		showModal = !showModal;
		console.log("Clicked");
	}
</script>



<!--Displaying the imported contact component-->
<Modal {showModal}/>
<main>
	
	<h1>PhoneBook using Svelt Js</h1>
	
	<Contact/>
	<div style="padding:10px"></div>
	<button on:click={toggleAdd}>Add</button>
</main>


<style>
main{
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	@media (min-width: 640px){
		main{
			max-width: none;
		}
	}

	h1{
	text-align: center;
	font-family: 'Rowdies', cursive;
	font-size: auto;
}
</style>

