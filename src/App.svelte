<script>
  import Modal from "./Modal.svelte";
  import AddContact from "./AddContact.svelte";
  import Contact from "./Contact.svelte";

  export let contacts = [
    {
      id: 0,
      name: "a",
      surname: "b",
      cell: "c",
      email: "d"
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
  };

  const deleteContact = (id) =>{
     console.log("Hello diketso");
     //contacts = e.detail;
	    contacts = contacts.filter((contact) => contact.id != id);
}

</script>


<!--Displaying the imported contact component-->
<Modal {showModal} on:click={toggleModal}>
  <AddContact on:saveContact={addContact} />
</Modal>

<main>
  <h1 class="text-5xl m-5">PhoneBook using Svelte Js</h1>

  {#each contacts as contact (contact.id)}  
      <Contact {contact} on:delCon={deleteContact}/>    
  {/each}

 

  <button
    class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold
    hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent
    rounded"
    on:click={toggleModal}>
    Add Contact
  </button>
</main>


<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
  h1 {
    text-align: center;
    font-family: "Rowdies", cursive;
    font-size: auto;
  }
</style>