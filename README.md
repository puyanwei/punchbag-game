# Punchbag Game

Click the punch button to reduce the life of the punching bag.

![punch-bag](https://user-images.githubusercontent.com/14803518/36499958-b659d818-173a-11e8-8331-a06ba115fd7d.gif)

This game is created from [tutorial #13](https://www.youtube.com/watch?v=WjfpQlVem-8) of the [NetNinja's vue.js](https://www.youtube.com/watch?v=5LYrN_cAJoA&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa) series. I have added extra features to this game adding a 60's style batman random word generator, sounds, and css styling.

https://punching-bag.herokuapp.com/

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

Go to your browser and go to http://localhost:8080

## Features

* Punch button reduces the life of the punchbag.
* The life of the punchbag is visually represented by a lifebar, which reduces when punched.
* With each punch, a sound is played and a word is chosen randomly from the array.
* When the life is depleted, a sound will play to signify the fainting of your opponent. The punch button will disappear automatically, and the image will change.
* The reset button will reset the life bar back to maximum health. A sound will play and the random word will be removed.

![rigidpitifuldragonfly-size_restricted](https://user-images.githubusercontent.com/14803518/36483292-a2fbd69a-170d-11e8-8216-86ec970881f3.gif)

## Process

I have found the process quite enjoyable and it is interesting to see the comparisons between React and Vue. Vue seems a lot more readable and everything is pure Javascript so there is no need to worry about incorrect syntax. I have found it pretty satisfying to have the ideas of adding sounds, and the 60's batman fight scene onomatopoeias into my app.

I am not quite sure if the loading of the assets done in the most efficient way. It seems that sometimes there is lag between the button press and the sound effect. There probably is a way of loading all the assets of the page first, before using them to reduce lag but I was unable to figure that out for now.

I am interested in seeing how I can test this, but since I am spiking by following the tutorial I may complete that first and come back to this later on.

I have blogged about the details of this web app in more detail [here](https://thep-log.blogspot.co.uk/2018/02/a-vue-to-view-punchbag-game.html)
