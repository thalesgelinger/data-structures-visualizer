<script lang="ts">
    import {  fly , fade} from "svelte/transition";

    export let stack;

</script>

<div class="h-full bg-primary items-center justify-center flex">
    <div
        class="h-full w-11/12 bg-blank border rounded-xl justify-end items-center flex flex-col"
    >
        <ul class="flex items-center flex-col-reverse">
            {#each [...Array(stack.size() ?? 0)] as value, index}
                <li
                    class="h-9 w-36 bg-items mb-4 rounded-xl border-2 flex items-center justify-center"
                    in:fly={{ duration: 100, delay: 50*index , x: -100}}
                    out:fly={{ duration: 100 , x: 100}}
                >
                    {index}
                </li>
            {/each}
        </ul>
    </div>
</div>
