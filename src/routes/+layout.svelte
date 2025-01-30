<script>

    import "../app.css";

    import {Inset, Provider, Trigger} from "$lib/components/ui/sidebar/index.js";
    import AppSidebar from "$lib/components/layout/AppSidebar.svelte";
    import {Separator} from "$lib/components/ui/separator/index.js";
    import {Button} from "$lib/components/ui/button/index.js";

    let {children} = $props();

    let darkMode = $state(false);

    function toggleTheme() {
        darkMode = !darkMode;
        document.documentElement.classList.toggle("dark", darkMode);
    }

</script>

<Provider>

    <AppSidebar/>

    <Inset>
        <header
                class="h-16 sticky top-0 bg-muted"
        >
            <div class="h-full flex items-center gap-2 px-4">
                <Trigger class="-ml-1"/>
                <Separator orientation="vertical" class="mr-2 h-6"/>
                <Button onclick={toggleTheme}>
                    {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </Button>
            </div>
            <!--            <Separator orientation="horizontal"/>-->
        </header>
        <main class="p-2 h-[calc(100dvh-64px)] overflow-y-auto">
            {@render children?.()}
        </main>
    </Inset>

</Provider>

<!--                class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"-->