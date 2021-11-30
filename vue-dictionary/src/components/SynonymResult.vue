<template>
  <div>
      <h1>NIKA'S RAINBOW DICTIONARY</h1>
      <h2>{{ word }}</h2>
      <p class="container" v-for="meaning in meanings" :key="meaning.id">
        <span class="part-of-speech"> {{ meaning.partOfSpeech }}: </span>
        <span class="definition"> {{ meaning.definitions[0].definition }} </span>
        <span> <h5></h5> </span>
        <span class="example"> <b>EXAMPLE:</b> {{ meaning.definitions[0].example }} </span>
        <span> <h5></h5> </span>
        <span class="synonym"> <b>SYNONYMS:</b> 
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
        word:[],
        meanings: [],
        synonym: []
      };
    },

    created () {
      this.fetchData()
    },

    methods: {
      fetchData: async function(){
        try{
          const result = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${this.$route.params.id}`
          );
          const data = await result.json();
          console.log(data);
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