<template>
    <div class="col text-center">
        Don't have an account?<a v-b-modal.modal-prevent-closing href="#"> Register here</a>
        <b-modal
        id="modal-prevent-closing"
        title="Register new User"
        @ok="handleOk"
        ref="my-modal">
        <form ref="form" @submit.prevent="handleSubmit">
        <b-form-group
            label="Email"
            label-for="email-input"
            invalid-feedback="Email is required">

            <b-form-input
            id="email-input"
            v-model="email"
            required>
            </b-form-input>
        </b-form-group>
        <b-form-group
            label="Password"
            label-for="pass-input"
            invalid-feedback="Password is required">
            
            <b-form-input
            id="pass-input"
            v-model="password"
            required>
            </b-form-input>
        </b-form-group>
        </form>
    </b-modal>
    </div>
</template>

<script>
export default {
    name: 'ModalRegister',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        handleOk(bvModalEvt) {
            // Prevent modal from closing
            bvModalEvt.preventDefault()
            // Trigger submit handler
            this.handleSubmit()
        },
        handleSubmit() {
            this.$emit('register', {
                email: this.email,
                password: this.password
            })
            this.$nextTick(() => {
                this.$bvModal.hide('modal-prevent-closing')
            })
        }
    }
}
</script>

<style>

</style>