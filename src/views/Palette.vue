<template>
    <section class="l-content">
        <h1>Palette</h1>
        <hr />
        <PrevNext :prevLink="'spacing'" :nextLink="'ColorGroups'"></PrevNext>
    </section>
</template>

<script>
import PrevNext from '@/components/PrevNext';

export default {
    name: 'palette',
    components: {
        PrevNext
    }
};
</script>

<style scoped></style>
