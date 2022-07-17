  <template>
    <el-form @submit="$emit('addUser', newUserInputs)" :label-position="'right'" label-width="100px"
        :model="newUserInputs" style="max-width: 460px">
        <el-form-item label="Full Name">
            <el-input v-model="newUserInputs.fullname" />
        </el-form-item>
        <el-form-item label="Username">
            <el-input v-model="newUserInputs.username" />
        </el-form-item>
        <el-form-item label="Password">
            <el-input v-model="newUserInputs.password" />
        </el-form-item>
        <el-button @click="$emit('addUser', newUserInputs)">Register</el-button>

    </el-form>
</template>

<script setup>
import { reactive } from 'vue'
const newUserInputs = reactive({
    fullname: '',
    password: '',
    username: ''
})
</script>