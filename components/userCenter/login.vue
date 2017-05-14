

<!--
<template>

    <div class="">
        hello owlrd;
    </div>
</template> -->


<template >

    <div >

        <mu-text-field hintText="请输入用户名"/>
        <mu-text-field hintText="请输入用户名"/>

          <mu-paper class="demo-paper" circle :zDepth="1" />
          <mu-paper class="demo-paper" circle :zDepth="2" />
          <mu-paper class="demo-paper" circle :zDepth="3" />
          <mu-paper class="demo-paper" circle :zDepth="4" />
          <mu-paper class="demo-paper" circle :zDepth="5" />

    </div>
</template>

<script type="text/javascript">

    export default {

        data () {

            return {
                // value: '1111'
            }
        }
    }
</script>
<style  media="screen" lang="scss" scoped>
.demo-paper {
display: inline-block;
height: 100px;
width: 100px;
margin: 20px;
text-align: center;
}
</style>
