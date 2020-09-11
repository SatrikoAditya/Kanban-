<template>  
    <div>
        <b-dropdown-item v-b-modal="dataTask.title" href="#">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
            </svg>
            Edit
        </b-dropdown-item>
        <b-modal
            :id="dataTask.title"
            title="Edit Kanban"
            @ok="handleOk"
            ref="my-modal">
            <form ref="form" @submit.prevent="handleSubmit">
            <b-form-group
                label="Title"
                label-for="title-input"
                invalid-feedback="Title is required">

                <b-form-input
                id="title-input"
                v-model="title"
                required>
                </b-form-input>
            </b-form-group>
            <b-form-group
                label="Description"
                label-for="desc-input"
                invalid-feedback="Description is required">
                
                <b-form-input
                id="desc-input"
                v-model="description"
                required>
                </b-form-input>
            </b-form-group>
            <b-form-group
                label="Category"
                label-for="cat-input"
                invalid-feedback="Category is required">
                
                <b-form-select v-model="category" class="mb-3">
                    <b-form-select-option :value="null" disabled>Please select an option</b-form-select-option>
                    <b-form-select-option value="backlog">Backlog</b-form-select-option>
                    <b-form-select-option value="product">Product</b-form-select-option>
                    <b-form-select-option value="development">Development</b-form-select-option>
                    <b-form-select-option value="done">Done</b-form-select-option>
                </b-form-select>
            </b-form-group>  
            </form>
        </b-modal>
    </div>
</template>

<script>
export default {
    name: 'ModalUpdate',
    data() {
        return {
            title: this.dataTask.title,
            description: this.dataTask.description,
            category: this.dataTask.category,
            id: this.dataTask.id
        }
    },
    props: ['dataTask'],
    methods: {
        handleOk(bvModalEvt) {
            // Prevent modal from closing
            bvModalEvt.preventDefault()
            // Trigger submit handler
            this.handleSubmit()
        },
        hideModal() {
            this.$refs['my-modal'].hide()
        },
        handleSubmit() {
            this.$emit('updateData', {
                title: this.title,
                description: this.description,
                category: this.category,
                id: this.id
            })
            this.$nextTick(() => {
                this.$bvModal.hide(this.dataTask.category)
            })
        }
    }
}
</script>

<style>

</style>