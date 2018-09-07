import Vue from 'vue'
import HelloComponent from './components/Hello.vue'

var app = new Vue({
  el: '#app',
  template: `
    <div>
      Name: <input type="text" v-model="name">
      <hello-component :name="name" :initialEnthusiasm="5" />
    </div>
  `,
  data: {
    name: 'World'
  },
  components: {
    HelloComponent
  }
})