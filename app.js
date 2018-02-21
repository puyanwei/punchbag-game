new Vue({
  el: "#app",
  data: {
    health: 100,
    ended: false
  },
  methods: {
    punch: function() {
      this.health -= 10;
      if (this.health <= 0) {
        this.ended = true;
      }
    },
    restart: function() {
      this.health = 100;
      this.ended = false;
    },
    playSound: function() {
      var audio = new Audio(require("/assets/sounds/punch.mp3"));
      audio.play();
      console.log("issit playing?");
    }
  },
  computed: {}
});
