# Personality Quiz Generator

Have you ever wanted to make one of those trendy, viral personality quiz like the [Taiwan Expo Personality Quiz](https://www.designexpo.org.tw/en/news/67)? Well now you can!

This is a generator that will create a working website for this. All you have to do is the fun part - the art!

## Generate An Example Quiz:
1. Run: `python3 generate.py --example`
2. Open with browser: `index.html`

## Instructions To Create Your Own Quiz:

### 1. Create storyline!

The way the algorithm works is that each questions is related to one area of the MBTI test (E or I, N or S, T or F, P or J). Each question rewards a point to the corresponding personality. For example:

```
{
    "question": "Q1/12: You're taking the bus on your way back home. It's been a loooong day, what are you thinking about?",
    "image": "assets/questions/gifs/Q1.gif",
    "answers": {
      "F": {
        "text": "I'm just so tired and can't wait to go home. Why does everyday feel the same...",
      },
      "T": {
        "text": "Should I rest or work first when I get home? Most importantly, what's for dinner?",
      }
    }
  },
```

You can do this manually in by editing assets/questions.js. UI for this coming soon!

### 2. Create art!

The required art assets to be made are:

`assets/main.gif`: asset on the main page

`assets/questions/question_{question_number}.gif`: asset each of question pages (1 through 16)

`assets/results/{personality_type}.gif`:  assert for each of the resulting personality types

### 3. Generate site!

Run: `python3 generate.py`
Open with browser: `index.html`

### Done! 

It should work locally now! See next steps to get this actually online.

## Get website online:

Just follow: https://pages.github.com/ !
