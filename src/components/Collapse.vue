<template>
    <div class="collapse collapse-item" :class="{ 'is-active': active }">
        <div
            class="collapse-header touchable"
            role="tab"
            :aria-expanded="active ? 'true' : 'false'"
            @click.prevent="toggle"
        >
            <slot name="collapse-header"></slot>
        </div>
        <transition name="fade">
            <div class="collapse-content" v-if="active">
                <div class="collapse-content-box">
                    <slot name="collapse-body"></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Collapse',
    data() {
        return {
            active: false
        };
    },
    props: {
        selected: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    created() {
        this._isCollapseItem = true;
        this.active = this.selected;
    },
    ready() {
        if (this.active) {
            this.$emit('collapse-open', this.index);
        }
    },
    methods: {
        toggle() {
            this.active = !this.active;
            if (this.active) {
                this.$emit('collapse-open', this.index);
            }
        }
    }
};
</script>

<style>
.collapse {
    margin-bottom: 2px;
}
.collapse .collapse-header {
    padding: 20px 20px 20px 40px;
    border-radius: 3px;
    position: relative;
}
.collapse .collapse-header:hover {
    background-color: #fff3c2;
}
.collapse .collapse-header > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.collapse .collapse-header {
    font-size: 0.938em;
    font-weight: bold;
}
.collapse .collapse-header::before {
    -moz-transition: all 0.2s;
    -o-transition: all 0.2s;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    content: url('./arrow-down.svg');
    position: absolute;
    font-size: 0.4em;
    top: calc(50% - 0.4em);
    left: 20px;
    color: #c5c9d0;
    -moz-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
}
.collapse.is-active .collapse-header::before {
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
}
.collapse .collapse-content-box {
    -moz-transition: all 0.2s;
    -o-transition: all 0.2s;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
}
</style>
