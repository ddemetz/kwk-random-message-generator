
// var title = document.getElementById("polaroid")

var songs = ["22", "All Too Well", "All You Had to Do Was Stay", "Babe", "Back to December", "Bad Blood", "Begin Again", "The Best Day", "Better Than Revenge", "Blank Space", "Both of Us", "Breathe", "Call It What You Want", "Change", "Clean", "Cold as You", "Come Back... Be Here", "Come in with the Rain", "Crazier", "Dancng with Our Hands Tied", "Dear John", "Deilcate", "Don't Blame Me", "Dress", "Enchanted", "End Game", "Everything Has Changed", "Eyes Open", "Fearless", "Fifteen", "Forever & Always", "Getaway Car", "Girl at Home", "Gorgeous", "Half of my Heart", "Haunted", "Hey Stephen", "Holy Ground", "How You Get The Girl", "I Almost Do", "I Did Something Bad", "I Don't Wanna Live Forever", "I Knew You Were Trouble", "I Know Places", "I Wish You Would", "I'm Only Me When I'm with You", "If This Was a Movie", "Innocent", "Invisible", "Jump Then Fall", "King of my Heart", "Last Kiss", "The Last Time", "Long Live", "Look What You Made Me Do", "Love Story", "The Lucky One", "Mary's Song", "Me!", "Mean", "Mine", "The Moment I Knew", "Never Grow Up", "New Romantics", "New Year's Day", "The Other Side of the Door", "Our Song", "Ours", "Out of the Woods", "The Outside", "A Perfectly Good Heart", "Picture to Burn", "A Place in This World", "...Ready for It?", "Red", "Ronan", "Sad Beautiful Tragic", "Safe and Sound", "Shake it Off", "Should've Said No", "So It Goes...", "Sparks Fly", "Speak Now", "Starlight", "State of Grace", "Stay Beautiful", "Stay Stay Stay", "The Story of Us", "Style", "Superman", "Superstar", "Sweeter than Fiction", "Teardrops on my Guitar", "Tell Me Why", "This is Why We Can't Have Nice Things", "This Love", "Tied Together with a Smile", "Tim McGraw", "Today Was a Fairytale", "Treacherous", "Two is Better Than One", "Untouchable", "The Way I Loved You", "We Are Never Ever Getting BAck Together", "Welcome to New York", "White Horse", "Wildest Dreams", "Wonderland", "You Are in love", "You Belong with Me", "You're Not Sorry"]


function song(){

title=songs[Math.floor(Math.random() * songs.length)]

console.log(title)

var container = $('.message');
container.empty();
container.append(title);

}
