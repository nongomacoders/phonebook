<script>
   export const contact = [{

    name: "Diketso",
	cell: "084 308 8893",
	email: "Diketso.setho16@gmail.com"
},
{
   
    name: "Dr D",
	cell: "012 456 7899",
	email: "DrD@gmail.com"
},
{
 
    name: "Elon",
	cell: "056 655 87645",
	email: "Elon@gmail.com"
}];

</script>

<style>
/*importing h1 Google fonts*/
@import url('https://fonts.googleapis.com/css2?family=Rowdies:wght@300&display=swap');
.container{
	width: auto;
}

h1{
	text-align: center;
	font-family: 'Rowdies', cursive;
}

</style>

<div class="container">
<h1>PhoneBook using Svelt Js</h1>
	{#each contact as {name, cell, email}, i}
			<div class="flex flex-wrap">
			<div class="w-1/5 bg-gray-500 h-12" style="padding: 10px; border:1px solid black">{i + 1}</div>
			<div class="w-1/5 bg-gray-400 h-12" style="padding: 10px; border:1px solid black">{name}</div>
			<div class="w-1/5 bg-gray-500 h-12" style="padding: 10px; border:1px solid black">{cell}</div>
			<div class="w-1/5 bg-gray-500 h-12" style="padding: 10px; border:1px solid black">{email}</div>
			</div>
	{/each}
</div>