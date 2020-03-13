
<template lang="pug">
//- ========================== Template ===========================
.header Welcome  {{bundler}}
  input(type="search" placeholder="Search")

</template>




<script lang="ts">
// ========================== Script ===============================
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      bundler: `Vue`
    };
  }
});
</script>




<style lang="scss" scoped>
// ========================== Style ================================
.header {
  font: 500 40px sans-serif;
  padding: 15px 5px;
  background-color: #000000;
  border: 10px solid #1ac5b7;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  width: 300px;
  cursor: pointer;
  user-select: none;
  transition: 0.2s;
  margin: 20px;

  // Active
  &:active {
    transform: scale(0.75);
  }
}
</style>







