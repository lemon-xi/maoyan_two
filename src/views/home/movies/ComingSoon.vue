<template>
  <div class="movie-list">
    <div>most ss</div>
    <MovieList :movie-list="movieList"></MovieList>
  </div>
</template>

<script>
import MovieList from "@/components/MovieList";
export default {
  props:{
    movieList:{
      type:Array
    }
  },
  components: {
    MovieList
  }
}
</script>

<style>

</style>
