<script>

    import {MenuButton, MenuItem, MenuSub, MenuSubItem} from "$lib/components/ui/sidebar/index.js";
    import {Content, Root, Trigger} from "$lib/components/ui/collapsible/index.js";
    import {ChevronDown} from "lucide-svelte";
    import {page} from "$app/stores";
    import {getFirstPathSegment} from "$lib/utils.js";

    const {item} = $props();

    const currentPath = $derived($page.url.pathname);

    const nestedRouteMap = {
        "users": "user-management",
        "products": "product-management",
    }

</script>

<Root close class="group/collapsible">
    <MenuItem>
        <Trigger>
            {#snippet child({props})}
            <MenuButton
                    {...props}
                    class={nestedRouteMap[getFirstPathSegment(currentPath)] === item.key ? "text-destructive hover:text-destructive" : ""}
            >
                <item.icon/>
                <span>
                    {item.title}
                </span>
                <ChevronDown
                        class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180"
                />
            </MenuButton>
            {/snippet}
        </Trigger>
        <Content>
            <MenuSub>

                {#each item.subMenu as subMenuItem (subMenuItem.key)}
                    <MenuSubItem>
                        <MenuButton
                                class={currentPath === subMenuItem.path ? "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground" : ""}>

                            {#snippet child({props})}
                            <a href={subMenuItem.path} {...props}>
                                <subMenuItem.icon/>
                                {subMenuItem.title}
                            </a>
                            {/snippet}

                        </MenuButton>
                    </MenuSubItem>
                {/each}

            </MenuSub>
        </Content>
    </MenuItem>
</Root>
