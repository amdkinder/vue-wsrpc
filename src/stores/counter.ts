import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const data = ref<number[]>([])
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  const fetch = () => {
    data.value = [1,2,3]
  }
  const reFetch = () => {
    data.value = [1,2,3,4,5,6,7,8]
    console.log('data: ', data.value)
  }

  return { count, doubleCount, increment, data, fetch, reFetch }
})
