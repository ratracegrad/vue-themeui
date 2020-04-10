<template>
    <section class="l-content">
        <h1>Color Groups</h1>
        <hr />
        <PrevNext :prevLink="'palette'" :nextLink="'#'"></PrevNext>
    </section>
</template>

<script>
import PrevNext from '@/components/PrevNext';

export default {
    name: 'ColorGroups',
    components: {
        PrevNext
    }
};
</script>

<style scoped></style>
