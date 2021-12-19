<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Abcd</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item">
                    <router-link :to="{name: 'dashboard'}" class="nav-link active">Dashboard</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'barang.index'}" class="nav-link">Barang</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'pegawai.index'}" class="nav-link">Pegawai</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'reqbarang.index'}" class="nav-link">Permintaan Barang</router-link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>