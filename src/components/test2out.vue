<template>
    <div class="test2out">
      <h1>test2out</h1>
      <h2>wee</h2>
      <scroll class="scroll1" ref="scroll2o">
        <div>
          <ul style="height: 3000px">
            <li v-for="n in 100" style="height: 30px" v-text="n.toString()"></li>
          </ul>
        </div>
      </scroll>
    </div>
</template>

<script>
  import Scroll from './scroll.vue'
  export default {
    name: "test2out",
    created() {
      console.log(123)
    },
    mounted(){
      alert(123)
      this.$refs.scroll2o.refresh()
    },
    activated(){
      this.$refs.scroll2o.refresh()
    },
    components:{
      Scroll
    }
  }
</script>

<style scoped>
  .test2out{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    background-color: hotpink;
  }
  .scroll2o{
    overflow: hidden;
    height: 100%;
  }
</style>
