# Make a Person

Fill in the object constructor with the following methods below:
```javascript
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(first, last)
```

Run the tests to see the expected output for each method. These methods must be the only available means of interacting with the object. Each test will declare a new `Person` instance as `new Person('Bob', 'Ross')`.

## Assertion Tests
- You should not change the function signature.
- You should not reassign the `first` parameter.
- You should not reassign the `last` parameter.
- No properties should be added. `Object.keys(Person).length` should always return 6.
- You should be able to instantiate your `Person` object.
- Your `Person` object should not have a `firstName` property.
- Your `Person` object should not have a `lastName` property.
- The `.getFirstName()` method should return the string `Bob`.
- The `.getLastName()` should return the string `Ross`.
- The `.getFullName()` method should return the string `Bob Ross`.
- The `.getFullName()` method should return the string `Haskell Ross` after calling `.setFirstName('Haskell')`.
- The `.getFullName()` method should return the string `Bob Curry` after calling `.setLastName('Curry')`.
- The `.getFullName()` method should return the string `Haskell Curry` after calling `.setFullName('Haskell', 'Curry')`.
- The `.getFirstName()` method should return the string `Haskell` after calling `.setFullName('Haskell', 'Curry')`.
- The `.getLastName()` method should return the string `Curry` after calling `.setFullName('Haskell', 'Curry')`.
- The `.getFullName()` method should return the string `Emily Martinez de la Rosa` after calling `.setFullName('Emily Martinez', 'de la Rosa')`.
- The `.getFirstName()` property should return the string `Emily Martinez` after calling `.setFullName('Emily Martinez', 'de la Rosa')`.
- The `.getLastName()` property should return the string `de la Rosa` after calling `.setFullName('Emily Martinez', 'de la Rosa')`.
