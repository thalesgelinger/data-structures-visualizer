<script lang="ts">
    import StackViewer from "./Stack/StackViewer.svelte";
    import { createDataStructures } from "./DataStructureController";

    let dataStructures = createDataStructures();

    let { data: dataStructure, stack } = dataStructures;

    type DataStructuresType = keyof typeof dataStructures;

    const dataKeys = Object.keys(dataStructure) as [DataStructuresType];

    let selectedDataStructure = "stack";

    const selectStructure = (type: DataStructuresType) => () => {
        selectedDataStructure = type;
    };

    const handleDataMethod = (method: string) => () => {
        dataStructures[selectedDataStructure][method](1);
        stack = stack //HUEHUEHUEHEUHEUEHUEHUEHEUH
    };

</script>

<div class="h-4/5 w-4/5 flex">
    <ul class="flex flex-col justify-around h-full flex-1">
        {#each dataKeys as dataStructure}
            <li
                class={`btn-shape bg-methods w-4/5 border-r-0 z-10 cursor-pointer relative self-end m-3
                ${
                    dataStructure === selectedDataStructure
                        ? "shadow-none"
                        : "drop-shadow-3xl"
                } ${
                    dataStructure === selectedDataStructure
                        ? "btn-conector"
                        : ""
                } `}
                on:click={selectStructure(dataStructure)}
            >
                {dataStructure}
            </li>
        {/each}
    </ul>
    <ul
        class="flex flex-col justify-around h-full flex-1 bg-methods border rounded-xl drop-shadow-3xl"
    >
        {#each dataStructure[selectedDataStructure] as method}
            <li
                class="btn-shape bg-blank cursor-pointer"
                on:click={handleDataMethod(method)}
            >
                {method}
            </li>
        {/each}
    </ul>
    <aside class="flex-1 bg-items">
        {#if selectedDataStructure === "stack"}
            <StackViewer {stack} />
        {/if}
    </aside>
</div>
