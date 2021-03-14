# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Madison Sarmiento**

Time spent: **6** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
! https://github.com/mady-dx/Light-and-Sound-Game/blob/main/LightAndSoundGame_Walkthrough.gif


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

For this project I used w3schools.com to assist with both choosing colors for the buttons, formatting the page, and understanding arrays and how to edit them so that I can create a randomized pattern for them. 

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

One of the main challenges I faced was implementing the random pattern generator. The main reason I  struggled with this part was because of how arrays worked in JavaScript compared to how Java worked. To create a random array in java, I would usually import the Math.random class into the code, create an array of the size I wanted, and then use a for-loop that ran for the length of the array and send the random numbers into the array with a call like a[i] = r.nextInt(9) +1 (where a would be the array I created, i is the index of the array and then r the name of my Random object which gets random integers between 1-9). However, in JavaScript, I discovered that arrays had different properties in comparison to the Java arrays and the Math.random class was different form the Random class. To solve this, I decided to look up how the array class in JavaScript worked and specifically what call would allow me to add data to the array. Interestingly enough, I found that there were 2 ways: the way I prefer (a[i]) and then a.push(<element>). Going over it more I found that a.push(<element>) was the preferred way as it keeps me from losing some methods like a.pop() and a.splice(). However, after some debating, I decided to stick with a[i] since I would only be needing this array for the pattern of the game and would not be splicing or editing the array more than once at the start of the game per game. Additionally, for the Math.random class, I learned that the bounds returned to the call is in the interval [0,1) meaning that additional math and steps would be needed to get the numbers I wanted. So, I multiplied the number I get by 10 and then get the floor value of them so that the numbers would be rounded down so I would not be able to get 10. I also put an if/else statement within the for-loop since 0 is included in the interval so that when I get a 0, the pattern turns it into a 1 so that my game does not crash.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

  After this small taste of web development, I am curious to how much this relates to app development. While taking the Android University Course through Codepath, I’ve been noticing how much the UI can be editable in .xml files so I’m curious to see how CSS, JavaScript, and html can be combined together to get a similar result as if I was (for example) coding a recyclerView or adding a new activity page so you can navigate to a different screen. Additionally, I am even more curious how connecting one’s website to an outside source would be like. For example, in the Android University we made a lot of apps that use an API key to access a Twitter feed so we can see real-life tweets and create a tweet ourselves. I am curious if the process would be similar to websites or how different it is comparatively. Lastly, what I want to learn most is how to change the UI more. Personally, I love customizing my code and apps and this would be no different from my website. As a result, I would like to know what is possible in CSS and how HTML can assist in making a website pop. I want to learn how to add different layout that do different things within the website while also keeping the design classic without overwhelming the user. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

  If I had more time to do this project (and the skill), I would want to add a level setting to the game as well as possibly adding a scoreboard. To incorporate a levels action, I would probably add a button next to the start button that could be toggled similar to how the start/stop button works. By default, the word “easy” would be displayed in addition to the 4 buttons we started with. The amount of time given to guess would stay constant and 3 guesses would be given so even if you messed up, you still had 2 other tries. When the “easy” button was clicked, it would change color and read “hard” to show that you have entered a difficult stage. The number of buttons would change form 4 to 6 and there wouldn’t be a 3 guesses to win as part of the rules. Finally, clicking the “hard” button again would transition the game to an “expert” mode where 9 buttons would be showed and users would have to deal with a decreasing time on clues played. These 3 states would cycle through the levels every time it was clicked so after clicking “expert” it would transition back to the “easy” mode. The scoreboard would be more for filling up space in the layout but it would show the fastest time the user won a game. If I had the levels system implemented, it would show the fastest time a user won based on the level. 



## License

    Copyright [Madison Sarmiento]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
