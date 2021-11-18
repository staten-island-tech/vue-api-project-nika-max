<template>
  <div>
      <h1>TEST</h1>
      <ul class="word-table">
        <li class="word-list-item" v-for="word in words" :key="word.name">{{ word.name }}</li>
      </ul>

  </div>
</template>

<script>
export default {
    name: "WordList",
    data(){
      return{
        words:["hello"]
      };
    },
    props: ["word"],
    created: function (){
      this.fetchData();
    },
    methods: {
      fetchData: async function(){
        try{
          const result = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${this.words}`
          );
          const data = await result.json();
          console.log(data);
          this.words = data.reults;
        } catch (error){
          alert(error);
        }
      }
    },  
};
</script>

<style>

</style>