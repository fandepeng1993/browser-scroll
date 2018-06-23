<template>
    <div class="test1in">
      <h1>test1in</h1>
      <h2>1</h2>
      <scroll class="scroll1" ref="scroll2i">
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
    name: "test1in",
    created(){
      console.log(123)
    },
    mounted(){
      alert(123)
      this.$refs.scroll2i.refresh()
    },
    activated(){
      this.$refs.scroll2i.refresh()
    },
    components:{
      Scroll
    }
  }
</script>

<style scoped>
.test1in{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  background-color: chartreuse;
}
.scroll2i{
  overflow: hidden;
  height: 100%;
}
</style>
