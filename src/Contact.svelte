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
	contacts = contacts.filter((contacts) => contacts.id != id);
	
}

</script>




	{#each contacts as {id, name, cell, email}}
			<div class="flex flex-wrap">
				<div class="w-1/5 bg-gray-500 h-12" style="padding: 10px; border:1px solid black">{id}</div>
				<div class="w-1/5 bg-gray-400 h-12" style="padding: 10px; border:1px solid black">{name}</div>
				<div class="w-1/5 bg-gray-500 h-12" style="padding: 10px; border:1px solid black">{cell}</div>
				<div class="w-1/5 bg-gray-500 h-12" style="padding: 10px; border:1px solid black">{email}</div>
				<div><button class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-800" on:click={() => deleteContact(id)}>X</button></div>
					
			</div>
			{:else}
		<h4 style="text-align:center">No contact to show...</h4>
	{/each} 
	
<style>
/*importing h1 Google fonts*/
@import url('https://fonts.googleapis.com/css2?family=Rowdies:wght@300&display=swap');

</style>


