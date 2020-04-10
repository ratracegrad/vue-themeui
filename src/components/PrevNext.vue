<template>
    <div class="flex" style="justify-content: center;">
        <div
            count="100"
            navigation="text"
            class="res-style-reset-inner res-style-reset-outer res-pagination defined"
        >
            <ul class="res-pagination__pagination">
                <router-link :to="prevLink">
                    <li
                        class="res-pagination__prev"
                        data-direction="prev"
                        style="border-right: 0;"
                    >
                        <res-icon
                            name="left"
                            size="medium"
                            class="res-style-reset-inner res-style-reset-outer res-icon defined"
                            ><svg
                                viewBox="0 0 18 18"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.5 6.5l-3 3 3 3"
                                    stroke="#000"
                                    fill="none"
                                    fill-rule="evenodd"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path></svg
                        ></res-icon>
                        <span style="margin-left: 4px;">prev</span>
                    </li>
                </router-link>

                <router-link :to="nextLink">
                    <li class="res-pagination__next" data-direction="next">
                        <span style="margin-right: 4px;">next</span>
                        <res-icon
                            name="right"
                            size="medium"
                            class="res-style-reset-inner res-style-reset-outer res-icon defined"
                            ><svg
                                viewBox="0 0 18 18"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.5 6.5l3 3-3 3"
                                    stroke="#000"
                                    fill="none"
                                    fill-rule="evenodd"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path></svg
                        ></res-icon>
                    </li>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PrevNext',
    props: ['prevLink', 'nextLink']
};
</script>

<style>
.res-pagination .res-pagination__pagination li {
    padding: 6px 3px !important;
}
.res-pagination .res-pagination__pagination li:hover {
    background-color: #eeeeee;
}
.res-pagination .res-icon svg {
    margin-top: 1px;
}
</style>
