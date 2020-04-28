<template>
    <div
        style="width: 300px; border: 1px solid #e0e0e0; padding: 10px; margin-right: 10px"
    >
        <h3>Orange</h3>
        <div
            style="width: 100%; background-color: #FC6340; padding: 5px; color: #fff"
        >
            Main #FC6340
        </div>
        <div
            style="width: 100%; background-color: #F7F3EF; padding: 5px; color: #000"
        >
            Faded #F7F3EF
        </div>
        <div
            style="width: 100%; background-color: #FFDBC2; padding: 5px; color: #000"
        >
            Light #FFDBC2
        </div>
        <div
            style="width: 100%; background-color: #FF7E61; padding: 5px; color: #fff"
        >
            Bright #FF7E61
        </div>
        <div
            style="width: 100%; background-color: #E74F2D; padding: 5px; color: #fff"
        >
            Dark #E74F2D
        </div>

        <p style="text-align: right; margin-top: 8px;">
            <res-icon
                res-modal-open="edit"
                name="edit"
                size="small"
                style="vertical-align: middle;"
            ></res-icon>
            <span res-modal-open="edit">Edit </span>
            <res-icon
                res-modal-open="delete"
                name="trash"
                size="small"
                style="vertical-align: middle;"
            ></res-icon>
            <span res-modal-open="delete">Delete</span>
        </p>

        <res-modal id="delete" close-on-bg-click="">
            <div>
                <p style="margin-bottom: 1rem;">Delete color?</p>
                <res-button
                    id="modal-close"
                    design="secondary"
                    res-modal-close="delete"
                    ><button>Delete color</button></res-button
                >
                <res-button
                    id="modal-close"
                    res-modal-close="delete"
                    style="margin-left: 1rem;"
                >
                    <res-icon name="x"></res-icon
                    ><button>Cancel</button></res-button
                >
            </div>
        </res-modal>

        <res-modal id="edit" close-on-bg-click="">
            <div>
                <ColorForm></ColorForm>

                <res-button
                    id="modal-close"
                    res-modal-close="edit"
                    style="margin-left: 1rem;"
                >
                    <res-icon name="x"></res-icon
                    ><button>Cancel</button></res-button
                >
            </div>
        </res-modal>
    </div>
</template>

<script>
import ColorForm from '@/components/ColorForm';
export default {
    name: 'ColorCard',
    components: {
        ColorForm
    }
};
</script>
