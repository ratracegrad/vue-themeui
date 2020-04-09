<template>
    <section class="l-content">
        <h2>Palette Page</h2>
        <div class="c-buttons c-buttons-save">
            <res-button design="primary" style="margin-right: 8px"
                ><button>Save</button></res-button
            >
            <div>
                <router-link
                    to="/spacing"
                    style="text-decoration: none; margin-right: 8px"
                >
                    <res-button design="secondary"
                        ><button>Back</button></res-button
                    >
                </router-link>
                <router-link to="/colorgroups" style="text-decoration: none;">
                    <res-button design="secondary"
                        ><button>Next</button></res-button
                    >
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Palette'
};
</script>

<style scoped></style>
