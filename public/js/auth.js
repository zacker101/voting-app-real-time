window.addEventListener("load", ()=> {
    firebase.auth().onAuthStateChanged(function(user) {
        if (!user) {
            firebase.auth().signInAnonymously();
        }
    });
});