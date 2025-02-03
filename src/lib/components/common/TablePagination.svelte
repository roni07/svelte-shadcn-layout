<script>

    import {generatePagination} from "$lib/utils.js";
    import {Content, Ellipsis, Item, Link, Root} from "$lib/components/ui/pagination/index.js";
    import {Button} from "$lib/components/ui/button/index.js";
    import {ChevronLeft, ChevronRight} from "lucide-svelte";

    let {current, total, pageSize} = $props();

    let formatTotalPage = $state(generatePagination(current, total));

    function setPage(page) {

        if (page >= 1 && page <= total) {

            current = page;

            formatTotalPage = generatePagination(page, total);
        }

    }

</script>

<Root count={total} perPage={pageSize}>
    <Content>
        <Item>
            <Button
                    variant="ghost"
                    onclick={() => setPage(current-1)}
                    disabled={current === 1}
            >
                <ChevronLeft class="mr-2 size-4"/>
                Previous
            </Button>

        </Item>
        {#each formatTotalPage as page, i(i)}
            {#if page === "ellips"}
                <Item>
                    <Ellipsis/>
                </Item>
            {:else}
                <Item
                        isVisible={current === page}
                        onclick={() => setPage(page)}
                >
                    <Link
                            {page}
                            isActive={current === page}
                    >
                        {page}
                    </Link>
                </Item>
            {/if}
        {/each}
        <Item>
            <Button
                    variant="ghost"
                    onclick={() => setPage(current+1)}
                    disabled={current ===  total}
            >
                Next
                <ChevronRight class="mr-2 size-4"/>
            </Button>
            <!--            <Button-->
            <!--                    variant="outline"-->
            <!--                    size="icon"-->
            <!--                    onclick={() => setPage(current + 1)}-->
            <!--                    disabled={current ===  total}-->
            <!--            >-->
            <!--                <ChevronRight/>-->
            <!--            </Button>-->
        </Item>
    </Content>
</Root>
