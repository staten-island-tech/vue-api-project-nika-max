<template>
  <div>
      <h1>NIKA'S RAINBOW DICTIONARY</h1>
      <div class="word-search">
        <form @submit.prevent="fetchData">
            <input type="text" placeholder="Search a word..." v-model="searchedWord">
            <input type="submit"> 
        </form>
      </div>
      <h2>{{ word }}</h2>
        <p class="container" v-for="meaning in meanings" :key="meaning.id">
        <span class="part-of-speech"> {{ meaning.partOfSpeech }}: </span>
        <span class="definition"> {{ meaning.definitions[0].definition }} </span>
        <span> <h5></h5> </span>
        <span class="example"> <b>EXAMPLE:</b> {{ meaning.definitions[0].example }}. </span>
        <span> <h5></h5> </span>
        <span class="synonym"> <b>SYNONYMS:</b> 
          <span v-for="synonym in meaning.definitions[0].synonyms" :key="synonym.id">
          <router-link :to="synonymPath" class="link"> {{ synonym }},   </router-link>
          </span>
        </span>
      </p>
  </div>
</template>

<script>
export default {
    name: "WordSearch",
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
          alert("NOT A WORD. TRY AGAIN");
        }
      },
    
   /*  Hyperlink(){
        this.$router.push('/synonym'); 
      } */
    },

    computed: {
      synonymPath: function() {
        return `/synonym/${this.word}`;
      },
    },
  
};
</script>

<style>

</style>