<template>
    <header id="site_header">
        <nav class="navbar navbar-expand-md">
            <div class="container d-flex justify-content-bet align-items-center px-5 px-md-0">
                <div class="logo fs-1"><a href="/" class="nav_link">ZM</a></div>
                <div class="nav_menu_button d-md-none d-block" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="navbar-nav collapse navbar-collapse align-items-center" id="collapsibleNavId">
                    <ul class="navbar-nav me-auto me-md-0 ms-md-auto mt-lg-0">
                        <li class="nav-item">
                            <!-- <a class="nav_link px-4" href="#">home</a> -->
                            <router-link class="nav_link px-4" :to="{ name: 'home' }">
                                <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">home</span>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav_link px-4" :to="{ name: 'about' }">
                                <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">about</span>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav_link px-4" :to="{ name: 'contacts' }">
                                <span data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">contacts</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <!-- /#site_header -->
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>