<script>
	import Modal from './Modal.svelte';
	import AddContact from './AddContact.svelte';
	//import Contact from './Contact.svelte';
	
	//export let id;
	export let name;
	export let surname;
	export let cell;
	export let email; 

	//Contact
	export let contacts = [
		{
	id: 1,
	name: "",
	surname: "",
	cell: "",
	email: ""
		}
	];

	let showModal = false;

	const toggleModal = () => {
		showModal = !showModal;
	};

	const addContact = (e) => {
		const contact = e.detail;
		contacts = [contact, ...contacts];
		showModal = false;
	}

const deleteContact = (id) =>{
	contacts = contacts.filter((contact) => contact.id != id);
}

</script>



<!--Displaying the imported contact component-->
<Modal {showModal} on:click={toggleModal}>
	<AddContact on:saveContact={addContact}/>	
</Modal>


<main>
	<h1 class="text-5xl m-5">PhoneBook using Svelte Js</h1>
		<p>{name}</p>

	{#each contacts as contact (contact.id)}
		{#if contacts}
			<div class="flex flex-wrap flex-shrink sm:flex-shrink-0 md:flex-shrink lg:flex-shrink-0 xl:flex-shrink">
			<div class="w-1/5 bg-gray-500 h-12" style="padding: 10px; border:1px solid black">{name}</div>
			<div class="w-1/5 bg-gray-400 h-12" style="padding: 10px; border:1px solid black">{surname}</div>
			<div class="w-1/5 bg-gray-500 h-12" style="padding: 10px; border:1px solid black">{cell}</div>
			<div class="w-1/5 bg-gray-500 h-12" style="padding: 10px; border:1px solid black">{email}</div>
			<div><button class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-800 m-3" on:click={() => deleteContact(contact.id)}>X</button></div>	
		</div>
		{:else}
			<h4 style="text-align:center text-lg">No contact to show...</h4>
		{/if}
	{/each} 

	<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" on:click={toggleModal}>
	Add Contact
	</button>
</main>

<!--Css-->
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