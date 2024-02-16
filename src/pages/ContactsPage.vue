<script>

export default {
}

</script>

<template>
    <div class="container d-flex flex-column justify-content-center align-items-center px-3">
        <h4 class="mb-5">Send me an email using this form!</h4>
        <form action="" method="post" class="row ">
            <div class="form-floating mb-3">
                <input type="name" class="form-control" name="name" id="name" placeholder="">
                <label for="name">name</label>
            </div>
            <div class="form-floating mb-3">
                <input type="lastname" class="form-control" name="lastname" id="lastname" placeholder="">
                <label for="lastname">last name</label>
            </div>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" name="email" id="email" placeholder="">
                <label for="email">email</label>
            </div>
            <div class="form-floating mb-3">
                <input type="phone" class="form-control" name="phone" id="phone" placeholder="">
                <label for="phone">phone</label>
            </div>
            <div class="form-floating mb-3">
                <textarea class="form-control" placeholder="Leave a message here" name="message" id="message"
                    style="height: 100px;"></textarea>
                <label for="message">Message</label>
            </div>
            <div>
                <button type="button" class="form_button my-3">Invia</button>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;

label {
    text-transform: capitalize;
    font-size: .9rem;
    margin-left: .5rem;
}

.form-control {
    background-color: transparent;
    border: 0;
    border-bottom: 1px solid $pf-light;

    &:focus {
        background-color: transparent;
        box-shadow: 0 0 20px 0rem $pf-light;
    }

    &:focus+label {
        color: $pf-light;
        font-size: .8rem;

        margin-left: .5rem;

        &::after {
            background-color: transparent;
        }
    }


}

.form_button {
    background-color: $pf-light;
    border: 0;
    padding: .25rem .9rem;
    margin: 0 auto;
    display: block;
    transition: all .2s ease;

    &:hover {
        background-color: $pf-accent;
    }
}
</style>
