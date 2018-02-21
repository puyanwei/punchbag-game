new Vue({
  el: "#app",
  data: {
    health: 100,
    ended: false,
    batman: [
      "AIEEE!!!!",
      "AIIEEE!!!!",
      "ARRGH!!!!",
      "AWK!!!!",
      "AWKKKKKK!!!!",
      "BAM!!!!",
      "BANG!!!!",
      "BANG - ETH!!!!",
      "BIFF!!!!",
      "BLOOP!!!!",
      "BLURP!!!!",
      "BOFF!!!!",
      "BONK!!!!",
      "CLANK!!!!",
      "CLANK - EST!!!!",
      "CLASH!!!!",
      "CLUNK!!!!",
      "CLUNK - ETH!!!!",
      "CRRAACK!!!!",
      "CRASH!!!!",
      "CRRAACK!!!!",
      "CRUNCH!!!!",
      "CRUNCH - ETH!!!!",
      "EEE - YOW!!!!",
      "FLRBBBBB!!!!",
      "GLIPP!!!!",
      "GLURPP!!!!",
      "KAPOW!!!!",
      "KAYO!!!!",
      "KER - SPLOOSH!!!!",
      "KERPLOP!!!!",
      "KLONK!!!!",
      "KLUNK!!!!",
      "KRUNCH!!!!",
      "OOOFF!!!!",
      "OOOOFF!!!!",
      "OUCH!!!!",
      "OUCH - ETH!!!!",
      "OWWW!!!!",
      "OW - ETH!!!!",
      "PAM!!!!",
      "PLOP!!!!",
      "POW!!!!",
      "POWIE!!!!",
      "QUNCKKK!!!!",
      "RAKKK!!!!",
      "RIP!!!!",
      "SLOSH!!!!",
      "SOCK!!!!",
      "SPLATS!!!!",
      "SPLATT!!!!",
      "SPLOOSH!!!!",
      "SWAAP!!!!",
      "SWISH!!!!",
      "SWOOSH!!!!",
      "THUNK!!!!",
      "THWACK!!!!",
      "THWACKE!!!!",
      "THWAPE!!!!",
      "THWAPP!!!!",
      "UGGH!!!!",
      "URKKK!!!!",
      "VRONK!!!!",
      "WHACK!!!!",
      "WHACK - ETH!!!!",
      "WHAM - ETH!!!!",
      "WHAMM!!!!",
      "WHAMMM!!!!",
      "WHAP!!!!",
      "Z - ZWAP!!!!",
      "ZAM!!!!",
      "ZAMM!!!!",
      "ZAMMM!!!!",
      "ZAP!!!!",
      "ZAP - ETH!!!!",
      "ZGRUPPP!!!!",
      "ZLONK!!!!",
      "ZLOPP!!!!",
      "ZLOTT!!!!",
      "ZOK!!!!",
      "ZOWIE!!!!",
      "ZWAPP!!!!",
      "ZZWAP!!!!",
      "ZZZZWAP!!!!",
      "ZZZZZWAP!!!!"
    ],
    chosenWord: ""
  },
  methods: {
    punch: function() {
      this.health -= 10;
      if (this.health <= 0) {
        this.ended = true;
        this.playKnockout();
      }
    },
    restart: function() {
      this.health = 100;
      this.ended = false;
      this.chosenWord = "";
    },
    playPunch: function() {
      var punch = new Audio("/assets/sounds/punch.mp3");
      punch.play();
    },
    playKnockout: function() {
      var knockout = new Audio("/assets/sounds/knockout.wav");
      var fainted = new Audio("/assets/sounds/fainted.mp3");
      fainted.play();
      knockout.play();
    },
    pickWords: function() {
      this.chosenWord = this.batman[
        Math.floor(Math.random() * this.batman.length)
      ];
    }
  },
  computed: {}
});
