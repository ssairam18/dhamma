const quotes = [
    "Arise, awake, and stop not till the goal is reached.",
    "Take risks in your life. If you win, you can lead! If you lose, you can guide!",
    "You cannot believe in God until you believe in yourself.",
    "Talk to yourself once in a day, otherwise you may miss meeting an intelligent person in this world.",
    "All the powers in the universe are already ours. It is we who have put our hands before our eyes and cry that it is dark.",
    "The greatest religion is to be true to your own nature. Have faith in yourselves!",
    "Strength is life, weakness is death. Expansion is life, contraction is death. Love is life, hatred is death.",
    "The fire that warms us can also consume us; it is not the fault of the fire.",
    "In a conflict between the heart and the brain, follow your heart.",
    "The world is the great gymnasium where we come to make ourselves strong.",
    "Neither money pays, nor name, nor fame, nor learning; it is CHARACTER that cleaves through adamantine walls of difficulties.",
    "If you think yourselves strong, strong you will be.",
    "Purity, patience, and perseverance are the three essentials to success and, above all, love.",
    "The best way to find yourself is to lose yourself in the service of others.",
    "Learn everything that is good from others, but bring it in, and in your own way absorb it; do not become others.",
    "The greatest sin is to think that you are weak.",
    "Take up one idea. Make that one idea your life – think of it, dream of it, live on that idea.",
    "The more we come out and do good to others, the more our hearts will be purified, and God will be in them.",
    "Everything is easy when you are busy. But nothing is easy when you are lazy.",
    "Comfort is no test of truth. Truth is often far from being comfortable.",
    "Fear is death, fear is sin, fear is hell, fear is unrighteousness, fear is wrong life.",
    "We are what our thoughts have made us; so take care about what you think. Words are secondary. Thoughts live; they travel far.",
    "The calmer we are and the less disturbed our nerves, the more we will love and the better our work will be.",
    "Do not wait for anybody or anything. Do whatever you can. Build your hope on none.",
    "Fill the brain with high thoughts, highest ideals, place them day and night before you, and out of that will come great work.",
    "Where can we go to find God if we cannot see Him in our own hearts and in every living being?",
    "The greatest truths are the simplest things in the world, simple as your own existence.",
    "Anything that makes you weak physically, intellectually, and spiritually, reject as poison.",
    "The greatest force is derived from the power of thought.",
    "Truth does not pay homage to any society, ancient or modern. Society has to pay homage to Truth or die.",
    "God is to be worshipped as the one beloved, dearer than everything in this and next life.",
    "Never be weak. You must be strong; you have infinite strength within you.",
    "Stand up and be strong! No fear. No superstition. Face the truth as it is!",
    "The whole secret of existence is to have no fear. Never fear what will become of you.",
    "A man is not poor without a rupee but a man is really poor without a dream and ambition.",
    "The great secret of true success, of true happiness, is this: the man or woman who asks for no return, the perfectly unselfish person, is the most successful.",
    "Do not lower your goals to the level of your abilities. Instead, raise your abilities to the height of your goals.",
    "Believe in yourself and the world will be at your feet.",
    "Fear is a terrible thing. It not only paralyses the brain, but it also weakens the whole system.",
    "Have faith in yourself – all power is in you. Be conscious and bring it out.",
    "Infinite power is within you! Manifest it!",
    "You must keep a strict eye on your health; let everything else be subordinated to that.",
    "A man is not known by his appearance, but by the character of his actions.",
    "Conquer yourself and the whole universe is yours.",
    "Meditation is the secret of all growth in spiritual life and knowledge.",
    "You have to grow from the inside out. None can teach you; none can make you spiritual.",
    "Everything can be sacrificed for truth, but truth cannot be sacrificed for anything.",
    "All knowledge that the world has ever received comes from the mind; the infinite library of the universe is in your own mind.",
    "Work, work, work – let this be your motto.",
    "The moment I have realized God sitting in the temple of every human body, the moment I stand in reverence before every human being and see God in him—that moment I am free from bondage.",
];

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeQuoteAndColor() {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").textContent = randomQuote;
    document.body.style.backgroundColor = getRandomColor();
}
