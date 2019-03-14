<template>
    <b-tabs type="is-boxed" v-model="activeTab" position="is-left">
        <b-tab-item label="Pictures">
            Lorem ipsum dolor sit amet.
        </b-tab-item>
        <b-tab-item label="Books">
            What light is light, if Silvia be not seen?
            What joy is joy, if Silvia be not by—
            Unless it be to think that she is by
            And feed upon the shadow of perfection?
            Except I be by Silvia in the night,
            There is no music in the nightingale.
        </b-tab-item>

        <div slot="controls-left" class="controls-container">
            <button class="button is-white"
                    @click="activeTab = Math.max(activeTab - 1, 0)">
                <b-icon icon="arrow-left" size="is-small"></b-icon>
            </button>
        </div>

        <div slot="controls-right" class="controls-container">
            <button class="button is-white"
                @click="activeTab = Math.min(activeTab + 1, maxTab)">
                <b-icon icon="arrow-right" size="is-small"></b-icon>
            </button>
        </div>
    </b-tabs>
</template>

<script>
const TABS = 2;

export default {
    data() {
        return {
            activeTab: 0,
            maxTab: TABS - 1
        }
    }
}
</script>

<style>
.controls-container {
    display: flex;
    align-items: center;
    padding: 0 0.25rem;
}
</style>
