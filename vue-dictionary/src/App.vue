<template>
  <div id="app">
  <!--   <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="dropdown">
      <button @click="dropdownClick()" class="dropbtn">Themes</button>
        <div id="myDropdown" class="dropdown-content">
        <button @click="toTheme('warm')">Warm</button>
        <button @click="toTheme('cool')">Cool</button>
        <button @click="toTheme('earth')">Earth</button>
        <button @click="toTheme('grey')">Greyscale</button>
        <button @click="toTheme('white')">White</button>
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
