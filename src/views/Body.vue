<template>
    <section class="l-content">
        <h1>Body</h1>
        <hr />
        <PrevNext :prevLink="'headings'" :nextLink="'meta'"></PrevNext>
    </section>
</template>

<script>
import PrevNext from '@/components/PrevNext';

export default {
    name: 'Body',
    components: {
        PrevNext
    }
};
</script>

<style scoped></style>
