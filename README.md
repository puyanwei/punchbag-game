# Punchbag Game

Click the punch button to reduce the life of the punching bag.

![screen shot 2018-02-21 at 13 02 05](https://user-images.githubusercontent.com/14803518/36481399-a13fcd4e-1707-11e8-89ce-8d3244b0ecce.png)

This game is created from [tutorial #13](https://www.youtube.com/watch?v=WjfpQlVem-8) of the [NetNinja's vue.js](https://www.youtube.com/watch?v=5LYrN_cAJoA&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa) series. I have added extra features to this game adding a 60's style batman random word generator, sounds, and css styling.

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
* When the life is depleted, a sound will play to signify the fainting of your opponent. The punch button will disappear automatically, and the image will change.
* The reset button will reset the life bar back to maximum health. The random word will be removed.

![rigidpitifuldragonfly-size_restricted](https://user-images.githubusercontent.com/14803518/36483292-a2fbd69a-170d-11e8-8216-86ec970881f3.gif)

## Process

I have found the process quite enjoyable and it is interesting to see the comparisons between React and Vue. Vue seems a lot more readable and everything is pure Javascript so there is no need to worry about incorrect syntax. I have found it pretty satisfying to have the ideas of adding sounds, and the 60's batman fight scene onomatopoeias into my app.

I am interested in seeing how I can test this, but since I am spiking by following the tutorial I may complete that first and come back to this later on.
