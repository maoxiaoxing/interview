<template>
  <div>
    message
    {{ message }}
  </div>
</template>

<script>
  export default {
    props: {
      message: {
        type: String,
        default: ''
      }
    },
    data() {
      return {

      }
    }
  }
</script>

