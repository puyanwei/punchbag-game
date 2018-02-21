new Vue({
  el: "#app",
  data: {
    health: 100
  },
  methods: {
    punch: () => {
      this.health -= 10;
    },
    restart: () => {
      this.health = 100;
    }
  },
  computed: {}
});
