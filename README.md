# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @cjm1994/lotide`

**Require it:**

`const _ = require('@cjm1994/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns the item in the first index of an array
* `middle(array)`: Returns the middle value(s) of an array, returns an empty array if two or less values
* `tail(array)`: Returns the tail of an array
* `countLetters(string)`: Returns an object with a count of each letter in a string
* `countOnly(array, {string/integer : boolean})`: Counts instances of primitive values taken from the key of the object argument, will count keys given the value of true and skip keys given the value false
* `eqArrays(array1, array2)`: Compares each item in two arrays strictly at each index and returns true if they match and false if an index does not match
* `eqObjects(object1, object2)`: Compares two objects at each key, if any keys do not strictly match or if number of keys differ returns false. If they match returns true, checks arrays withing objects with assertArraysEqual
* `findKey(object, callback)`: Calls a function on each key in an object
* `findKeyByValue(object, value)`: Returns the first key in an object with a given value
* `flatten(array)`: Flattens an array that contains arrays, only goes 1 array deep
* `letterPositions(string)`: Returns an object with each character in a string as the key and an array with all indexs of that character as the value
* `map(array, callback)`: Calls a callback function on each element in an array and returns a new array with the result
* `takeUntil(array, callback)`: Calls a function on each element in an array until the callback returns true, will return the first element where a callback returns true
* `without(array1, array2)`: Takes array1 as an argument and returns a new array with all elements contained in array2 removed