<script>

    import {generatePagination} from "$lib/utils.js";
    import {Content, Ellipsis, Item, Link, NextButton, PrevButton, Root} from "$lib/components/ui/pagination/index.js";

    let {current, total} = $props();

    let formatTotalPage = $state(generatePagination(current, total));

    function setPage(page) {

        console.log("PAGE", page, total)

        if (page >= 1 && page <= total) {

            current = page;

            formatTotalPage = generatePagination(page, total);
        }

        console.log(current);

    }

    console.log(current ===  1, "CURRENT", current, "TOTAL", total)

</script>

<Root>
<!--<Root count={100} perPage={10}>-->
    <Content>
        <Item>
            <PrevButton
                    onclick={() => setPage(current - 1)}
                    disabled={current ===  1}
            />
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
            <NextButton
                    onclick={() => setPage(current + 1)}
                    disabled={current ===  total}
            />
        </Item>
    </Content>
</Root>
