<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-8">
                <router-link 
                    :to="{ name: 'reqbarang.create' }"
                        class = "btn btn-primary btn-sm rounded shadow mb-3"
                >Add</router-link>

                <div class="card rounded shadow">
                    <div class="card-header">
                        List Permintaan Barang
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>NIK</th>
                                    <th>Nama Pegawai</th>
                                    <th>Nama Barang</th>
                                    <th>Jumlah</th>
                                    <th>Tanggal Permintaan</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(reqbarang, index) in reqbarangs.data" :key="index">
                                    <td>{{ reqbarang.nik }}</td>
                                    <td>{{ reqbarang.nama_p }}</td>
                                    <td>{{ reqbarang.nama_b }}</td>
                                    <td>{{ reqbarang.kuantiti }}</td>
                                    <td>{{ reqbarang.tgl_req }}</td>
                                    <td>
                                        <button class="btn btn-sm btn-outline-danger"
                                            @click.prevent="destroy(reqbarang.id, index)"    
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
        let reqbarangs = ref([])

        onMounted(() => {
            // get Data From API Endpoint
            axios.get('http://127.0.0.1:8000/api/reqbarang').then((result) => {
                reqbarangs.value = result.data
            }).catch((err) => {
                console.log(err.response.data)
            });
        });

        function destroy(id, index) {
             axios.delete(
                `http://127.0.0.1:8000/api/reqbarang/${id}`
            )
            .then(() => {
                reqbarangs.value.data.splice(index, 1)
            }).catch((err) => {
                console.log(err.response.data);
            });
        }

        return {
            reqbarangs,
            destroy
        }
    }
}
</script>