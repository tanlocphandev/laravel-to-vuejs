<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    width: {
        type: String,
        default: '198px',
    },
    height: {
        type: String,
        default: '33px',
    },
    widthIcon: {
        type: String,
        default: '49px',
    },
    placeholder: {
        type: String,
        default: 'Tìm kiếm...',
    }
});

const fieldWidth = props.width;
const fieldHeight = props.height;
const fieldWidthIcon = props.widthIcon;

</script>

<template>
    <div class="search-field" :style="{ width: width, height: height }">
        <input type="text" class="search-text" :placeholder="placeholder" />
        <v-icon class="search-icon" :style="{ width: widthIcon }">mdi-magnify</v-icon>
    </div>
</template>

<style lang="css" scoped>
/* search */
.search-field {
    background-color: var(--white);
    border: 1px solid var(--gray);
    border-radius: 4px;
    font-family: Arial;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-right: 20px;
}

.search-text {
    width: 100%;
    padding-left: 15px;
    border: none;
    outline: none;
}

.search-icon {
    color: var(--white);
    height: 100%;
    background: var(--primary);
    border-radius: 0 4px 4px 0;
}
</style>
