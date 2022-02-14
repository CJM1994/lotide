# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns the item in the first index of an array
* `middle(array)`: Returns the middle value(s) of an array, returns an empty array if two or less values
* `tail(array)`: Returns the tail of an array
* `assertArraysEqual(array1, array2)`: Asserts if two arrays are equal, primitive values only
* `assertEqual(x, x)`: Asserts if two primitive values are strictly equal
* `assertObjectsEqual(Object1, Object2)`: Asserts if two objects are equal, primitive values only in objects
* `countLetters(string)`: Returns an object with a count of each letter in a string
* `countOnly(...)`: description
* `eqArrays(...)`: description
* `eqObjects(...)`: description
* `findKey(...)`: description
* `findKeyByValue(...)`: description
* `flatten(...)`: description
* `letterPositions(...)`: description
* `map(...)`: description
* `takeUntil(...)`: description
* `without(...)`: description