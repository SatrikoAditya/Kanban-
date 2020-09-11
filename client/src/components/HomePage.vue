<template>
    <section>
        <div class="container mt-4">
            <ul class="nav sticky-top">
                <li class="nav-item">
                    <h1>Welcome to Hacktiv8 Kanban!</h1>
                <li class="nav navbar-nav ml-auto">
                    <a @click.prevent="logout" class="btn btn-danger" role="button" href="#">Logout</a>
                </li>
            </ul>
            <hr style="height:2px;border:none;color:#333;background-color:#333;" />
            </div>
            <div class="container p-4">
                <div class="row">
                    <Category
                        v-for="(category, index) in categories"
                        :key="index"
                        :category="category"
                        :task="task"
                        @deleteData="deleteKanban"
                        @addData="addDataModal"
                        @updateData="editDataModal"
                    ></Category>
                </div>
            </div>
    </section>
</template>

<script>
import Category from './Category'

export default {
    name: 'homePage',
    components: {
        Category
    },
    props: ['categories', 'task', 'email'],
    methods: {
        deleteKanban(id) {
            this.$emit('deleteData', id)
        },
        logout() {
            this.$emit('logout')
        },
        addDataModal(payload) {
            this.$emit('addData', payload)
        },
        editDataModal(payload) {
            this.$emit('updateData', payload)
        }
    },
}
</script>

<style>

</style>