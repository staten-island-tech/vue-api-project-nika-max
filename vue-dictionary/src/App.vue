<template>
  <div id="app">
  <!--   <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="dropdown">
      <button @click="dropdownClick()" class="dropbtn"></button>
        <div id="myDropdown" class="dropdown-content">
        <button class="red" @click="toTheme('Red')">Red</button>
        <button class="orange" @click="toTheme('Orange')">Orange</button>
        <button class="yellow" @click="toTheme('Yellow')">Yellow</button>
        <button class="green" @click="toTheme('Green')">Green</button>
        <button class="blue" @click="toTheme('Blue')">Blue</button>
        <button class="indigo" @click="toTheme('Indigo')">Indigo</button>
        <button class="violet" @click="toTheme('Violet')">Violet</button>
        <button class="white" @click="toTheme('White')">White</button>
        <button class="black" @click="toTheme('Black')">Black</button>
  </div>
</div>
    <router-view />
  </div>
</template>

<script>
export default{
  methods: {
  dropdownClick() {
      document.getElementById("myDropdown").classList.toggle("show");
      
  },
  toTheme(theme) {
      document.documentElement.setAttribute("theme", theme);
  },
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

a {
    font-weight: bold;
    color: #2c3e50;

&.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
