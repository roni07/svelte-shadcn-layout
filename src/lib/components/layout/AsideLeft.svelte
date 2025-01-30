<script>
    import {Group, Menu} from "$lib/components/ui/sidebar/index.js";
    import {Navs} from "../../../page_routes/Navs.js";
    import SingleMenuItem from "$lib/components/layout/SingleMenuItem.svelte";
    import MultipleMenuItem from "$lib/components/layout/MultipleMenuItem.svelte";
</script>

<Group>

    <Menu>

        {#each Navs as menuItem (menuItem.key)}

            {#if !menuItem.subMenu}
                <SingleMenuItem item={menuItem}/>
            {/if}

            {#if menuItem.subMenu}
                <MultipleMenuItem item={menuItem}/>
            {/if}

        {/each}

    </Menu>

</Group>