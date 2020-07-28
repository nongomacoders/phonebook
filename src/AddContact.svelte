<script>

let name;
let cell;
let email;

const saveContact = () => {
    console.log(name);
}
</script>
<form on:submit|preventDefault={saveContact}>
    <h3>Add New Contact</h3>
    <input type="text" placeholder="Name" bind:value={name}>
    <input type="tel" placeholder="Cellphone" bind:value={cell}>
    <input type="email" placeholder="Email" bind:value={email}>
    <button>Save</button>
</form>

<style></style>