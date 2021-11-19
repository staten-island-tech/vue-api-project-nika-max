<template>
  <div>
      <h1>TEST</h1>
      <ul class="word-search">
        <form @submit.prevent="fetchData">
            <input type="text" placeholder="Search a word..." v-model="searchedWord">
            <input type="submit"> 
        </form>
        <li class="word-list-item" v-for="word in words" :key="word.name">{{ word.name }}</li>
      </ul>

  </div>
</template>

<script>
export default {
    name: "WordList",
    data(){
      return{
        searchedWord:'',
        words:[]
      };
    },
    props: ["word"],
  
    methods: {
      fetchData: async function(){
        try{
          const result = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${this.searchedWord}`
          );
          const data = await result.json();
          console.log(data);
          this.words = data.results;
        } catch (error){
          alert(error);
        }
      }
    },  
};
</script>

<style>

</style>