const messages = [
    "New book recommendations just for you!",
    "Discover the latest bestsellers in our collection.",
    "Limited time offer: Buy 2 books, get 1 free!",
    "Exciting new arrivals in the mystery genre.",
    "Get lost in the magical world of fantasy books.",
    "Explore our collection of classic novels.",
    "Looking for romance? Check out our love stories.",
    "Find your next great adventure in our adventure books section.",
    "Discover the power of self-improvement with our personal development books.",
    "Calling all history buffs! Dive into our history books collection.",
    "Don't miss our special discount on science fiction novels.",
    "Get inspired by our selection of motivational books.",
    "Learn something new with our educational books.",
    "Introducing our featured author of the month: [Author Name].",
    "Explore different cultures through our diverse range of books.",
    "Unleash your creativity with our art and craft books.",
    "Expand your knowledge with our non-fiction books.",
    "Travel the world through our travel books selection.",
    "Looking for a gift? Check out our book recommendations for every occasion.",
    "Get lost in the pages of our thrilling suspense novels.",
    "Discover the joy of children's books with our kids' collection.",
    "Find inner peace and tranquility with our mindfulness books.",
    "Step into the realm of imagination with our fantasy series.",
    "Calling all aspiring writers! Join our book club and hone your skills.",
    "Explore the works of renowned authors in our literary classics section.",
    "Indulge in the gripping stories of our crime and thriller novels.",
    "Discover the untold stories of extraordinary individuals in our biographies.",
    "Expand your cooking repertoire with our collection of recipe books.",
    "Embark on a journey of self-discovery with our self-help books.",
    "Get lost in the enchanting tales of our fairy tale books.",
];

let currentIndex = 0;

// Function to get the next message
function getNextMessage() {
    const message = messages[currentIndex];
    currentIndex = (currentIndex + 1) % messages.length;
    return message;
}

module.exports = {
    getNextMessage
}

