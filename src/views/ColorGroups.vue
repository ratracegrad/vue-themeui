<template>
    <section class="l-content">
        <h2>Color Groups Page</h2>
        <div class="c-buttons c-buttons-save">
            <res-button design="primary" style="margin-right: 8px"
                ><button>Save</button></res-button
            >
            <div>
                <router-link
                    to="/palette"
                    style="text-decoration: none; margin-right: 8px"
                >
                    <res-button design="secondary"
                        ><button>Back</button></res-button
                    >
                </router-link>
                <router-link to="/meta" style="text-decoration: none;">
                    <res-button design="secondary"
                        ><button disabled>Next</button></res-button
                    >
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ColorGroups'
};
</script>

<style scoped></style>
