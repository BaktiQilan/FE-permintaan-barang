<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-8">
                <router-link 
                    :to="{ name: 'barang.index' }"
                        class = "btn btn-primary btn-sm rounded shadow mb-3"
                >Back</router-link>

                <div class="card rounded shadow">
                    <div class="card-header">
                        Merubah Barang
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="update()">
                            <div class="mb-3">
                                <label for="" class="form-label">Nama</label>
                                <input type="text" class="form-control" v-model="barang.nama_b">
                                <div v-if="validation.nama_b" class="text-danger">
                                    {{ validation.nama_b[0] }}
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Lokasi</label>
                                <input type="text" class="form-control" v-model="barang.lokasi">
                                <div v-if="validation.lokasi" class="text-danger">
                                    {{ validation.lokasi[0] }}
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Stok</label>
                                <input type="number" class="form-control" v-model="barang.stok">
                                <div v-if="validation.stok" class="text-danger">
                                    {{ validation.stok[0] }}

                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Satuan</label>
                                <input type="text" class="form-control" v-model="barang.satuan">
                                <div v-if="validation.satuan" class="text-danger">
                                    {{ validation.satuan[0] }}
                                </div>
                            </div>
                            <button class="btn btn-outline-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'

export default {
    setup() {
        let barang = reactive({
            nama_b: '',
            lokasi: '',
            stok: '',
            satuan: '',
        });

        const validation = ref([]);

        const router = useRouter();
        const route = useRoute();

        onMounted(() => {
            axios.get(`http://127.0.0.1:8000/api/barang/${route.params.id}`)
            .then((result) => {
                barang.nama_b = result.data.data.nama_b
                barang.lokasi = result.data.data.lokasi
                barang.stok = result.data.data.stok
                barang.satuan = result.data.data.satuan
            }).catch((err) => {
                console.log(err.response.data)
            })
        });

        function update() {
            axios.put(
                `http://127.0.0.1:8000/api/barang/${route.params.id}`,
                barang
            )
            .then(() => {
                router.push({
                    name: 'barang.index'
                });
            }).catch((err) => {
                validation.value = err.response.data
            })
        }

        return {
            barang,
            validation,
            router,
            update
        }

    }

}
</script>