<template>
    <div>
        <a v-b-modal="categoryId.category" href="#" class="text-decoration-none">
            <svg style="color: white;" width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-plus " fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
        </a>
        <b-modal
        :id="categoryId.category"
        title="Input New Kanban"
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
            
            <b-form-input
            id="cat-input"
            v-model="categoryId.category"
            required disabled>
            </b-form-input>
        </b-form-group>  
        </form>
    </b-modal>
    </div>
</template>

<script>
export default {
    name: 'ModalAdd',
    data() {
        return {
            title: '',
            description: '',
            category: this.categoryId.category
        }
    },
    props: ['categoryId'],
    methods: {
        handleOk(bvModalEvt) {
            // Prevent modal from closing
            bvModalEvt.preventDefault()
            // Trigger submit handler
            this.handleSubmit()
        },
        handleSubmit() {
            this.$emit('addData', {
                title: this.title,
                description: this.description,
                category: this.category
            })
            this.$nextTick(() => {
                this.$bvModal.hide(this.categoryId.category)
            })
        }
    }
}
</script>

<style>

</style>