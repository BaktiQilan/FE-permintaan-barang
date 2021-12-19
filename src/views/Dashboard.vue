<template>
    <main class="container">
        <div class="container my-5">
            <div class="row justify-content-center">
                <div class="card rounded shadow">
                    <div class="card-header">
                        List Permintaan Barang
                    </div>
                    <div class="card-body">
                        <form class="row g-3">
                            <div class="col-md-4">
                                <label for="inputNik" class="form-label">
                                  NIK:
                                </label>
                                <v-select :options="pegawai"></v-select>
                            </div>
                            <div class="col-md-4">
                                <label for="inputNama" class="form-label">Nama</label>
                                <input type="text" class="form-control" id="inputNama" disabled>
                            </div>
                            <div class="col-md-4">
                                <label for="inputDepartemen" class="form-label">Departemen</label>
                                <input type="text" class="form-control" id="inputDepartemen" disabled>
                            </div>
                            <div class="col-md-4">
                                <label for="inputDate" class="form-label">Tanggal Permintaan</label>
                                <input type="date" class="form-control" id="inputDate">
                            </div>
                            <div class="col-12">
                                <label for="d_barang" class="form-label">Daftar Barang</label>
                                <table class="table" id="d_barang">
                                  <thead>
                                    <tr>
                                      <th scope="col">#</th>
                                      <th scope="col">Barang</th>
                                      <th scope="col">Lokasi</th>
                                      <th scope="col">Tersedia</th>
                                      <th scope="col">Kuantiti</th>
                                      <th scope="col">Satuan</th>
                                      <th scope="col">Keterangan</th>
                                      <th scope="col">Status</th>
                                      <th scope="col">*</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <th scope="row">1</th>
                                      <td>
                                        <v-select :options="barang"></v-select>
                                      </td>
                                      <td>
                                        <input type="text" class="form-control" disabled>
                                      </td>
                                      <td>
                                        <input type="text" class="form-control" disabled>
                                      </td>
                                      <td>
                                        <input type="text" class="form-control" >
                                      </td>
                                      <td>
                                        <input type="text" class="form-control" disabled>                                        
                                      </td>
                                      <td>
                                        <input type="text" class="form-control" >
                                      </td>
                                      <td>
                                        <span class="badge bg-info text-dark">Info</span>
                                      </td>
                                      <td>X</td>
                                    </tr>
                                  </tbody>
                                </table>
                                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                  <button class="btn btn-primary">Add</button>
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main><!-- /.container -->
</template>

<script>
import { reactive, ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'

export default {
  setup () {
    return {
      inputs: [{
        name: '',
        party: ''
      }]
    }
  },

  methods: {
    add () {
      this.inputs.push({
        name: '',
        party: ''
      })
      console.log(this.inputs)
    },

    remove (index) {
      this.inputs.splice(index, 1)
    },

    addCandidate () {
      axios
        .post('/candidates', {
          my_prop_name: JSON.stringify(this.inputs)
        })
        .then(response => {})
        .catch(error => {})
    }
  }
}
</script>