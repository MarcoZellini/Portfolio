<template>
    <footer id="site_footer">
        <div class="container px-3 h-100">
            <div
                class="d-flex flex-column flex-md-row justify-content-evenly justify-content-md-between align-items-center h-100">
                <div>
                    <a href="https://www.linkedin.com/in/marco-zellini/" target="_blank"
                        class="fa_brand_link mx-2"><font-awesome-icon class="fa_brand" :icon="['fab', 'linkedin']"
                            size="xl" /></a>
                    <a href="https://github.com/MarcoZellini" target="_blank" class="fa_brand_link mx-2"><font-awesome-icon
                            class="fa_brand" :icon="['fab', 'github']" size="xl" /></a>
                </div>
                <div>
                    <small class="copyright">&copy; Zellini Marco 2024</small>
                </div>
            </div>
        </div>
    </footer>
    <!-- /#site_footer -->
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.copyright {
    font-size: .8rem;
}
</style>