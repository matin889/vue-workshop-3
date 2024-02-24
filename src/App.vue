<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <header>
      <nav>
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
          <li><RouterLink to="/movies">Movies</RouterLink></li>
        </ul>
      </nav>
    </header>

    <Main>
      <RouterView />
    </Main>

    <footer>
      <p>Copyrights@2023</p>
    </footer>
  </div>
</template>

<style scoped>
.container {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: center;
}

header,
footer {
  background-color: #34495e;
  color: #fff;
  padding: 1rem 0;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav ul li {
  display: inline-block;
  margin-right: 15px;
}

nav ul li a {
  text-decoration: none;
  color: white;
}
</style>
