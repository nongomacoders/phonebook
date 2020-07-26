<script>
    export let text = 'Hello world';
    export let showModal = false;
    </script>

{#if showModal}
<div class="backdrop" on:click>
    <div class="modal">
        <h1>{text}</h1>
    </div>
</div>
{/if}

<style>
.backdrop{
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0,0,0,0.8);
}
.modal{
    padding: 10px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 400px;
    text-align: center;
    background: white;
}
</style>