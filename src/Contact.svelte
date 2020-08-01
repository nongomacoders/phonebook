<script>
import APP, { contacts } from '/App.svelte';

const deleteContact = (id) =>{
	contacts = contacts.filter((contact) => contact.id != id);
}
</script>


<div class="flex flex-wrap flex-shrink sm:flex-shrink-0 md:flex-shrink lg:flex-shrink-0 xl:flex-shrink">
    <div class="w-1/5 bg-gray-500 h-12" style="padding: 10px; border:1px solid black">{contacts.name}</div>
	<div class="w-1/5 bg-gray-400 h-12" style="padding: 10px; border:1px solid black">{contacts.surname}</div>
	<div class="w-1/5 bg-gray-500 h-12" style="padding: 10px; border:1px solid black">{contacts.cell}</div>
	<div class="w-1/5 bg-gray-500 h-12" style="padding: 10px; border:1px solid black">{contacts.email}</div>
	<div><button class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-800 m-3" on:click={() => deleteContact(contacts.id)}>X</button></div>	
</div>

	
<style>
</style>