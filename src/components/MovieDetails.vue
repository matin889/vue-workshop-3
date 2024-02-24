<template>
  <div v-if="movie">
    <h1>{{ movie.title }}</h1>
    <p>Category: {{ movie.genre }}</p>
    <p>Main actor: {{ movie.actors[0] }}</p>
    <p>Director: {{ movie.director }}</p>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

type Movie = {
  id: number
  title: string
  genre: string
  actors: string
  director: string
}

export default defineComponent({
  name: 'MovieDetails',
  data() {
    return {
      movie: null as Movie | null
    }
  },
  methods: {
    async fetchMovies(movieId: number) {
      try {
        const response = await fetch(`http://localhost:3000/movies/${movieId}`)
        const data = await response.json()
        console.log('Response:', data) // Log the response data
        this.movie = data
      } catch (error) {
        console.error(error)
      }
    }
  },
  mounted() {
    console.log('MovieList mounted')
  },
  created() {
    const movieId = Number(this.$route.params.id)
    this.fetchMovies(movieId)
  }
})
</script>
