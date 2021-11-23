<template>
  <div>
      <h2>{{ word }}</h2>
      <p v-for="meaning in meanings" :key="meaning.id">
        <span> {{ meaning.partOfSpeech }}: </span>
        <span> {{ meaning.definitions[0].definition }} </span>
        <br> 
        <span> Example: {{ meaning.definitions[0].example }} </span>
        <br>
        <span> Synonyms: 
          <span v-for="synonym in meaning.definitions[0].synonyms" :key="synonym.id">
            {{ synonym }},
          </span>
        </span>
      </p>
      <button @click="BackToHome()">Back to Home</button>

  </div>
</template>

<script>
export default {
    name: "SynonymResult",
    data(){
      return{
        words:[],
        meanings: [],
        synonym: []
      };
    },
    props: ["word"],

    created () {
      this.fetchData()
    },

    methods: {
      fetchData: async function(){
        try{
          const result = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${this.word}`
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
      BackToHome(){
        this.$router.push('/'); 
      }
    }
   /* fetchSynonym: async function(){
        try{
          const result = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${this.synonym}`
          );
          const data = await result.json();
          console.log(data)
          console.log(data[0].meanings);
          this.word = data[0].word;
          this.meanings = data[0].meanings;
        } catch (error){
          alert(error);
        }
    }, */ 
};
</script>

<style>

</style>