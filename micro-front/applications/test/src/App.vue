<template>
  <div>
    <p>app1</p>
    <!-- <Message message="hello" /> -->
  </div>
</template>

<script>
  // import { mount } from 'common/Index'
  import { mount } from "marketing/MarketingApp"

  export default {
    components: {
      // Message,
    },
    data() {
      return {

      }
    },
    mounted() {
      console.log(mount)
    }
  }
</script>

