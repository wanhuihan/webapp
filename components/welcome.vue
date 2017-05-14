

<template id="">

    <div class="welcome" >

        <topBar></topBar>
        <login></login>

        <register></register>

        <footNav></footNav>
    </div>
</template>

<script type="text/javascript">

    var login = require("./userCenter/login");

    var headerTop = require("./public/header");

    var footerNav = require("./public/footer")

    var register = require("./userCenter/register");

    import "./welcome.scss";

    export default  {

        components: {

            'login': login,

            'register': register,

            'topBar': headerTop,

            'footNav': footerNav
        }
    }
</script>

<style media="screen">

</style>
