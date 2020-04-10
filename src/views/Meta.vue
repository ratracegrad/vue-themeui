<template>
    <section class="l-content">
        <h1>Meta</h1>
        <hr />
        <PrevNext :prevLink="'body'" :nextLink="'UI'"></PrevNext>
    </section>
</template>

<script>
import PrevNext from '@/components/PrevNext';

export default {
    name: 'Meta',
    components: {
        PrevNext
    }
};
</script>

<style scoped></style>
