<template>
  <div class="dictionary"> 
    <WordSearch/>
  </div>
</template>

<script>
import WordSearch from "../components/WordSearch.vue"

export default {
  name: "Dictionary",
  components: {
    WordSearch,
  },
};
</script>
