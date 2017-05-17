

<template>
    <div class="welcome">

        <h2>This is welcome showing</h2>

    </div>
</template>

<script>

    setTimeout(function() {
        // VueRouter.push('/user/login');
        window.location.href = '#/user/login'

    }, 5000);

</script>

<style media="screen" lang="scss">

    html,body {
        width: 100%;
        height: 100%;
        #app {
            height: 100%;
            width: 100%;
        }
    }
</style>

<style lang="scss" media="screen" scoped>
    .welcome {

        height: 100%;
        background: #eee;

        h2 {
            margin: 0;
            padding: 0;
        }
    }
</style>
