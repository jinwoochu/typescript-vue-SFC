<template>
  <div>
    <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>  
</template>

<style scoped>
.greeting {
    font-size: 50px;
}
</style>

<script lang="ts">
// import Hello from './Hello'
// export default Hello

import Vue from "vue"
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class Hello extends Vue {
  // props
  @Prop() name: any
  @Prop() initialEnthusiasm: any

  // data

  enthusiasm: number = this.initialEnthusiasm

  // computed

  get exclamationMarks(): string {
    return Array(this.enthusiasm + 1).join('!')
  }

  // methods

  increment(): void {
    this.enthusiasm++;
  }

  decrement(): void {
    if (this.enthusiasm > 1) {
      this.enthusiasm--
    }
  }
}
</script>


