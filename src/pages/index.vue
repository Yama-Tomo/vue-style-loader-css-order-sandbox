<template>
  <span>{{title}}</span>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Index extends Vue {
  get title() {
    return 'hello world!';
  }
}
</script>
