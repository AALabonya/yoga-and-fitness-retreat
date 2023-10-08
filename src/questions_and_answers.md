
###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer: B ReferenceError: greetign is not defined.  </b></summary>
<p>

#### Answer: ?

<i>Here is a typing error.When I try to log "greeting", it will give a ReferenceError because greetign is not define.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer: C </b></summary>
<p>

#### Answer: ?

<i>Because 1 is a number, and "2" is a string, So Javascript converts the number to string and then concate them result is "12"</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer:A: `['🍕', '🍫', '🥑', '🍔']`  </b></summary>
<p>

#### Answer: ?

<i>Because food is an array and info is an object. info property is 'favoriteFood' that hold first item is '🍕' it change the "info.favoriteFood" to "🍝" , it never changed the original 'food' array.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer: B: `Hi there, undefined`</b></summary>
<p>

#### Answer: ?

<i>sayHi is a function there parameter is name . When i call sayHi without providing an argument name is undefined.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer : 3</b></summary>
<p>

#### Answer: ?

<i> Here, num = 0 , 0 is equal to 0 , condition is not met. count remains 0 . num = 1 , 1 is not equal to 0 , condition is met. count becomes 1.num = 2 , 2 is not equal to 0 , condition is met and count becomes 2 .num = 3 , 3 is not equal to 0 , condition is met. count becomes 3.</i>

</p>
</details>
