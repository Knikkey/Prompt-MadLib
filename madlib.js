let noun = prompt("Please enter 1 noun.");
let adj = prompt(
  "Please enter 6 adjectives.\nPlease separate each word with a comma and space.\nExample: funny, cool, etc."
).split(", ");

let adv = prompt(
  "Please enter 2 adverbs.\nPlease separate each word with a comma and space.\nExample: quickly, slowly, etc."
).split(", ");
let verb = prompt(
  "Please enter 7 verbs.\nPlease separate each word with a comma and space.\nExample: run, eat, etc."
).split(", ");
let color = prompt(
  "Please enter 2 colors.\nPlease separate each word with a comma and space.\nExample: red, yellow, etc."
).split(", ");
let bodyPart = prompt(
  "Please enter 3 body parts.\nPlease separate each word with a comma and space.\nExample: ear, finger, etc."
).split(", ");
let food = prompt("Please enter a food.");
let animal = prompt("Please enter an animal.");
let number = prompt("Please enter a number.");

alert("The story will now begin. Press OK to start.");

alert("This is the story of Yoonjoo the quokka.");
alert(
  `Yoonjoo the quokka was a very ${adj[0]} quokka. Her favorite food was ${food}, her favorite activity was ${verb[0]}ing, and she always had to ${verb[1]} before bed. How unique!`
);
alert(`But the thing that made her most unique was her fur.
When she became angry, it ${adv[0]} changed to the ${adj[1]}est ${color[0]} color! That made her very special, because her other quokka friends only had ${color[1]} fur.`);
alert(
  `Yoonjoo knew that her fur was special, and so she took very good care of it. To her, nothing was more important than her fur. Well, except maybe ${noun}s. She really liked ${noun}s.`
);
alert(
  `One day, a scary ${animal} visited her. He said "Little quokka, I'm hungry. Give me your tail. If you don't, I will ${verb[2]} your ${bodyPart[0]}!"`
);
alert(
  `But Yoonjoo was not afraid. She said "Well, then I'll ${verb[3]} your ${bodyPart[1]} and ${verb[4]} your ${bodyPart[2]}! You don't scare me!"`
);
alert(
  `So, the ${animal} charged at Yoonjoo to ${verb[2]} her ${bodyPart[0]}, but before he could ${verb[2]}, Yoonjoo's fur changed to ${color[0]}! It was so ${adj[2]} that it distracted him.`
);
alert(
  `Quickly, Yoonjoo used her special technique: The Quokka ${verb[5]}! She ${verb[5]}ed the ${animal} ${number} times! She did it so ${adv[1]} that his ${bodyPart[1]} and ${bodyPart[2]} fell off! The ${animal} ${verb[6]}ed and ran away while screaming "Yoonjoo is ${adj[3]}!"`
);
alert(
  `That night, Yoonjoo used the ${animal}'s ${bodyPart[1]} and ${bodyPart[2]} to make ${food}. After ${verb[1]}ing, she got into bed. "I love you, my ${adj[4]}, ${adj[5]} fur." she said before falling asleep.`
);
