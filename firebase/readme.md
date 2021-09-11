```javascript
const firebase = require("...")
```

# FIREBASE FIRESTORE

```javascript
const db = firebase.firestore()
const DB_COLLECTION_NAME = db.collection("COLLECTION_NAME")
```

## INSERT

```javascript
const newData = {
    id: Date.now().toString(),
    name: "sam",
    phone: "910000000000"
}

DB_COLLECTION_NAME.set(newData).then((res) => { console.log(res) }).catch((err) => { console.log(err); })
```

## GET ALL DATA

```javascript
DB_COLLECTION_NAME.get().then((snap) => { snap.forEach((doc) => { console.log(doc); }) }).catch((err) => { console.log(err); })
```

## GET ONE DATA

```javascript
DB_COLLECTION_NAME.doc(DOC_ID).get().then((doc) => { console.log(doc); }).catch((err) => { console.log(err); })
```

## FILTER

```javascript
DB_COLLECTION_NAME.where("name", "==", "sam").get().then((snap) => { snap.forEach((doc) => { console.log(doc); }) }).catch((err) => { console.log(err); })
```

## ORDER BY DESC

```javascript
DB_COLLECTION_NAME.orderBy("date", "desc").get().then((snap) => { snap.forEach((doc) => { console.log(doc); }) }).catch((err) => { console.log(err); })
```

## ORDER BY ASC

```javascript
DB_COLLECTION_NAME.orderBy("date", "asc").get().then((snap) => { snap.forEach((doc) => { console.log(doc); }) }).catch((err) => { console.log(err); })
```

## UPDATE

```javascript
const updateData = {
    name: "john",
}

DB_COLLECTION_NAME.doc(DOC_ID).update(updateData).then((res) => { console.log(res) }).catch((err) => { console.log(err); })
```

## DELETE

```javascript
DB_COLLECTION_NAME.doc(DOC_ID).delete().then((doc) => { console.log(doc); }).catch((err) => { console.log(err); })
```

#FIREBASE REALTIME

```javascript
const db = firebase.database()

const DB_COLLECTION_NAME = db.ref("COLLECTION_NAME")
```

## INSERT

```javascript
const newData = {
    id: Date.now().toString(),
    name: "sam",
    phone: "910000000000"
}

DB_COLLECTION_NAME.set(newData).then((res) => { console.log(res) }).catch((err) => { console.log(err); })

DB_COLLECTION_NAME.push(newData).then((res) => { console.log(res) }).catch((err) => { console.log(err); })
```

## GET ALL DATA

```javascript
DB_COLLECTION_NAME.on('value', (snapshot) => { console.log(snapshot.val()); }).catch((err) => { console.log(err); })

DB_COLLECTION_NAME.once('value', (snapshot) => { console.log(snapshot.val()); }).catch((err) => { console.log(err); })
```

## GET ONE DATA

```javascript
DB_COLLECTION_NAME.child(DOC_ID).get().then((snapshot) => { console.log(snapshot.val()); }).catch((err) => { console.log(err); })
```

## FILTER

```javascript
DB_COLLECTION_NAME.where("name", "==", "sam").get().then((snap) => { snap.forEach((doc) => { console.log(doc); }) }).catch((err) => { console.log(err); })
```

## UPDATE

```javascript
const updateData = {
    name: "john",
}

DB_COLLECTION_NAME.child(DOC_ID).update(updateData).then((snap) => { console.log(snap) }).catch((err) => { console.log(err); })
```

## DELETE

```javascript
DB_COLLECTION_NAME.doc(DOC_ID).delete().then((snap) => { console.log(snap); }).catch((err) => { console.log(err); })
```

#FIREBASE STORAGE

```javascript
async function uploadImage(file) {
    const image = new Promise((resolve, reject) => {
        var path = `file/${userid}/`
        var fileName = `${Date.now().toString()}.${extention}`
        var storageRef = firebase.storage().ref(path + fileName);
        storageRef.put(file2).then(function (snapshot) {
            console.log('Uploaded a blob or file!');
            storageRef.getDownloadURL().then(function (url) {
                resolve(url)
            })
        });
    });

    const imageURL=await image
    return imageURL
}
```

[Firebase](https://firebase.google.com/)
[Official Documentation](https://firebase.google.com/docs/)





