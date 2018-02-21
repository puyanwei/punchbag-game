# Punchbag Game

Click the punch button to reduce the life of the punching bag.

![screen shot 2018-02-21 at 13 02 05](https://user-images.githubusercontent.com/14803518/36481399-a13fcd4e-1707-11e8-89ce-8d3244b0ecce.png)

This game is created from [tutorial #13](https://www.youtube.com/watch?v=WjfpQlVem-8) of which I am following in order to learn vue.js. I have added extra features to this game adding a 60's style batman random word generator, sounds, and css styling.

## Tech Stack

* HTML
* Javascript
* CSS
* Vue.js

## Installation

```
git clone git@github.com:puyanwei/punchbag-game.git
npm install
npm start
```

Go to your browser go to http://localhost:8080

## Features

* Punch button reduces the life of the punchbag.
* The life of the punchbag is visually represented by a lifebar, which reduces when punched.
* With each punch, a sound is played and a word is chosen randomly from the array.
* When the life is depleted, a sound will play to signify the fainting of your opponent. The punch button will disappear automatically.
* The reset button will reset the life bar back to maximum health. The random word will be removed.
