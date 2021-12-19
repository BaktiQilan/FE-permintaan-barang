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
                        Memasukan Barang
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="store()">
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
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

export default {
    setup() {
        const barang = reactive({
            nama_b: '',
            lokasi: '',
            stok: '',
            satuan: ''
        });

        const validation = ref([]);

        const router = useRouter();

        function store() {
            axios.post(
                'http://127.0.0.1:8000/api/barang',
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
            store
        }

    }

}
</script>