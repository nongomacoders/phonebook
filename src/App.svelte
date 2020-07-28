<script>
	import Contact from './Contact.svelte';
	import Modal from './Modal.svelte';
	import AddContact from './AddContact.svelte';

	let showModal = false;

	const toggleModal = () => {
		showModal = !showModal;
	};


</script>

<!--Displaying the imported contact component-->
<Modal {showModal} on:click={toggleModal}>
	<AddContact />	
</Modal>


<main>
	<h1>PhoneBook using Svelte Js</h1>
	<Contact />

	<button class="addBtn" on:click={toggleModal}>Add Contact</button>
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

.addBtn{
	margin: 10px;
}

</style>