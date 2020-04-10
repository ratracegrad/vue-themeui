<template>
    <section class="l-content">
        <h1>UI</h1>
        <hr />
        <PrevNext :prevLink="'meta'" :nextLink="'spacing'"></PrevNext>
    </section>
</template>

<script>
import PrevNext from '@/components/PrevNext';

export default {
    name: 'UI',
    components: {
        PrevNext
    }
};
</script>

<style scoped></style>
