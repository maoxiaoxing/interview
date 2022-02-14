<template>
  <div>
    <p>app1</p>
    <!-- <Message message="hello" /> -->
    <Header name="app2" />
  </div>
</template>

<script>
  // import { mount } from 'common/Index'
  import { mount } from "marketing/MarketingApp"
  import Header from 'app1/Header'

  export default {
    components: {
      // Message,
      Header,
    },
    data() {
      return {

      }
    },
    mounted() {
      // console.log(mount)
    }
  }
</script>

