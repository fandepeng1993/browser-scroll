<template>
  <div class="test1">
    <scroll class="scroll1" ref="scroll1">
        <div>
          <ul style="height: 3000px">
            <li v-for="n in 100" style="height: 30px" v-text="n.toString()"></li>
          </ul>
        </div>
    </scroll>
  </div>
</template>
<script type="text/ecmascript-6">
  import Scroll from './scroll.vue'
  export default {
    data() {
      return {}
    },
    mounted(){
      //console.log('11111111111111')
      this.$refs.scroll1.refresh()
    },
    activated(){
      //console.log(111111)
      this.$refs.scroll1.refresh()
    },

    components:{
      Scroll
    }
  }
</script>
<style>
.test1{
  background-color: seagreen;
  position: fixed;
  top: 40px;
  width: 100%;
  bottom: 0px;
}
  .scroll1{
    overflow: hidden;
    height: 100%;
  }
</style>
