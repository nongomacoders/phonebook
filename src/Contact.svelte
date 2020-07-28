<script>

 let contacts = [{
	id: 1,
    name: "Diketso",
	cell: "084 308 8893",
	email: "Diketso.setho16@gmail.com"
},
{
	id: 2,
    name: "Dr D",
	cell: "012 456 7899",
	email: "DrD@gmail.com"
},
{
	id: 3,
    name: "Elon",
	cell: "056 655 87645",
	email: "Elon@gmail.com"
}];

const deleteContact = (id) =>{
	contacts = contacts.filter((contact) => contact.id != id);
	
}

</script>




	{#each contacts as contact (contact.id)}
			<div class="flex flex-wrap">
				<div class="w-1/5 bg-gray-500 h-12" style="padding: 10px; border:1px solid black">{contact.id}</div>
				<div class="w-1/5 bg-gray-400 h-12" style="padding: 10px; border:1px solid black">{contact.name}</div>
				<div class="w-1/5 bg-gray-500 h-12" style="padding: 10px; border:1px solid black">{contact.cell}</div>
				<div class="w-1/5 bg-gray-500 h-12" style="padding: 10px; border:1px solid black">{contact.email}</div>
				<div><button class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-800" on:click={() => deleteContact(contact.id)}>X</button></div>
					
			</div>
			{:else}
		<h4 style="text-align:center">No contact to show...</h4>
	{/each} 
	
<style>
/*importing h1 Google fonts*/
@import url('https://fonts.googleapis.com/css2?family=Rowdies:wght@300&display=swap');

</style>


