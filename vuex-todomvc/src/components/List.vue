<template>
    <div>
        <ul>
            <li v-for="item in items" track-by="$index" @click="remove($index)">
                {{ item }}
            </li>
        </ul>

    </div>
</template>

<style>
    li {
        line-height: 30px;
        cursor: pointer;
        list-style-type:decimal-leading-zero;
    }

    li:hover {
        background-color: red;
    }
</style>

<script>
    import { getItems } from '../vuex/getters';
    import { remove } from '../vuex/actions';

    export default{
        vuex: {
            getters: {
                items: getItems
            },
            actions: {
                remove: remove
            }
        }

    }
</script>
