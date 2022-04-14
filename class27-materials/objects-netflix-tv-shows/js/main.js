//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods


class smallScreenShow {
    constructor (makeTitle, makeGuest, makeThemeSong, makeJoke) {
        this.title = makeTitle;
        this.guest = makeGuest;
        this.theme = makeThemeSong;
        this.joke = makeJoke;
    }
    shoutName () {
        console.log('THIS IS THE NAME!');
    }
}