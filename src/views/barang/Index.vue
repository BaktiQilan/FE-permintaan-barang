<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-8">
                <router-link 
                    :to="{ name: 'barang.create' }"
                        class = "btn btn-primary btn-sm rounded shadow mb-3"
                >Add</router-link>

                <div class="card rounded shadow">
                    <div class="card-header">
                        List Barang
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Nama</th>
                                    <th>Lokasi</th>
                                    <th>Stok</th>
                                    <th>Satuan</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(barang, index) in barangs.data" :key="index">
                                    <td>{{ barang.nama_b }}</td>
                                    <td>{{ barang.lokasi }}</td>
                                    <td>{{ barang.stok }}</td>
                                    <td>{{ barang.satuan }}</td>
                                    <td>
                                        <div class="btn btn-group">
                                            <router-link
                                                :to="{ name: 'barang.edit', params:{id: barang.id}}"
                                                class="btn btn-sm btn-outline-info"
                                            >Edit</router-link>
                                        </div>
                                        <button class="btn btn-sm btn-outline-danger"
                                            @click.prevent="destroy(barang.id, index)"    
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
        let barangs = ref([])

        onMounted(() => {
            // get Data From API Endpoint
            axios.get('http://127.0.0.1:8000/api/barang').then((result) => {
                barangs.value = result.data
            }).catch((err) => {
                console.log(err.response.data)
            });
        });

        function destroy(id, index) {
             axios.delete(
                `http://127.0.0.1:8000/api/barang/${id}`
            )
            .then(() => {
                barangs.value.data.splice(index, 1)
            }).catch((err) => {
                console.log(err.response.data);
            });
        }

        return {
            barangs,
            destroy
        }
    }
}
</script>