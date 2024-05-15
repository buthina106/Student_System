<template>
    <div>
        <add @addstudent="addNewStudent" />
        <!-- Table -->
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>City</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(std, index) in students" :key="std.id">
                    <td>{{ std.id }}</td>
                    <td>{{ std.name }}</td>
                    <td>{{ std.city }}</td>
                    <td>
                        <button class="btn btn-warning mx-1" @click="showUpdateForm(index)">
                            Update
                        </button>
                        <form v-if="std.showUpdateForm" @submit.prevent="updateStudent(std)" class="update-form">
                            <input type="text" v-model="std.updatedName" placeholder="New Name" class="form-control" required>
                            <input type="text" v-model="std.updatedCity" placeholder="New City" class="form-control" required>
                            <button type="submit" class="btn btn-primary">Confirm</button>
                        </form>
                    </td>
                    <td>
                        <button class="btn btn-danger mx-1" @click="deleteStudent(std.id)">
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th colspan="5">
                        <h4>Total number of students = {{ students.length }}</h4>
                    </th>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
import add from './add.vue'

export default {
    data() {
        return {
            students: []
        };
    },
    async created() {
        let allStudents = await fetch("http://localhost:3000/students");
        this.students = await allStudents.json();
        this.students.forEach(student => {
            student.showUpdateForm = false;
            student.updatedName = '';
            student.updatedCity = '';
        });
    },
    methods: {
        async addNewStudent(newStudent) {
            const maxId = this.students.reduce((max, student) => {
                return +student.id > max ? +student.id : max;
            }, 0);
            const newId = maxId + 1;
            const newConstructor = { id: newId.toString(), name: newStudent.name, city: newStudent.city };
            await fetch("http://localhost:3000/students", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newConstructor)
            });
            this.students.push(newConstructor);
            await this.updateJSONFile(); 
        },
        async updateStudent(student) {
            const updatedStudent = {
                name: student.updatedName,
                city: student.updatedCity
            };
            await fetch(`http://localhost:3000/students/${student.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedStudent)
            });
            student.name = student.updatedName;
            student.city = student.updatedCity;
            student.showUpdateForm = false;
            await this.updateJSONFile(); 
        },
        async deleteStudent(studentId) {
            await fetch(`http://localhost:3000/students/${studentId}`, {
                method: "DELETE"
            });
            this.students = this.students.filter(student => student.id !== studentId);
            await this.updateJSONFile();
        },
        async updateJSONFile() {
            await fetch("http://localhost:3000/updateJSONFile", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.students)
            });
        },
        showUpdateForm(index) {
            this.students.forEach((student, i) => {
                if (i === index) {
                    student.showUpdateForm = !student.showUpdateForm;
                    if (!student.showUpdateForm) {
                        student.updatedName = '';
                        student.updatedCity = '';
                    }
                } else {
                    student.showUpdateForm = false;
                }
            });
        }
    },
    components: {
        add
    }
}
</script>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

th,
td {
    padding: 12px;
    border-bottom: 3px solid #ddd;
}

thead th {
    background-color: #f2f2f2;
    text-align: center;
}

tfoot th {
    background-color: #f2f2f2;
    text-align: left;
    font-weight: bold;
}

tfoot h4 {
    margin: 0;
    font-size: 16px;
    color: #333;
}

.btn {
    margin: 0 4px;
}

.update-form {
    margin-top: 10px;
}

.update-form input {
    margin-bottom: 5px;
}

.update-form button {
    margin-top: 5px;
}
</style>