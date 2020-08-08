<script>
import {createEventDispatcher} from 'svelte';
let dispatch = createEventDispatcher();
export let contact;

const delCon = () => {
	
	 
	const delCon =()=>{ 
		contact = e.detail;
	contacts = contacts.filter((contact) => contact.id != id);
	}
	dispatch('delCon', contact);
}
</script>


<div class="flex flex-wrap flex-shrink sm:flex-shrink-0 md:flex-shrink lg:flex-shrink-0 xl:flex-shrink">
    <div class="w-1/5 bg-gray-500 h-12" style="padding: 10px; border:1px solid black">{contact.name}</div>
	<div class="w-1/5 bg-gray-400 h-12" style="padding: 10px; border:1px solid black">{contact.surname}</div>
	<div class="w-1/5 bg-gray-500 h-12" style="padding: 10px; border:1px solid black">{contact.cell}</div>
	<div class="w-1/5 bg-gray-500 h-12" style="padding: 10px; border:1px solid black">{contact.email}</div>
	 <div><button class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-800 m-3" on:click={delCon}>X</button>
  </div>
	
</div>

