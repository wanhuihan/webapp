

<template>
    <div>
        <button @click="show">Click me!</button>
        <div v-show="visible" title="Welcome">欢迎使用 </div>
        {{visible}}
    </div>
</template>


<script>

    
    export default {

      data () {
        return {
            visible: false
        }
      },
      methods: {
          show: function () {
              this.visible = !this.visible;
          }
      }
    }

</script>
