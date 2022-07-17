<template>
    <el-checkbox-group class="labels" v-model="newCheckedLabels" @change="handleChecked">
        <el-checkbox v-for="label in props.labels" :key="label" :label="label">{{ label }}</el-checkbox>
    </el-checkbox-group>
</template>
    
<script setup>
import { defineProps, ref, defineEmits } from 'vue';

const props = defineProps({
    'labels': Array,
    'checkedLabels': Array
})
const emit = defineEmits(['updateLabels'])
const newCheckedLabels = ref([...props.checkedLabels])

const handleChecked = (value) => {
    emit("updateLabels", value)
}

</script>
    
<style>
.labels {
    display: flex;
    flex-direction: column;
}
</style>