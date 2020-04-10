<template>
    <section class="l-content">
        <h1>Headings</h1>
        <hr>
        <PrevNext :prevLink="'categories'" :nextLink="'body'"></PrevNext>

        
    </section>
</template>

<script>
import PrevNext from '@/components/PrevNext';

export default {
    name: 'Headings',
    components: {
        PrevNext
    }
};
</script>

<style scoped></style>
