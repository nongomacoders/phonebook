<script>
import AddContact from './AddContact.svelte';
export let showModal = false;

</script>

{#if showModal}
<div class="backdrop" {showModal} on:click|self>
    <div class="modal">
        <slot>
            <AddContact/>
        </slot>
    </div>
</div>
    
{/if}

<style>
.backdrop{
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0, 0, 0, 0.6);
    
}

.modal{
    padding: 100px;
    border-radius: 10px;
    max-width: 400px;
    margin: 10% auto;
    text-align: center;
    background: rgb(75, 59, 53);
    color: white;
    transition: width 9s, height 15s;
}
</style>