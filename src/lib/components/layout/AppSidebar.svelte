<script>
    import {Content, Header, Root, Footer} from "$lib/components/ui/sidebar/index.js";
    import AsideLeft from "$lib/components/layout/AsideLeft.svelte";
</script>

<Root>
    <Header>
        Brand Header
    </Header>
    <Content>
        <AsideLeft/>
    </Content>
    <Footer>
        Profile
    </Footer>
</Root>

