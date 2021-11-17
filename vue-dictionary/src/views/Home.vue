<template>
  <div class="home"> 
    <WordList/>
  </div>
</template>

<script>
import WordList from "../components/WordList.vue"

export default {
  name: "Home",
  components: {
    WordList,
  },
};
</script>
