<template>
    <div>
        <el-form-item v-if='selectType' :label-position="labelPosition" label-width="100px" label="Labels:">
            <el-select @change="updateModelValue" v-model="modelValue" :multiple="selectType" placeholder="Select"
                style="width: 200px">

                <el-option v-for="(item) in allLabels" :key="item" :label="item" :value="item" />
            </el-select>
        </el-form-item>
        <el-select v-else @change="updateModelValue" v-model="modelValue" :multiple="selectType" placeholder="Sort by">

            <el-option v-for="(item) in allLabels" :key="item" :label="item" :value="item" />
        </el-select>
    </div>

</template>

<script  >
export default {

    props: {
        'modelValue': Array, 'allLabels': Array
    },
    methods: {
        updateModelValue() {
            this.$emit('update:modelValue', this.modelValue)
        }
    },
    computed: {
        selectType() {
            return this.allLabels.includes('Art') ? true : false
        }
    }
}



</script>