# Typescript Helpers v0.3.5

Provides helper functions and extension methods for Typescript

## Installation:

In npm:

```shell
$ npm i @evan-abc/typescript-helpers --save-dev
```

In yarn:

```shell
$ yarn add -D @evan-abc/typescript-helpers
```

## Extension Methods

### Array

First:

Gets the first element in the array. Returns `undefined` if it is not found.

```typescript
const arr = [1,2,3]
arr.first() // 1
```

Last:

Gets the last element in the array. Returns `undefined` if it is not found.

```typescript
const arr = [1,2,3]
arr.last() // 3
```

### Boolean

Switches a `true` boolean to `false` and a `false` boolean to `true`.

Not:

```typescript
const bool = true
bool.not() // false
```

### Number

Seconds:

Converts numbers representing seconds into milliseconds.

```typescript
const num  = 5
num.seconds() // 5000
```

### Object

Matches:

Checks that two object match.
This extension method has a optional flag argument to check if the two object match when stringified (i.e. that the contents of the two objects matches). It defaults to `true`

```typescript
const obj1 = { first: 1, last: 2 }
const obj2 = { first: 1, last: 2 }
obj1.matches(obj2) // true
obj1.matches(obj2, false) // false
```

### String

Capitalize:

Capitalizes the first letter of a string.

```typescript
const str = "hello world"
str.capitalize() // "Hello world"
```

Truncate:

Truncates the string to the size specified

```typescript
const str = "hello world
str.truncate(3) // "Hel..."
```

## Helpers

### Wait:

Used to wait a given amount of milliseconds. Default time is 2000ms.

```typescript
wait(5000) // waits for 5 seconds
```

### Assert:

Throws given error if predicate is not true.

```typescript
const predicate = false
const error = new Error("Something is wrong!")

assert(predicate, error) // throws error "Something is wrong!"
```