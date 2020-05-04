<template>
    <section class="l-content">
        <h1>Headlines</h1>
        <p>
            Headline styles are used for editorial story titles across the site,
            in many different components (eg Article and Feature Heads, Heroes,
            Story Cards). Headline styles are set independent of font-size, they
            can appear at any size on your selected typescale. Size and
            line-height is determined on the component-level. Up to 4 headline
            styles can be set for each theme. 2-3 is recommended.
        </p>
        <hr />
        <h2>Headline 1</h2>
        <div class="c-panel">
            <div class="margin-sm">
                <res-select
                    ><label>Font</label>
                    <select name="s1" id="initial-id"
                        ><option value="">Inherit from categories</option>
                        <option value="">Other Fonts</option></select
                    ></res-select
                >
            </div>

            <div class="margin-sm">
                <res-select
                    ><label>Letterspacing</label>
                    <select name="s1" id="initial-id"
                        ><option value="">default</option>
                        <option value="">caps</option>
                        <option value="">expressive</option></select
                    ></res-select
                >
            </div>

            <div class="margin-sm">
                <res-select
                    ><label>Text transform</label>
                    <select name="s1" id="initial-id"
                        ><option value="">none</option>
                        <option value="">uppercase</option></select
                    ></res-select
                >
            </div>
            <res-button design="primary"><button>Save</button></res-button>
        </div>

        <res-button design="default"
            ><res-icon name="add"></res-icon
            ><button>Add a headline</button></res-button
        >

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
