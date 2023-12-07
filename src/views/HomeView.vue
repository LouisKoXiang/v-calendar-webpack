<template>
  <div class="home">
    <VCalendar ref="calendar" :masks="{ title: 'MMM YYYY年' }" borderless />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView'
})
</script>
