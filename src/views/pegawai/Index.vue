<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-8">
                <router-link 
                    :to="{ name: 'pegawai.create' }"
                        class = "btn btn-primary btn-sm rounded shadow mb-3"
                >Add</router-link>

                <div class="card rounded shadow">
                    <div class="card-header">
                        List Pegawai
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>NIK</th>
                                    <th>Nama</th>
                                    <th>Departemen</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(pegawai, index) in pegawais.data" :key="index">
                                    <td>{{ pegawai.nik }}</td>
                                    <td>{{ pegawai.nama_p }}</td>
                                    <td>{{ pegawai.departemen }}</td>
                                    <td>
                                        <div class="btn btn-group">
                                            <router-link
                                                :to="{ name: 'pegawai.edit', params:{id: pegawai.id}}"
                                                class="btn btn-sm btn-outline-info"
                                            >Edit</router-link>
                                        </div>
                                        <button class="btn btn-sm btn-outline-danger"
                                            @click.prevent="destroy(pegawai.id, index)"    
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {onMounted, ref} from 'vue'

export default {
    setup() {
        let pegawais = ref([])

        onMounted(() => {
            // get Data From API Endpoint
            axios.get('http://127.0.0.1:8000/api/pegawai').then((result) => {
                pegawais.value = result.data
            }).catch((err) => {
                console.log(err.response.data)
            });
        });

        function destroy(id, index) {
             axios.delete(
                `http://127.0.0.1:8000/api/pegawai/${id}`
            )
            .then(() => {
                pegawais.value.data.splice(index, 1)
            }).catch((err) => {
                console.log(err.response.data);
            });
        }

        return {
            pegawais,
            destroy
        }
    }
}
</script>