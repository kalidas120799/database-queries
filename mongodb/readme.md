## INIT MODEL

```javascript
const MODEL_NAME = require("...")
```

## INSERT

```javascript
FUN_NAME = async () => {
    const newData = {
        name: "sam"
    }
    const result = await MODEL_NAME(newData).save().then((res) => res).catch((err) => err.message)
    console.log(result);
}
```

## GET ALL DATA

```javascript
FUN_NAME = async () => {
    const result = await MODEL_NAME.find({}).then((res) => res).catch((err) => err.message)
    console.log(result);
}
```

## FILTER

```javascript
FUN_NAME = async () => {
    const filterDate = {
        name: "sam"
    }
    const result = await MODEL_NAME.find(filterDate).then((res) => res).catch((err) => err.message)
    console.log(result);
}
```

## UPDATE 

```javascript
FUN_NAME = async () => {
    const updateData = {
        name: "sam"
    }
    const result = await MODEL_NAME.update({ "_id": 1 }, updateData).then((res) => res).catch((err) => err.message)
    console.log(result);
}
```

```javascript
FUN_NAME = async () => {
    const updateData = {
        name: "sam"
    }
    const result = await MODEL_NAME.updateOne({ "_id": 1 }, { $set: updateData }).then((res) => res).catch((err) => err.message)
    console.log(result);
}
```

```javascript
FUN_NAME = async () => {
    const updateData = {
        phone: "+910000000000"
    }
    const result = await MODEL_NAME.updateOne({ "_id": 1 }, { $rename: updateData }).then((res) => res).catch((err) => err.message)
    console.log(result);
}
```

```javascript
FUN_NAME = async () => {
    const replaceDate = {
        name: "john",
        phone: "+910000000001"
    }
    const result = await MODEL_NAME.replaceOne({ "_id": 1 }, replaceDate).then((res) => res).catch((err) => err.message)
    console.log(result);
}
```

```javascript
FUN_NAME = async () => {
    const addData = {
        city: "coimbatore"
    }
    const result = await MODEL_NAME.save(addData).then((res) => res).catch((err) => err.message)
    console.log(result);
}
```

```javascript
FUN_NAME = async () => {
    const updateData = {
        age: 23
    }
    const result = await MODEL_NAME.updateMany({ "name": "sam" }, { $set: updateData }).then((res) => res).catch((err) => err.message)
    console.log(result);
}
```

## DELETE

```javascript
FUN_NAME = async () => {
    const result = await MODEL_NAME.deleteOne({ "_id": 1 }).then((res) => res).catch((err) => err.message)
    console.log(result);
}
```

```javascript
FUN_NAME = async () => {
    const result = await MODEL_NAME.deleteMany({ "name": "sam" }).then((res) => res).catch((err) => err.message)
    console.log(result);
}
```

[Mongodb](https://www.mongodb.com/)
[Official Documentation](https://docs.mongodb.com/)
[Cheat Sheet](https://www.mongodb.com/developer/quickstart/cheat-sheet/)