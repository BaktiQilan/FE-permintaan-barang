<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-8">
                <router-link 
                    :to="{ name: 'pegawai.index' }"
                        class = "btn btn-primary btn-sm rounded shadow mb-3"
                >Back</router-link>

                <div class="card rounded shadow">
                    <div class="card-header">
                        Memasukan pegawai
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="store()">
                            <div class="mb-3">
                                <label for="" class="form-label">Nik</label>
                                <input type="number" class="form-control" v-model="pegawai.nik">
                                <div v-if="validation.nik" class="text-danger">
                                    {{ validation.nik[0] }}
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Nama</label>
                                <input type="text" class="form-control" v-model="pegawai.nama_p">
                                <div v-if="validation.nama_p" class="text-danger">
                                    {{ validation.nama_p[0] }}
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Departemen</label>
                                <input type="text" class="form-control" v-model="pegawai.departemen">
                                <div v-if="validation.departemen" class="text-danger">
                                    {{ validation.departemen[0] }}

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
        const pegawai = reactive({
            nik: '',
            nama_p: '',
            stok: '',
        });

        const validation = ref([]);

        const router = useRouter();

        function store() {
            axios.post(
                'http://127.0.0.1:8000/api/pegawai',
                pegawai
            )
            .then(() => {
                router.push({
                    name: 'pegawai.index'
                });
            }).catch((err) => {
                validation.value = err.response.data
            })
        }

        return {
            pegawai,
            validation,
            router,
            store
        }

    }

}
</script>