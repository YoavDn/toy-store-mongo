  <template>
    <el-form @submit="$emit('addUser', newUserInputs)" :label-position="'right'" label-width="100px" :model="newUserInpu"
        style="max-width: 460px">
        <el-form-item label="Full Name">
            <el-input v-model="newUserInputs.name" />
        </el-form-item>
        <el-form-item label="Username">
            <el-input v-model="newUserInputs.username" />
        </el-form-item>
        <el-form-item label="Password">
            <el-input v-model="newUserInputs.pass" />
        </el-form-item>

    </el-form>
</template>

<script setup>
import { reactive } from 'vue'
const newUserInputs = reactive({
    name: '',
    pass: '',
    username: ''
})
</script>