<template>
  <div class="relative h-10">
    <div
      class="bg-white absolute top-5 right-0 flex flex-row pl-28 w-full pb-2 justify-between relative rounded-lg"
    >
      <div class="flex flex-col">
        <span class="opacity-25">#{{ pokemon.index }}</span>
        <span class="font-medium text-lg">{{ pokemon.name | capitalize }}</span>
      </div>
      <div class="flex absolute top-2 right-3">
        <button
          v-if="menu === 'index'"
          type="button"
          @click="add"
          class="border border-teal-500 bg-teal-500 text-white rounded-md px-2 py-0.3 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline"
        >
          Add
        </button>
        <button
          v-else
          type="button"
          @click="remove"
          class="border border-yellow-500 bg-yellow-500 text-white rounded-md px-4 py-0.3 m-2 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
        >
          Remove
        </button>
        <button
          v-if="menu === 'index'"
          type="button"
          class="border hover:border-gray-200 text-gray-700 rounded-md px-2 py-0.3 m-2 transition duration-500 ease select-none hover:bg-gray-200 focus:outline-none focus:shadow-outline"
        >
          <NuxtLink :to="`/${pokemon.name}`">About</NuxtLink>
        </button>
      </div>
    </div>
    <img
      class="absolute top-0 w-20"
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.index}.png`"
      alt="Pokemon"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'PokemonListItem',
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
  },
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
    menu: {
      type: String,
      default: 'index',
    },
  },
  methods: {
    add() {
      this.addPokemon({ ...this.pokemon, order: this.countOrder })
      this.addOrder()
    },
    remove() {
      this.removePokemon(this.pokemon.order)
    },
    ...mapActions('myTeam', ['addPokemon']),
    ...mapActions('myTeam', ['removePokemon']),
    ...mapActions('myTeam', ['addOrder']),
  },
}
</script>
