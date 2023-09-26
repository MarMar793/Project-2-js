# Project-2-js
## Project 2 code institutute Java Game

# Guess My Number
Guess my number is a vanilla javascript game that is simple and fun. Accessible to all ages, there are little to no onboarding requirements or time commitments. It is open to all from the very young to the very busy, and with accessible design elements, can be a fun pastime for people of all abilities.

# Features

## Title - Guess My Number
The user is immediately engaged in the game without a need for explanation. Its easy to read and understand. The playful use of colour also communicates that this is for fun.

## Subtitle
This just adds a little bit of context for the player. They have to guess a number between 1 and 12.

## Number buttons 
The buttons numbered 1-12 allow the user to make either choice. Colour change on hover allows them to better recognise which number the cursor is on.

## Message Section.
Fun feedback for the user so they have a sense of the game's progression. It also lets them know that they have a limited amount of guesses. 
A message also appears when they lose/ win.It gives the user closure and it communicates the games end. The final message doesn't change unless the user wishes to restart the game.

## Reset Button. 
This allows for the user to start the game again. Like the number buttons -a colour change on hover allows them to better recognise the cursor is over the restart button.

# Features Left to Implement
• A leaderboard of the best number of guesses in a row could be added. 
• A two player function where the first user to guess correctly wins the game.



# Validator Testing

## HTML
No errors were returned when passing through the official W3C validator

## CSS
No errors were found when passing through the official (Jigsaw) validator

## JavaScript
No errors were found when passing through the official Jshint validator

### The following metrics were returned:
• Function with the largest signature takes 1 arguments, while the median is 0.
• Largest function has 15 statements in it, while the median is 2.
• The most complex function has a cyclomatic complexity value of 7 while the median is 1.

It also returned 20 warning which all stated the following: _(element ) is only available in ES6 (use 'esversion: 6')._
On further inspection it seems that the fix for this is to add _/* jshint esversion: 6 */_ to the beginning of JS code to clarify which version of JS has been used.

## Lighthouse Report
• The report returned the following:
• Performance- 72
• Accessibility-91
• Best Practices-75
• SEO-64
  
### Feedback
_Chrome extensions negatively affected this page's load performance. Try auditing the page in incognito mode or from a Chrome profile without extensions.
There may be stored data affecting loading performance in this location: IndexedDB. Audit this page in an incognito window to prevent those resources from affecting your scores._

As I had developed this project primarily in code anywhere (and it was off of this I ran the lighthouse report), I believe that the numbers and feedback could be related to the nature of the platform (web based.)While the numbers are relatively good, I would expect them to improve when the site is launched.

# Unfixed Bugs
While layout in regards to screen-size could be improved there seems to be any particular bugs that could hinder the user.

# Deployment
add

# Content/ Credits
• Guidance on troubleshooting fixing “right answer on final guess” issue :[w3schools](https://www.w3schools.com/js/js_if_else.asp)  and [youtube](https://www.youtube.com/watch?v=wT-1T7Ws5qY)


Idea for project/ further reading : [geeksforgeeks](https://www.geeksforgeeks.org/number-guessing-game-using-javascript/)


Instructions on how to implement the colour effect it the title was taken from here:[w3docs](https://www.w3docs.com/snippets/css/how-to-create-a-multicolor-text-in-html-and-css.html)

# Media
No outside media was used in the final iteration.

