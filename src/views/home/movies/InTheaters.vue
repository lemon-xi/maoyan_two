<template>
  <div class="movie-list">
    <MovieList :movie-list="movieList">hh</MovieList>
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

<style lang="stylus" scoped>
.movie-list
      flex 1
      overflow-y scroll
</style>
