<template>
  <nav
    class="flex items-center justify-between flex-wrap bg-teal-500 p-2 sticky top-0 z-50"
  >
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Pokédex</span>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        @click="setShow"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div
      v-show="show"
      class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
    >
      <div class="text-sm lg:flex-grow">
        <div
          :class="{
            'text-teal-200': active !== 'index',
            'text-white': active === 'index',
          }"
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4"
          @click="() => setActiveMenu('index')"
        >
          <NuxtLink :to="'/'">Home </NuxtLink>
        </div>
        <div
          class="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4"
          :class="{
            'text-teal-200': active !== 'myteam',
            'text-white': active === 'myteam',
          }"
          @click="() => setActiveMenu('myteam')"
        >
          <NuxtLink :to="'/myteam'">My Team </NuxtLink>
        </div>
        <div
          v-show="menu === 'index'"
          class="block mt-4 lg:inline-block lg:mt-0 mr-4"
        >
          <SearchBar />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data: function () {
    return {
      show: false,
      active: 'index',
    }
  },
  computed: {
    menu() {
      this.setActiveMenu(this.$route.name)
      return this.$route.name
    },
  },
  mounted() {
    const isMobileMode = window.innerWidth <= 1025
    if (!isMobileMode) this.setShow()
  },
  methods: {
    setShow() {
      this.show = !this.show
    },
    setActiveMenu(menu) {
      this.active = menu
    },
  },
}
</script>
