<template>
    <div>
        <button class="btn mb-3 custom-button" @click="openModal">Add Student</button>

        <!-- Modal -->
        <div class="modal" :class="{ 'show': showModal }" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title w-100 text-center">Add New Student</h5>
                        <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="addNewStudent" ref="form">
                            <div class="mb-3">
                                <!-- <input type="text" class="form-control" placeholder="ID" v-model="newStudent.id" required> -->
                            </div>
                            <div class="mb-3">
                                <input type="text" class="form-control" placeholder="Name" v-model="newStudent.name"
                                    required>
                            </div>
                            <div class="mb-3">
                                <input type="text" class="form-control" placeholder="City" v-model="newStudent.city"
                                    required>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-primary">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            newStudent: {
                //   id: '',
                name: '',
                city: ''
            },
            showModal: false
        };
    },
    methods: {
        openModal() {
            this.showModal = true;
        },
        addNewStudent() {
            if (this.$refs.form.checkValidity()) {
                this.$emit("addstudent", { ...this.newStudent });
                this.clearForm();
                this.closeModal();
            } else {
                alert('Please fill out all fields.');
            }
        },
        clearForm() {
            this.newStudent = {
                id: "",
                name: "",
                city: "",
            };
        },
        closeModal() {
            this.showModal = false;
        }
    }
};
</script>
  
  
<style>
.custom-button {
    font-size: 18px;
    border-radius: 8px;
    padding: 10px 20px;
    background-color: #4cafaf;
    color: #fff;
}

.custom-button:hover {
    background-color: #3c8d8d;
    transform: scale(1.05);
}

.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1050;
    overflow: auto;
}

.modal.show {
    display: block;
}

.modal-dialog {
    position: relative;
    transform: translateY(-50%);
    margin: auto;
}

.modal-header {
    background-color: #FFC0CB;
    padding: 10px 20px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.modal-body {
    padding: 20px;
}

.modal-title {
    margin: 0;
}

.btn-close {
    position: absolute;
    top: 10px;
    right: 20px;
    color: #121111;
    font-size: 24px;
    cursor: pointer;
}

/* Adjustments to form controls */
.form-control {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
}

.btn-primary {
    padding: 10px 20px;
    font-size: 18px;
    background-color: #4cafaf;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.btn-primary:hover {
    background-color: #3c8d8d;
}
</style>
  