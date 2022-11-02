<template>
  <div
    class="container mx-auto max-w-lg max-w-xl pt-8 min-h-screen"
    style="max-width: 370px"
  >
    <div
      class="container rounded-[20px] drop-shadow-md"
      :class="'bg-' + pokemonColor + '/70'"
      data-aos="fade-up"
    >
      <NuxtLink to="/" class="text-2xl text-white ml-3">←</NuxtLink>
      <!-- Header -->
      <div class="flex pl-3">
        <div style="width: 150px" data-aos="zoom-in">
          <img
            :src="pokemon.sprites.other['official-artwork'].front_default"
            alt="Pokemon"
            class="block mr-3"
          />
        </div>
        <div class="flex flex-col pl-10" data-aos="fade-left">
          <span class="text-slate-800 font-semibold">{{ pokemonCode }}</span>
          <div class="font-semibold text-xl text-white mb-1">
            {{ pokemon.name | capitalize }}
          </div>
          <div class="flex gap-x-2">
            <span
              v-for="(type, index) in pokemon.types"
              :key="index"
              class="rounded text-white font-semibold text-xs py-1 px-2 w-min drop-shadow-lg"
              :class="'bg-' + baseColor[type.type.name]"
            >
              {{ type.type.name.toUpperCase() }}
            </span>
          </div>
        </div>
      </div>
      <!-- End Header -->
      <!-- Body -->
      <div
        class="rounded-[20px] bg-white p-5"
        data-aos="zoom-in-up"
        data-aos-delay="500"
      >
        <!-- Description -->
        <p class="text-gray-500 tracking-tight leading-tight">
          {{ description }}
        </p>
        <!-- End Description -->
        <!-- Statistics -->
        <div>
          <h2 class="text-xl mt-5 mb-3" :class="'text-' + pokemonColor">
            Statistics
          </h2>
          <div
            v-for="property in pokemon.stats"
            :key="property.stat.url"
            class="flex items-center relative"
          >
            <span class="mb-2 font-semibold">{{
              property.stat.name | capitalize
            }}</span>
            <div
              class="w-full rounded h-2 bg-gray-200 m-1 absolute"
              style="width: -webkit-fill-available; left: 10rem"
            >
              <div
                class="h-2 rounded"
                :style="'width:' + (property.base_stat * 100) / 255 + '%'"
                :class="'bg-' + pokemonColor"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'PokemonDetail',
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
  },
  data: function () {
    return {
      description: '',
      baseColor: {
        normal: 'purple-500',
        water: 'sky-500',
        grass: 'emerald-500',
        poison: 'violet-500',
        fire: 'orange-500',
        flying: 'teal-500',
        fighting: 'cyan-500',
        electric: 'amber-500',
        ground: 'yellow-700',
        rock: 'stone-500',
        psychic: 'red-500',
        ice: 'blue-500',
        bug: 'lime-500',
        ghost: 'stone-300',
        steel: 'grey-600',
        dragon: 'slate-800',
        dark: 'orange-900',
        fairy: 'orange-600',
      },
    }
  },
  async fetch() {
    this.description = await fetch(
      'https://pokeapi.co/api/v2/pokemon-species/' + this.pokemon.id
    )
      .then((res) => res.json())
      .then((res) => res.flavor_text_entries[6].flavor_text)
  },
  computed: {
    pokemonCode() {
      let pokemonCode = ''
      const pokemonId = this.pokemon.id.toString()
      if (pokemonId.length === 1) {
        pokemonCode = `#00${this.pokemon.id}`
      } else if (pokemonId.length === 2) {
        pokemonCode = `#0${this.pokemon.id}`
      } else {
        pokemonCode = `#${this.pokemon.id}`
      }

      return pokemonCode
    },
    pokemonColor() {
      return this.baseColor[this.pokemon.types[0].type.name]
    },
  },
  mounted() {
    AOS.init({})
  },
  methods: {},
}
</script>
