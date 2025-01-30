<script>

    import {Body, Cell, Head, Header, Root, Row} from "$lib/components/ui/table/index.js";
    import TablePagination from "$lib/components/common/TablePagination.svelte";

    const invoices = [
        {invoice: "INV001", paymentStatus: "Paid", totalAmount: "$250.00", paymentMethod: "Credit Card"},
        {invoice: "INV002", paymentStatus: "Pending", totalAmount: "$150.00", paymentMethod: "PayPal"},
        {invoice: "INV003", paymentStatus: "Unpaid", totalAmount: "$350.00", paymentMethod: "Bank Transfer"},
        {invoice: "INV004", paymentStatus: "Paid", totalAmount: "$450.00", paymentMethod: "Credit Card"},
        {invoice: "INV005", paymentStatus: "Paid", totalAmount: "$550.00", paymentMethod: "PayPal"},
        {invoice: "INV006", paymentStatus: "Pending", totalAmount: "$200.00", paymentMethod: "Bank Transfer"},
        {invoice: "INV007", paymentStatus: "Unpaid", totalAmount: "$300.00", paymentMethod: "Credit Card"},
        {invoice: "INV0011", paymentStatus: "Paid", totalAmount: "$250.00", paymentMethod: "Credit Card"},
        {invoice: "INV0021", paymentStatus: "Pending", totalAmount: "$150.00", paymentMethod: "PayPal"},
        {invoice: "INV0031", paymentStatus: "Unpaid", totalAmount: "$350.00", paymentMethod: "Bank Transfer"},
        {invoice: "INV0041", paymentStatus: "Paid", totalAmount: "$450.00", paymentMethod: "Credit Card"},
        {invoice: "INV0051", paymentStatus: "Paid", totalAmount: "$550.00", paymentMethod: "PayPal"},
        {invoice: "INV0061", paymentStatus: "Pending", totalAmount: "$200.00", paymentMethod: "Bank Transfer"},
        {invoice: "INV0071", paymentStatus: "Unpaid", totalAmount: "$300.00", paymentMethod: "Credit Card"},
        {invoice: "INV00210", paymentStatus: "Pending", totalAmount: "$150.00", paymentMethod: "PayPal"},
        {invoice: "INV00310", paymentStatus: "Unpaid", totalAmount: "$350.00", paymentMethod: "Bank Transfer"},
        {invoice: "INV00410", paymentStatus: "Paid", totalAmount: "$450.00", paymentMethod: "Credit Card"},
        {invoice: "INV00510", paymentStatus: "Paid", totalAmount: "$550.00", paymentMethod: "PayPal"},
        {invoice: "INV00610", paymentStatus: "Pending", totalAmount: "$200.00", paymentMethod: "Bank Transfer"},
        {invoice: "INV00710", paymentStatus: "Unpaid", totalAmount: "$300.00", paymentMethod: "Credit Card"}
    ];

    // Pagination state
    let currentPage = $state(1);
    let pageSize = 2;

    // Compute total pages
    let totalPages = $state(Math.ceil(invoices.length / pageSize));
    // const totalPages = $derived(Math.ceil(invoices.length / pageSize));

    // Slice data for the current page
    let paginatedData = $state(invoices.slice((currentPage - 1) * pageSize, currentPage * pageSize));


</script>

<div class="h-full flex flex-col">

    <!--    <div class="border border-gray-200 rounded-md">-->
    <Root class="flex-grow border border-gray-200 rounded-md">
        <Header class="sticky top-0 bg-white shadow">
            <Row>
                <Head class="w-[100px]">Invoice</Head>
                <Head>Status</Head>
                <Head>Method</Head>
                <Head class="text-right">Amount</Head>
            </Row>
        </Header>

        <Body class="overflow-y-auto h-[calc(100%-80px)]">
        {#each paginatedData as invoice, i (i)}
            <Row>
                <Cell class="font-medium">{invoice.invoice}</Cell>
                <Cell>{invoice.paymentStatus}</Cell>
                <Cell>{invoice.paymentMethod}</Cell>
                <Cell class="text-right">{invoice.totalAmount}</Cell>
            </Row>
        {/each}
        </Body>
    </Root>
    <!--    </div>-->

    <div class="mt-auto">
        <TablePagination
                total={totalPages}
                current={currentPage}
        />
    </div>

</div>
