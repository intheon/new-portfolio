<template>
  <button :disabled="isDisabled" :class=" { 'disabled-button': isDisabled } ">
    <div v-if="!isLoading">{{ buttonText }}</div>
    <div v-else><loading-dots></loading-dots></div>
  </button>
</template>

<script>
import LoadingDots from "~/components/loading/Dots.vue";

export default {
  components: {
    LoadingDots
  },
  props: {
    isLoading: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: true,
    },
    buttonText: {
      type: String,
      default: "Update"
    }
  }
}
</script>

<style lang="css">
</style>
