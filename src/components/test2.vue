<template>
  <div class="test2">
    <scroll class="scroll2" ref="scroll2">
      <div>
        <ul style="height: 3000px">
          <li v-for="n in 100" style="height: 30px" v-text="n.toString()" @click.prevent.stop="test2page(n)"></li>
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
      this.$refs.scroll2.refresh()
    },
    activated(){
      this.$refs.scroll2.refresh()
    },
    methods:{
      test2page(n){
        this.$router.push({path:`/test2out/${n}`})
      }
    },
    components:{
      Scroll
    }
  }
</script>
<style>
.test2{
  background-color: skyblue;
  position: fixed;
  top: 40px;
  width: 100%;
  bottom: 0px;
}
  .scroll2{
    overflow: hidden;
    height: 100%;
  }
</style>
