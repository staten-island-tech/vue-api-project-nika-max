<template>
  <div>
      <h1>Nika's Dictionary</h1>
      <ul class="word-search">
        <form @submit.prevent="fetchData">
            <input type="text" placeholder="Search a word..." v-model="searchedWord">
            <input type="submit"> 
        </form>
        <li class="word-list-item" v-for="word in words" :key="word.name">{{ word.name }}</li>
      </ul>
      <h2>{{ word }}</h2>
      <p v-for="meaning in meanings" :key="meaning.id">
        <span> {{ meaning.partOfSpeech }}: </span>
        <span> {{ meaning.definitions[0].definition }} </span>
        <br> 
        <span> Example: {{ meaning.definitions[0].example }} </span>
        <br>
        <span> Synonyms: 
          <span @click="Hyperlink()" v-for="synonym in meaning.definitions[0].synonyms" :key="synonym.id">
            {{ synonym }},
          </span>
        </span>
      </p>

  </div>
</template>

<script>
export default {
    name: "WordList",
    data(){
      return{
        searchedWord:'',
        words:[],
        meanings: [],
        synonym: []
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
          console.log(data)
          console.log(data[0].meanings);
          this.word = data[0].word;
          this.meanings = data[0].meanings;

        } catch (error){
          alert(error);
        }
      },
      Hyperlink(){
        this.$router.push('/synonym'); 
      }
  }
};
</script>

<style>

</style>