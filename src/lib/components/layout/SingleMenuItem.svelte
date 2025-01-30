<script>

    import {MenuButton, MenuItem} from "$lib/components/ui/sidebar/index.js";
    import {page} from "$app/stores";

    const {item} = $props();

    const currentPath = $derived($page.url.pathname);

    // console.log("CURRENT PATH", currentPath, currentPath === "/coupon");

</script>

<MenuItem>
    <MenuButton
            class={currentPath === item.path ? "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground" : ""}>
        {#snippet child({props})}
        <a
                href={item.path}
                {...props}
        >
            <item.icon/>
            <span>{item.title}</span>
        </a>
        {/snippet}
    </MenuButton>
</MenuItem>