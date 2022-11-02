<template>
  <ul id="pokemon-list" class="flex flex-col min-h-screen">
    <li
      v-for="(pokemon, index) in pokemonList"
      :key="pokemon.order || pokemon.url"
      v-observe-visibility="{
        callback: (isVisible) => visibilityChanged(isVisible, index),
        intersection: {
          root: null,
          threshold: 0.5,
        },
      }"
      style="height: 5em"
    >
      <PokemonListItem
        v-if="pokemon.isVisible"
        :menu="menu"
        :pokemon="pokemon"
        data-aos="zoom-in"
        data-aos-once="true"
      ></PokemonListItem>
    </li>
  </ul>
</template>

<script>
import Vue from 'vue'
import { mapActions } from 'vuex'
import { ObserveVisibility } from 'vue-observe-visibility'
import { Sortable } from 'sortablejs'

Vue.directive('observe-visibility', ObserveVisibility)

export default {
  name: 'PokemonList',
  props: {
    pokemonList: {
      type: Array,
      required: true,
    },
  },
  data: function () {
    return {
      currentVisibleEntryId: '',
    }
  },
  computed: {
    menu() {
      return this.$route.name
    },
  },
  mounted() {
    const el = document.getElementById('pokemon-list')
    Sortable.create(el)
  },
  methods: {
    visibilityChanged(isVisible, pokemonIndex) {
      if (isVisible) this.setPokemonVisibility(pokemonIndex)
    },
    ...mapActions('pokemonList', ['setPokemonVisibility']),
  },
}
</script>
