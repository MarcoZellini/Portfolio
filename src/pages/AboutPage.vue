<script>

export default {
}

</script>

<template>
    <div class="container d-flex flex-column justify-content-center align-items-center px-3">
        <h1>
            Hi, I'm <span class="key_words">Marco Zellini</span>, a Jr. Fullstack Web Developer from Pesaro.
            <br><br>Even if I'm a beginner, I have a <span class="key_words">strong passion</span>
            for this world and I can create incredible things through the <span class="key_words">code</span> .
        </h1>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;

* {
    font-weight: 300;
    text-align: center;
}

.key_words {
    text-transform: uppercase;
    color: $pf-accent;
    transition: all .3s ease;

    &:hover {
        text-shadow: 1px 1px 7px $pf-accent;
    }
}
</style>
