<template>
    <section class="l-content">
        <h2>Assign your typography</h2>
        <p>These broad font categories define your theme's typography</p>
        <div class="c-panel">
            <res-select
                ><label
                    >Headings
                    <p>Currently: <strong>Graphik-Regular</strong></p></label
                >
                <select name="s1" id="initial-id1"
                    ><option placeholder="">Select font</option
                    ><option value="Graphik-Regular">Graphik-Regular</option
                    ><option value="Graphik-Bold">Graphik-Bold</option
                    ><option value="Lora-Regular">Lora-Regular</option
                    ><option value="Lora-Bold">Lora-Bold</option></select
                ></res-select
            >

            <hr />

            <res-select
                ><label
                    >Body
                    <p>Currently: <strong>Graphik-Regular</strong></p></label
                >
                <select name="s1" id="initial-id2"
                    ><option placeholder="">Select font</option
                    ><option value="Graphik-Regular">Graphik-Regular</option
                    ><option value="Graphik-Bold">Graphik-Bold</option
                    ><option value="Lora-Regular">Lora-Regular</option
                    ><option value="Lora-Bold">Lora-Bold</option></select
                ></res-select
            >

            <hr />

            <res-select
                ><label
                    >Meta
                    <p>Currently: <strong>Graphik-Regular</strong></p></label
                >
                <select name="s1" id="initial-id3"
                    ><option placeholder="">Select font</option
                    ><option value="Graphik-Regular">Graphik-Regular</option
                    ><option value="Graphik-Bold">Graphik-Bold</option
                    ><option value="Lora-Regular">Lora-Regular</option
                    ><option value="Lora-Bold">Lora-Bold</option></select
                ></res-select
            >

            <hr />

            <res-select
                ><label
                    >UI
                    <p>Currently: <strong>Graphik-Regular</strong></p></label
                >
                <select name="s1" id="initial-id4"
                    ><option placeholder="">Select font</option
                    ><option value="Graphik-Regular">Graphik-Regular</option
                    ><option value="Graphik-Bold">Graphik-Bold</option
                    ><option value="Lora-Regular">Lora-Regular</option
                    ><option value="Lora-Bold">Lora-Bold</option></select
                ></res-select
            >
        </div>

        <div class="c-buttons c-buttons-save">
            <res-button design="primary" style="margin-right: 8px"
                ><button>Save</button></res-button
            >
        </div>
        <PrevNext :prevLink="'typography'" :nextLink="'headings'"></PrevNext>
    </section>
</template>

<script>
import PrevNext from '@/components/PrevNext';
export default {
    name: 'Categories',
    components: {
        PrevNext
    }
};
</script>

<style scoped></style>
