export class FirebaseService {
    static getData(name) {
        var myFirebaseRef = new Firebase("https://glowing-heat-1644.firebaseio.com/"); //todo: move to config
        return new Promise(function(resolve, reject) {
            myFirebaseRef.child(name).on("value", function(snapshot) {
                resolve(snapshot.val());
            });
        });
    }
}