/**
 * SpeakScript Built-in Example Programs v0.1
 */

const EXAMPLES = [
  {
    id   : 'greeting',
    title: '👋 Greeting Story',
    desc : 'Two friends meet at school and say good morning.',
    code : `# Greeting Story
scene "school"

Rafi appears
Mina appears

Rafi waves
Rafi says "Good morning, Mina!"

Mina smiles
Mina says "Good morning, Rafi!"

Rafi says "How are you?"
Mina says "I am fine. Thank you!"

narrator says "They are good friends."
`,
  },
  {
    id   : 'jungle',
    title: '🦁 Animal Jungle',
    desc : 'Animals in the jungle introduce themselves.',
    code : `# Animal Jungle
scene "jungle"

Lion appears
Bird appears
Monkey appears

Lion says "I am a lion."
Lion says "I am strong!"

Bird flies
Bird says "I can fly high!"

Monkey jumps
Monkey says "I love bananas!"

narrator says "The jungle is full of amazing animals."
`,
  },
  {
    id   : 'restaurant',
    title: '🍽️ Restaurant Conversation',
    desc : 'A buyer orders juice from a seller.',
    code : `# Restaurant Conversation
scene "restaurant"

Seller appears
Buyer appears

Seller says "Welcome to our restaurant!"
Buyer says "Hello! I want some juice please."
Seller says "Of course! Orange or mango?"
Buyer says "Mango juice please."
Seller says "Here you are."
Buyer says "Thank you very much!"
Seller says "Enjoy your drink!"

narrator says "Always be polite when you order food."
`,
  },
  {
    id   : 'quiz',
    title: '📝 Fruit Quiz',
    desc : 'A teacher runs a fruit colour quiz.',
    code : `# Fruit Quiz
scene "classroom"

Teacher appears
Teacher says "Let us play a fruit quiz!"
Teacher says "Are you ready?"

wait 1 second

ask "Which fruit is yellow?"
choice "Apple" wrong
choice "Banana" correct
choice "Mango" wrong

if answer is correct
    Teacher says "Excellent! Bananas are yellow!"
    narrator says "Well done! Keep it up!"
else
    Teacher says "Not quite! The answer is Banana."
    narrator says "Try again next time!"
end
`,
  },
  {
    id   : 'repeat',
    title: '🐦 Bird Repeat',
    desc : 'A bird flies and tweets three times.',
    code : `# Repeat Action
scene "playground"

Bird appears
narrator says "Watch the bird sing!"

repeat 3 times
    Bird flies
    Bird says "Tweet tweet!"
end

narrator says "The bird loves to sing!"
`,
  },
  {
    id   : 'vocab',
    title: '📚 Vocabulary Cards',
    desc : 'Learn some English words with meanings.',
    code : `# Vocabulary Learning
scene "classroom"

Teacher appears
Teacher says "Today we learn new words!"

show word "brave" means "সাহসী"
show word "jump" means "লাফানো"
show word "river" means "নদী"
show word "friend" means "বন্ধু"
show word "sky" means "আকাশ"

Teacher says "Can you use these words in a sentence?"
narrator says "Practice makes perfect!"
`,
  },
  {
    id   : 'space',
    title: '🚀 Space Adventure',
    desc : 'A robot explores outer space.',
    code : `# Space Adventure
scene "space"

Robot appears
narrator says "Year 2050. A robot is exploring space."

Robot says "I am Robot X9."
Robot says "I have landed on a new planet!"
Robot moves right
Robot says "The planet looks strange."
Robot moves left
Robot says "I see a glowing rock!"
Robot waves
Robot says "Mission complete! Heading home."

narrator says "The robot returned safely to Earth."
`,
  },
  {
    id   : 'score',
    title: '🏆 Score Game',
    desc : 'A quiz that tracks your score.',
    code : `# Score Game
scene "school"

score starts at 0

Teacher appears
Teacher says "Welcome to the Score Game!"

ask "What is the capital of Bangladesh?"
choice "Dhaka" correct
choice "London" wrong
choice "Paris" wrong

if answer is correct
    Teacher says "Correct! Dhaka is the capital!"
    add 10 points
else
    Teacher says "The answer is Dhaka."
end

show score

narrator says "Great effort! Keep learning!"
`,
  },
];

window.SpeakExamples = EXAMPLES;
