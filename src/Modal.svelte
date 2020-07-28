<script>
import AddContact from './addContact.svelte';
export let showModal = false;
import { fade, fly } from 'svelte/transition';


</script>

{#if showModal}
<div class="backdrop" {showModal} on:click|self>
    <div class="modal" in:fly="{{ y: 200, duration: 2000 }}" out:fade>
        <slot>
           
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
    max-width: 500px;
    margin: 10% auto;
    text-align: center;
    background: rgb(75, 59, 53);
    transition: width 9s, height 15s;
    box-shadow: 0 10px 15px -3px rgba(245, 219, 219, 0.1), 0 4px 6px -2px rgba(226, 207, 207, 0.05);
}
</style>