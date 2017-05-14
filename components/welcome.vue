

<template id="">

    <div class="welcome" >

        <login></login>

        <register></register>

    </div>
</template>

<script type="text/javascript">

    var login = require("./userCenter/login");

    var register = require("./userCenter/register");

    import "./welcome.scss";

    export default  {

        components: {

            'login': login,

            'register': register
        }
    }
</script>
