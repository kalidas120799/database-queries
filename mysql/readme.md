```javascript
const db = require("...")
```

## CREATE TABLE

```javascript
const myquery = "CREATE TABLE TABLE_NAME (id INT(255) AUTO_INCREMENT,name VARCHAR(255),date VARCHAR(255))"

db.query(myquery, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
})
```

## INSERT

```javascript
const myquery = "INSERT INTO TABLE_NAME SET ?"

const newData = {
  name: "sam",
  date: new Date()
}

db.query(myquery, newData, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
})
```

## VIEW ALL DATA 

```javascript
const myquery = "SELECT * FROM TABLE_NAME"

db.query(myquery, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
})
```

## WHERE (filter)

```javascript
const myquery = "SELECT * FROM TABLE_NAME WHERE name=?"

db.query(myquery, ["sam"], (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
})
```

## UPDATE

```javascript
const myquery = "UPDATE TABLE_NAME SET ? WHERE id = ?"

const updateData = {
  name: "john"
}

db.query(myquery, [1, updateData], (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
})
```

## DELETE

```javascript
const myquery = "DELETE FROM TABLE_NAME WHERE id= ?"

db.query(myquery, [1], (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
})
```

## JOIN TWO TABLES

```javascript
const myquery = "SELECT * from TABLE_NAME_1,TABLE_NAME_2 WHERE TABLE_NAME_1.id=TABLE_NAME_2.id"

db.query(myquery, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
})
```

## ORDER BY DESC

```javascript
const myquery = "SELECT * from TABLE_NAME ORDER BY id DESC"

db.query(myquery, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
})
```

## ORDER BY ASC

```javascript
const myquery = "SELECT * from TABLE_NAME ORDER BY id ASC"

db.query(myquery, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
})
```

## DROP TABLE 

```javascript
const myquery = "DROP TABLE TABLE_NAME"

db.query(myquery, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
})
```

## EMPTY TABLE 

```javascript
const myquery = "TRUNCATE TABLE_NAME"

db.query(myquery, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
})
```