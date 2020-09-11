<template>
    <!-- Ini kanban punya backlog -->
    <div class="col-3">
        <div class="row">
            <div class="col-12">
                <div 
                class="text-white rounded p-2"
                :class="category.color">
                    {{ category.title }}
                    <ModalAdd
                        :categoryId="category"
                        @addData="addDataModal"
                    ></ModalAdd>
                </div>
            </div>
            <div style="overflow-y: auto; height: 420px;">
                <!-- component task card -->
                <TaskCard
                    v-for="dataTask in filteredTask"
                    :key="dataTask.id"
                    :dataTask="dataTask"
                    @deleteData="deleteCategory"
                    @updateData="updateDataModal"
                ></TaskCard>
            </div>
        </div>
    </div>
</template>

<script>
import TaskCard from './TaskCard'
import ModalAdd from './ModalAdd'
export default {
    name:"Category",
    props: ['category', 'task'],
    components: {
        TaskCard,
        ModalAdd
    },
    methods: {
        deleteCategory(id) {
            this.$emit('deleteData', id)
        },
        addDataModal(payload) {
            this.$emit('addData', payload)
        },
        updateDataModal(payload) {
            this.$emit('updateData', payload)
        }  
    },
    computed: {
        filteredTask() {
            return this.task.filter(data => data.category === this.category.category)
        } 
    }
}
</script>

<style>

</style>