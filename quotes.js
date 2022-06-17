const quotes = [
    {
      "quote": "Out beyond ideas of wrongdoing and rightdoing there is a field. I'll meet you there. When the soul lies down in that grass the world is too full to talk about.",
      "author": "Rumi"
    },
    {
      "quote": "One glance at a book and you hear the voice of another person, perhaps someone dead for 1,000 years. To read is to voyage through time.",
      "author": "Carl Sagan"
    },
    {
      "quote": "Man suffers only because he takes seriously what the gods made for fun.",
      "author": "Alan Wilson Watts"
    },
    {
      "quote": "Learning to let go should be learned before learning to get. Life should be touched, not strangled. You’ve got to relax, let it happen at times, and at others move forward with it.",
      "author": "Ray Bradbury"
    },
    {
      "quote": "Blessed is he who expects nothing, for he shall never be disappointed.",
      "author": "Alexander Pope"
    },
    {
      "quote": "When you catch yourself slipping into a pool of negativity, notice how it derives from nothing other than resistance to the current situation.",
      "author": "Donna Quesada"
    },
    {
      "quote": "You only live once, but if you do it right, once is enough.",
      "author": "Mae West"
    },
    {
      "quote": "It is better to be hated for what you are than to be loved for what you are not.",
      "author": "Andre Gide"
    },
    {
      "quote": "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
      "author": "Albert Einstein"
    },
    {
      "quote": "Good friends, good books, and a sleepy conscience: this is the ideal life.",
      "author": "Mark Twain"
    },
    {
      "quote": "Life is what happens to us while we are making other plans.",
      "author": "Allen Saunders"
    },
    {
      "quote": "I may not have gone where I intended to go, but I think I have ended up where I needed to be.",
      "author": "Douglas Adams"
    },
    {
      "quote": "Life is like riding a bicycle. To keep your balance, you must keep moving.",
      "author": "Albert Einstein"
    },
    {
      "quote": "But better to get hurt by the truth than comforted with a lie.",
      "author": "Khaled Hosseini"
    },
    {
      "quote": "The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.",
      "author": "Mark Twain"
    },
    {
      "quote": "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.",
      "author": "Isaac Asimov"
    },
    {
      "quote": "Never doubt that a small group of thoughtful, committed, citizens can change the world. Indeed, it is the only thing that ever has.",
      "author": "Margaret Mead"
    },
    {
      "quote": "Life can only be understood backwards; but it must be lived forwards.",
      "author": "Søren Kierkegaard"
    },
    {
      "quote": "A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.",
      "author": "George Bernard Shaw"
    },
    {
      "quote": "The best index to a person's character is how he treats people who can't do him any good, and how he treats people who can't fight back.",
      "author": "Abigail Van Buren"
    },
    {
      "quote": "Do not let your fire go out, spark by irreplaceable spark in the hopeless swamps of the not-quite, the not-yet, and the not-at-all. Do not let the hero in your soul perish in lonely frustration for the life you deserved and have never been able to reach. The world you desire can be won. It exists.. it is real.. it is possible.. it's yours.",
      "author": "Ayn Rand"
    },
    {
      "quote": "Accept yourself, love yourself, and keep moving forward. If you want to fly, you have to give up what weighs you down.",
      "author": "Roy T. Bennett"
    },
    {
      "quote": "My experience of life is that it is not divided up into genres; it’s a horrifying, romantic, tragic, comical, science-fiction cowboy detective novel. You know, with a bit of pornography if you're lucky.",
      "author": "Alan Moore"
    },
    {
      "quote": "You cannot control the behavior of others, but you can always choose how you respond to it.",
      "author": "Roy T. Bennett"
    },
    {
      "quote": "Life should not be a journey to the grave with the intention of arriving safely in a pretty and well preserved body, but rather to skid in broadside in a cloud of smoke, thoroughly used up, totally worn out, and loudly proclaiming \"Wow! What a Ride!\"",
      "author": "Hunter S. Thompson"
    },
    {
      "quote": "The true soldier fights not because he hates what is in front of him, but because he loves what is behind him.",
      "author": "G.K. Chesterton"
    },
    {
      "quote": "Make improvements, not excuses. Seek respect, not attention.",
      "author": "Roy T. Bennett"
    },
    {
      "quote": "Why didn't I learn to treat everything like it was the last time. My greatest regret was how much I believed in the future.",
      "author": "Jonathan Safran Foer"
    },
    {
      "quote": "No amount of regretting can change the past, and no amount of worrying can change the future.",
      "author": "Roy T. Bennett"
    },
    {
      "quote": "Life shrinks or expands in proportion to one's courage.",
      "author": "Anais Nin"
    },
    {
      "quote": "Suffering has been stronger than all other teaching, and has taught me to understand what your heart used to be. I have been bent and broken, but - I hope - into a better shape.",
      "author": "Charles Dickens"
    },
    {
      "quote": "The reasonable man adapts himself to the world: the unreasonable one persists in trying to adapt the world to himself. Therefore all progress depends on the unreasonable man.",
      "author": "George Bernard Shaw"
    },
    {
      "quote": "Wisdom comes from experience. Experience is often a result of lack of wisdom.",
      "author": "Terry Pratchett"
    },
    {
      "quote": "Your assumptions are your windows on the world. Scrub them off every once in a while, or the light won't come in.",
      "author": "Isaac Asimov"
    },
    {
      "quote": "Every one of us is, in the cosmic perspective, precious. If a human disagrees with you, let him live. In a hundred billion galaxies, you will not find another.",
      "author": "Carl Sagan"
    },
    {
      "quote": "It does not matter how slowly you go as long as you do not stop.",
      "author": "Confucius"
    },
    {
      "quote": "Life is not a matter of holding good cards, but of playing a poor hand well.",
      "author": "Robert Louis Stevenson"
    },
    {
      "quote": "I can't give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time.",
      "author": "Herbert Bayard Swope"
    },
    {
      "quote": "Friendship is unnecessary, like philosophy, like art.... It has no survival value; rather it is one of those things which give value to survival.",
      "author": "C.S. Lewis"
    },
    {
      "quote": "Whatever you are, be a good one.",
      "author": "Abraham Lincoln"
    },
    {
      "quote": "I don't trust people who don't love themselves and tell me, 'I love you.' ... There is an African saying which is: Be careful when a naked person offers you a shirt.",
      "author": "Maya Angelou"
    },
    {
      "quote": "Don't judge each day by the harvest you reap but by the seeds that you plant.",
      "author": "Robert Louis Stevenson"
    },
    {
      "quote": "If she's amazing, she won't be easy. If she's easy, she won't be amazing. If she's worth it, you wont give up. If you give up, you're not worthy. ... Truth is, everybody is going to hurt you; you just gotta find the ones worth suffering for.",
      "author": "Bob Marley"
    },
    {
      "quote": "A ship is safe in harbor, but that's not what ships are for.",
      "author": "John A. Shedd"
    },
    {
      "quote": "You cannot swim for new horizons until you have courage to lose sight of the shore.",
      "author": "William Faulkner"
    },
    {
      "quote": "Everyone has talent. What's rare is the courage to follow it to the dark places where it leads.",
      "author": "Erica Jong"
    },
    {
      "quote": "Courage isn't having the strength to go on - it is going on when you don't have strength.",
      "author": " Napoleon Bonaparte"
    },
    {
      "quote": "Believe you can and you're halfway there.",
      "author": "Theodore Roosevelt"
    },
    {
      "quote": "The man who moves a mountain begins by carrying away small stones.",
      "author": "Confucius"
    },
    {
      "quote": "Once you learn to quit, it becomes a habit.",
      "author": "Vince Lombardi"
    }
  ]

export default quotes;
