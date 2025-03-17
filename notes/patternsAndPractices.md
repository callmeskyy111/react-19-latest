## 🚀 **Pure Functions in JavaScript – A Detailed Explanation**  

### 📌 **What Is a Pure Function?**
A **pure function** is a function that:  
1. **Always returns the same output for the same input** (deterministic).  
2. **Has no side effects** (does not modify external variables, DOM, API calls, logs, etc.).  

🔹 **Mathematical Definition**  
A function **f(x)** is pure if:  
```
f(x) = y  → Always produces the same `y` for a given `x`
```
---
## ✅ **Characteristics of Pure Functions**
### ✔ **1️⃣ Deterministic**
A pure function **always returns the same result** for the same input.

🔹 **Pure Function:**
```js
function add(a, b) {
  return a + b;  // ✅ No external modifications
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 (always same output)
```
🔹 **Impure Function:**
```js
let randomFactor = Math.random();

function addImpure(a, b) {
  return a + b + randomFactor;  // ❌ Not deterministic (random value changes)
}
```
---
### ✔ **2️⃣ No Side Effects**
A pure function **does not modify** external state, DOM, variables, API, etc.

🔹 **Pure Function:**
```js
function multiply(a, b) {
  return a * b; // ✅ No external changes
}
```
🔹 **Impure Function (Modifying External Variable):**
```js
let total = 10;

function impureMultiply(a) {
  total *= a;  // ❌ Changes external state
  return total;
}
```
🔹 **Impure Function (Modifying DOM):**
```js
function updateHeading() {
  document.querySelector("h1").textContent = "Updated!"; // ❌ Direct DOM manipulation
}
```
---
### ✔ **3️⃣ No Modifications to Input Parameters**
A pure function **does not modify** its input.

🔹 **Impure Function (Modifying Parameter):**
```js
function pushImpure(arr, value) {
  arr.push(value);  // ❌ Modifies the original array
  return arr;
}

let numbers = [1, 2, 3];
pushImpure(numbers, 4);
console.log(numbers); // [1, 2, 3, 4] (Mutated)
```
✅ **Pure Version (Creates a New Array Instead):**
```js
function pushPure(arr, value) {
  return [...arr, value];  // ✅ Returns a new array (immutable)
}

let numbers2 = [1, 2, 3];
let newNumbers = pushPure(numbers2, 4);
console.log(numbers2); // [1, 2, 3] (Original not changed)
console.log(newNumbers); // [1, 2, 3, 4] (New array)
```
---
## 🎯 **Why Use Pure Functions?**
✔ **Predictability** – Easier to debug since they always return the same output.  
✔ **Testability** – Can be tested without mocks, spies, or environment dependencies.  
✔ **Performance** – Easier to optimize with memoization or caching.  
✔ **Concurrency** – Safe in parallel processing (no external changes).  

---
## 🔥 **Examples of Pure Functions in JavaScript**
### ✅ **1️⃣ Functional Programming with `.map()`**
```js
const numbers = [1, 2, 3];

const doubled = numbers.map(num => num * 2); // ✅ Pure function

console.log(doubled); // [2, 4, 6]
console.log(numbers); // [1, 2, 3] (Original unchanged)
```
---
### ✅ **2️⃣ Using `reduce()` for Aggregation**
```js
const prices = [10, 20, 30];

const total = prices.reduce((sum, price) => sum + price, 0); // ✅ Pure function

console.log(total); // 60
```
---
### ✅ **3️⃣ Filtering Data with `.filter()`**
```js
const words = ["apple", "banana", "cherry", "date"];

const shortWords = words.filter(word => word.length <= 5); // ✅ Pure function

console.log(shortWords); // ["apple", "date"]
```
---
## 🔴 **Common Mistakes That Make Functions Impure**
❌ **Modifying Global Variables**
```js
let count = 0;

function increment() {
  count++;  // ❌ Changes external variable
}
```
✅ **Fix: Pass Data as Parameters**
```js
function increment(count) {
  return count + 1; // ✅ No external modifications
}
```
---
❌ **Performing Side Effects (API Calls, Logging)**
```js
function fetchData() {
  fetch("https://api.example.com/data")  // ❌ Fetching data inside function
    .then(response => response.json())
    .then(data => console.log(data));
}
```
✅ **Fix: Separate Side Effects Using `useEffect` (React)**
```js
function fetchData(apiUrl) {
  return fetch(apiUrl).then(response => response.json()); // ✅ Returns data instead of logging
}
```
---
## 🏆 **Key Takeaways**
✅ **Pure Functions Always:**
- Return **the same output** for the same input.
- Do **not modify external state**.
- Do **not perform side effects** (DOM updates, API calls, logs).

❌ **Avoid:**
- Changing external variables (`global`, `state`, `DOM`).
- Fetching data, logging, or modifying props/state in React.
- Mutating arrays/objects (use **immutability** instead).

---
## 🟢 **Keeping Components Pure in React – A Detailed Guide**

### 📌 **What Does It Mean to Keep Components Pure in React?**
In React, a **pure component** is a component that **only depends on its props and state** and **does not cause side effects** when rendering. Keeping components pure means ensuring that:
1. The **output (UI) of the component is solely determined by its props and state**.
2. The **component does not modify external state** or cause unexpected behavior.
3. The **component re-renders only when necessary**, improving performance.

---

## ✅ **Characteristics of Pure Components**
A **pure** React component:
✔ Always returns the **same output (UI) for the same inputs (props/state)**.  
✔ Does not **mutate props, state, or global variables**.  
✔ Does not perform **side effects inside the render function** (e.g., API calls, event listeners, modifying DOM).  
✔ Uses **shallow comparisons** to optimize re-renders.

---

## 🔴 **Common Mistakes That Make a Component Impure**
### ❌ **1️⃣ Mutating State Directly**
Directly modifying state inside a component is **impure** because it **does not trigger re-renders** properly.

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);

  function increment() {
    count++; // ❌ Mutating state directly
    setCount(count); // ❌ React might not detect the change
  }

  return <button onClick={increment}>Count: {count}</button>;
}
```
🔹 **Why is this impure?**
- Modifying `count++` directly does not update the state correctly.
- React relies on `setCount()` to **schedule updates** and trigger re-renders.

✅ **Fix: Always use `setState()` correctly**
```jsx
function Counter() {
  const [count, setCount] = React.useState(0);

  function increment() {
    setCount(prevCount => prevCount + 1); // ✅ Updating state correctly
  }

  return <button onClick={increment}>Count: {count}</button>;
}
```
---

### ❌ **2️⃣ Performing Side Effects Inside the Render Function**
A pure component should not have **side effects** (e.g., API calls, timers, event listeners) inside the render function.

```jsx
function UserProfile({ userId }) {
  let userData = null;

  fetch(`/api/user/${userId}`) // ❌ Fetching inside render
    .then(response => response.json())
    .then(data => { userData = data; });

  return <div>{userData?.name}</div>; // ❌ Might not display correct data
}
```
🔹 **Why is this impure?**
- Every render **triggers a new API request**.
- The UI **does not wait for the response**, leading to **flickering**.

✅ **Fix: Use `useEffect` to handle side effects**
```jsx
function UserProfile({ userId }) {
  const [userData, setUserData] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/user/${userId}`)
      .then(response => response.json())
      .then(data => setUserData(data));
  }, [userId]); // ✅ Only fetches when userId changes

  return <div>{userData?.name || "Loading..."}</div>;
}
```
---

### ❌ **3️⃣ Modifying Props Inside a Component**
Props should be **read-only** in React. Modifying them **makes a component impure**.

```jsx
function ProfileCard({ user }) {
  user.name = "Anonymous"; // ❌ Modifying props directly

  return <h2>{user.name}</h2>;
}
```
🔹 **Why is this impure?**
- It **modifies the parent’s data**, leading to **unexpected bugs**.
- React follows **one-way data flow**—props should not be changed.

✅ **Fix: Create a local copy if modification is needed**
```jsx
function ProfileCard({ user }) {
  const userCopy = { ...user, name: "Anonymous" }; // ✅ Create a new object

  return <h2>{userCopy.name}</h2>;
}
```
---

### ❌ **4️⃣ Using Non-Pure Functions in `useMemo` or `useCallback`**
If functions inside `useMemo` or `useCallback` modify **external state**, it makes them impure.

```jsx
const calculateTotal = (items) => {
  let total = 0;
  items.forEach(item => (total += item.price)); 
  console.log("Calculating total..."); // ❌ Impure: Side effect inside calculation
  return total;
};

function Cart({ items }) {
  const total = React.useMemo(() => calculateTotal(items), [items]); // ❌ Impure function

  return <h2>Total: ${total}</h2>;
}
```
🔹 **Why is this impure?**
- The function **modifies external variables** (`console.log` is a side effect).
- Every render **logs unnecessary output**.

✅ **Fix: Make function pure**
```jsx
const calculateTotal = (items) => {
  return items.reduce((sum, item) => sum + item.price, 0); // ✅ No side effects
};
```

---

## 🏆 **Best Practices to Keep Components Pure**
✅ **1️⃣ Do not modify state or props directly** (always use `setState()`).  
✅ **2️⃣ Use `useEffect` for side effects** like fetching data, subscriptions, or timers.  
✅ **3️⃣ Keep render functions free from API calls, DOM manipulation, or event listeners.**  
✅ **4️⃣ Use `useMemo` and `useCallback` to optimize expensive calculations and prevent unnecessary re-renders.**  
✅ **5️⃣ Pass down functions as props instead of modifying parent state inside child components.**  

---

## 🚀 **Final Thoughts**
Keeping components **pure** improves:
✔ **Performance** – React can optimize re-renders efficiently.  
✔ **Predictability** – The UI is always based on **props and state**.  
✔ **Debugging** – Easier to track changes without side effects.  
✔ **Reusability** – Pure components can be used in multiple places safely.

## 🚀 **Pure vs Impure Components in ReactJS – A Deep Dive**  

In React, components can be **pure** or **impure**, depending on how they handle state, props, and re-renders.

---

## 📌 **What Is a Pure Component?**
A **Pure Component** in React is a component that:  
✔️ Renders **only when necessary** (i.e., when state or props change).  
✔️ Implements **shouldComponentUpdate** automatically to optimize performance.  
✔️ Does **not modify props** or state directly.  
✔️ **Returns the same UI for the same props and state** (predictable behavior).  

### ✅ **PureComponent in Class Components**
React provides a built-in class called `React.PureComponent`, which automatically **prevents unnecessary re-renders** by doing a **shallow comparison** of props and state.

🔹 **Example: Pure Component (Class-Based)**
```jsx
import React, { PureComponent } from "react";

class PureExample extends PureComponent {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("Pure Component Rendered!");  // Runs only when state changes
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default PureExample;
```
🔹 **Why Is This a Pure Component?**  
- `PureComponent` **prevents unnecessary re-renders** by **shallowly comparing state and props**.  
- If `count` **does not change**, the component **won't re-render**.  

---
## 📌 **Pure Components in Functional Components (React.memo)**
For **functional components**, we use `React.memo()`, which **prevents re-renders if props remain the same**.

🔹 **Example: Pure Functional Component with `React.memo()`**
```jsx
import React, { useState } from "react";

const PureChild = React.memo(({ name }) => {
  console.log("PureChild Rendered!");  // Will re-render only if 'name' changes
  return <h2>Hello, {name}!</h2>;
});

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <PureChild name="Skyy" /> {/* Re-renders only if 'name' changes */}
      <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
    </div>
  );
}

export default Parent;
```
🔹 **Why Is This a Pure Component?**  
- **`React.memo()` optimizes performance** by skipping re-renders if props haven't changed.  
- The `PureChild` **does not re-render** when the `count` in the `Parent` changes.

---
## 🔴 **What Is an Impure Component?**
An **impure component** does not follow the rules of purity, meaning:  
❌ It **always re-renders**, even if state/props haven’t changed.  
❌ It **modifies props or state directly** instead of using `setState` or `useState`.  
❌ It **has side effects**, like API calls, logging, or modifying global variables.  

### ❌ **Example: Impure Component (Always Re-Renders)**
```jsx
import React, { useState } from "react";

function ImpureComponent({ count }) {
  console.log("Impure Component Rendered!"); // Runs on every parent re-render
  return <h2>Count: {count}</h2>;
}

function Parent() {
  const [num, setNum] = useState(0);

  return (
    <div>
      <ImpureComponent count={5} />  {/* Always re-renders */}
      <button onClick={() => setNum(num + 1)}>Change Parent State</button>
    </div>
  );
}

export default Parent;
```
🔹 **Why Is This an Impure Component?**  
- `ImpureComponent` **always re-renders**, even though `count` **never changes**.  
- It **doesn't optimize re-renders**, wasting resources.

---
## 🔥 **Pure vs Impure Components – Key Differences**
| Feature            | **Pure Component** ✅ | **Impure Component** ❌ |
|--------------------|----------------------|----------------------|
| **Re-renders**     | Only if props/state change | Always re-renders |
| **Performance**    | Optimized with `shouldComponentUpdate` or `React.memo()` | Not optimized |
| **Side Effects**   | No side effects | May have side effects |
| **Prop Changes**   | Uses shallow comparison | No optimizations |
| **State Handling** | Never modifies state directly | May modify state/props directly |

---
## 🏆 **Best Practices**
✔ **Use `React.memo()` for functional components** to prevent unnecessary re-renders.  
✔ **Use `PureComponent` for class components** when props/state updates are minimal.  
✔ **Ensure props and state are immutable** to avoid unnecessary re-renders.  
✔ **Avoid modifying props** inside child components.  

---
## 🎯 **Final Takeaway**
✅ **Use Pure Components to Improve Performance** 🚀  
- They **reduce unnecessary renders**, making the app **faster**.  
- They **help optimize performance** in large React applications.  

❌ **Impure Components Should Be Avoided**  
- They cause **extra renders**, affecting performance.  
- Use **pure functions** and **React.memo()** to **prevent wasteful updates**.  

---
## 🔥 **More Examples of Pure vs Impure Components in React**  

Let's go deeper with more practical examples!

---

## **1️⃣ Pure Functional Component with `React.memo()`**

👉 **Scenario**: A `Message` component receives a prop (`text`). If the `text` does not change, the component **should not re-render**.

```jsx
import React, { useState } from "react";

// Pure Functional Component using React.memo
const Message = React.memo(({ text }) => {
  console.log("Message component rendered!");
  return <h2>{text}</h2>;
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Message text="Hello, Skyy! 👋" />
      <button onClick={() => setCount(count + 1)}>
        Increment Count: {count}
      </button>
    </div>
  );
}

export default App;
```
✅ **What happens?**  
- `Message` **does not re-render** when the button is clicked because `text` remains the same.  
- Only `App` re-renders when `count` changes.  

---

## **2️⃣ Impure Component – Always Re-Renders**
👉 **Scenario**: A `Counter` component always re-renders **even if its props don’t change**.

```jsx
import React, { useState } from "react";

function Counter({ value }) {
  console.log("Counter component rendered!"); // Runs every time!
  return <h2>Counter: {value}</h2>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Counter value={10} /> {/* This will re-render unnecessarily */}
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default App;
```
❌ **Why is this bad?**  
- `Counter` **always re-renders**, even though `value={10}` never changes.  
- Wastes performance unnecessarily.  

✅ **Solution:** Wrap `Counter` in `React.memo()` to **prevent useless re-renders**.

```jsx
const Counter = React.memo(({ value }) => {
  console.log("Counter component rendered!"); // Now runs only if value changes
  return <h2>Counter: {value}</h2>;
});
```

---

## **3️⃣ Pure Class Component Using `PureComponent`**
👉 **Scenario**: We use a **class-based Pure Component** that re-renders **only when needed**.

```jsx
import React, { PureComponent } from "react";

class UserProfile extends PureComponent {
  render() {
    console.log("UserProfile component rendered!");
    return <h2>User: {this.props.name}</h2>;
  }
}

class App extends React.Component {
  state = { age: 25 };

  render() {
    return (
      <div>
        <UserProfile name="Skyy" />
        <button onClick={() => this.setState({ age: this.state.age + 1 })}>
          Increase Age: {this.state.age}
        </button>
      </div>
    );
  }
}

export default App;
```
✅ **What happens?**  
- `UserProfile` does **not re-render** when the age changes because `name` **does not change**.  
- This **saves performance**.

---

## **4️⃣ Impure Class Component – Always Re-Renders**
👉 **Scenario**: The component does **not optimize re-renders** because it uses `Component` instead of `PureComponent`.

```jsx
import React, { Component } from "react";

class UserProfile extends Component {
  render() {
    console.log("UserProfile component rendered!");
    return <h2>User: {this.props.name}</h2>;
  }
}

class App extends React.Component {
  state = { age: 25 };

  render() {
    return (
      <div>
        <UserProfile name="Skyy" /> {/* This re-renders unnecessarily */}
        <button onClick={() => this.setState({ age: this.state.age + 1 })}>
          Increase Age: {this.state.age}
        </button>
      </div>
    );
  }
}

export default App;
```
❌ **Problem**:  
- `UserProfile` **re-renders unnecessarily** even though `name="Skyy"` never changes.  

✅ **Solution:** Use `PureComponent` instead of `Component` to **avoid unnecessary re-renders**.

---

## **5️⃣ Mutating Props – Impure Component**
👉 **Scenario**: A component **modifies its props**, which is an anti-pattern in React.

```jsx
function Profile({ user }) {
  user.name = "Modified Name"; // ❌ BAD: Modifying props
  return <h2>Name: {user.name}</h2>;
}

function App() {
  const user = { name: "Skyy" };

  return <Profile user={user} />;
}

export default App;
```
❌ **Why is this bad?**  
- **Props are read-only** in React!  
- Mutating `user.name` inside `Profile` **modifies the parent’s data**, breaking React’s rules.  

✅ **Solution:** Instead of modifying props, create a **new object**.

```jsx
function Profile({ user }) {
  const newUser = { ...user, name: "Modified Name" }; // ✅ Copy instead of modifying
  return <h2>Name: {newUser.name}</h2>;
}
```

---

## **6️⃣ Using `useCallback` to Avoid Re-Rendering**
👉 **Scenario**: A child component receives a function as a prop. If the function **is not memoized**, it causes re-renders.

```jsx
import React, { useState, useCallback } from "react";

const Button = React.memo(({ onClick }) => {
  console.log("Button Rendered!");
  return <button onClick={onClick}>Click Me</button>;
});

function App() {
  const [count, setCount] = useState(0);

  // Without useCallback, this function is recreated on every render
  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <Button onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default App;
```
✅ **What happens?**  
- `Button` **does not re-render** unnecessarily because `handleClick` is memoized using `useCallback`.

---

## 🚀 **Key Takeaways**
| ✅ **Pure Component** | ❌ **Impure Component** |
|------------------|------------------|
| Renders only if props/state change | Always re-renders |
| Uses `React.memo()` or `PureComponent` | Uses normal `Component` |
| Does not mutate props or state | Modifies props/state directly |
| Better performance & optimization | Wastes performance |

---
## 🔥 **Final Thoughts**
1. **Use `React.memo()`** for functional components.  
2. **Use `PureComponent`** for class-based components.  
3. **Avoid modifying props/state directly** – always create a copy.  
4. **Use `useCallback()`** for memoizing functions.  

---
### **📌 Derived State in React - What, Why & How?**  

### **1️⃣ What is Derived State?**  
Derived state refers to **a piece of state that is computed** from existing state or props **instead of being stored directly** in the component. It helps avoid redundant state updates and keeps state management cleaner.

👉 **Key Idea:** Instead of duplicating data in the component state, we derive it dynamically when needed.

---

### **2️⃣ Why Use Derived State?**
Using derived state properly can:
- ✅ **Prevent unnecessary re-renders** (by computing only when needed).
- ✅ **Avoid storing redundant state**, which can lead to inconsistencies.
- ✅ **Keep components cleaner and more predictable**.

🚨 **Bad Practice:** Storing values in `useState` that can be computed from `props` or `state`.  

---

### **3️⃣ Examples of Derived State in React**
Let’s go through multiple examples to understand how derived state works.

---

### **📌 Example 1: Avoiding Redundant State**
### ❌ **Bad Approach (Using Unnecessary State)**
```jsx
import React, { useState } from "react";

function PriceCalculator({ price, discount }) {
  // ❌ BAD: Keeping derived value in state
  const [finalPrice, setFinalPrice] = useState(price - discount);

  return (
    <div>
      <h2>Price: ${price}</h2>
      <h2>Discount: ${discount}</h2>
      <h2>Final Price: ${finalPrice}</h2>
    </div>
  );
}
```
🚨 **Issue:**  
- If `price` or `discount` changes, we manually need to update `finalPrice` using `useEffect` or other methods.
- This can lead to **inconsistencies** and unnecessary re-renders.

✅ **Better Approach (Using Derived State)**
```jsx
function PriceCalculator({ price, discount }) {
  // ✅ GOOD: Deriving finalPrice instead of storing it in state
  const finalPrice = price - discount;

  return (
    <div>
      <h2>Price: ${price}</h2>
      <h2>Discount: ${discount}</h2>
      <h2>Final Price: ${finalPrice}</h2>
    </div>
  );
}
```
🔥 **Why is this better?**
- No extra state (`useState`) needed.
- `finalPrice` updates **automatically** when `price` or `discount` changes.

---

### **📌 Example 2: Derived State with `useMemo`**
When a derived value is computationally expensive, we can **memoize** it using `useMemo()`.

```jsx
import React, { useMemo, useState } from "react";

function ExpensiveCalculation({ value }) {
  // ✅ useMemo prevents unnecessary re-computation
  const computedValue = useMemo(() => {
    console.log("Calculating...");
    return value * 2; // Imagine this is a heavy computation
  }, [value]);

  return <h2>Computed Value: {computedValue}</h2>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ExpensiveCalculation value={count} />
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default App;
```
🟢 **Benefit:** `computedValue` is only recalculated when `value` changes, improving performance.

---

### **📌 Example 3: Derived State in `getDerivedStateFromProps` (Class Components)**
👉 Before hooks, class components used `getDerivedStateFromProps` to derive state from props.

```jsx
import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uppercaseName: props.name.toUpperCase(), // Derived state
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.name !== prevState.uppercaseName.toLowerCase()) {
      return { uppercaseName: nextProps.name.toUpperCase() };
    }
    return null;
  }

  render() {
    return <h2>User: {this.state.uppercaseName}</h2>;
  }
}

export default function App() {
  return <User name="skyy" />;
}
```
🟢 **Benefit:** React updates `uppercaseName` **only when `props.name` changes**.

🚨 **Downside:** This method is often unnecessary in functional components, as `useMemo` or direct computations are simpler.

---

### **📌 Example 4: Derived State for Filtering Data**
👉 Instead of storing filtered data in `useState`, **derive it dynamically**.

```jsx
import React, { useState } from "react";

function SearchableList({ items }) {
  const [query, setQuery] = useState("");

  // ✅ Derived state: filter the items based on the query
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const items = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
  return <SearchableList items={items} />;
}

export default App;
```
🟢 **Why is this good?**  
- We don’t store `filteredItems` in `useState`.
- It **automatically updates** when `query` changes.

---

### **4️⃣ When to Use Derived State?**
✅ Use **derived state** when:
- A value **can be calculated from props/state**.
- You want to **avoid duplicate state**.
- You want to **optimize performance** using `useMemo()`.
- You’re **filtering, transforming, or sorting** data.

❌ **Don't use derived state when:**
- You need to store user-inputted values (use `useState` instead).
- The derived value is simple and does not need optimization.

---

### **5️⃣ Summary Table**
| ❌ Storing in State | ✅ Using Derived State |
|----------------------|----------------------|
| `const [finalPrice, setFinalPrice] = useState(price - discount);` | `const finalPrice = price - discount;` |
| `const [filteredItems, setFilteredItems] = useState([]);` | `const filteredItems = items.filter(...);` |
| Updates manually when dependencies change | Updates automatically when needed |
| Increases unnecessary re-renders | Optimized performance |
| Can cause bugs & inconsistencies | Clean & predictable |
---

### **6️⃣ Final Thoughts**
- ✅ Derived state **avoids unnecessary state management**.
- ✅ **Always compute values when rendering** instead of storing redundant state.
- ✅ Use **`useMemo()`** if the computation is expensive.
- ✅ If using class components, **`getDerivedStateFromProps()`** is available but rarely needed.
---

## **Lifting State Up in React.js** 🚀

### **🔹 What is Lifting State Up?**
In React, **"lifting state up"** refers to **moving the state from a child component to a common parent component** so that multiple child components can share and access the same state. This ensures that the state remains **synchronized** across different parts of the application.

Since React follows **unidirectional data flow**, **a parent component must manage the shared state and pass it down as props to children.** This technique helps avoid redundant states in multiple components and ensures better state management.

---

### **🔹 Why Do We Lift State Up?**
✅ **State Synchronization:** If multiple child components need the same data, lifting state up prevents data duplication and ensures consistency.  
✅ **Avoiding Conflicting States:** If two sibling components have separate but related states, lifting state up to their parent avoids inconsistencies.  
✅ **Better Code Maintainability:** Keeping state in a single parent makes it easier to debug, update, and manage.  
✅ **Improves Performance:** Avoids unnecessary re-renders caused by maintaining duplicate states in multiple components.  

---

### **🔹 Example of Lifting State Up**
Let's say we have two sibling components:  
1️⃣ A **TextInput** component that allows the user to enter text.  
2️⃣ A **Display** component that shows the entered text.  

Instead of managing state separately in each child component, we **lift state up** to a common parent component.

#### **✅ Before Lifting State Up (Bad Approach)**
Each component has its own state, leading to **inconsistencies**:

```jsx
import React, { useState } from "react";

function TextInput() {
  const [text, setText] = useState("");

  return (
    <input 
      type="text" 
      value={text} 
      onChange={(e) => setText(e.target.value)} 
    />
  );
}

function Display() {
  const [text, setText] = useState(""); // ❌ Separate state - No Sync

  return <h2>Entered Text: {text}</h2>;
}

function App() {
  return (
    <div>
      <TextInput />
      <Display />
    </div>
  );
}

export default App;
```
**❌ Problems:**  
- **Separate states** → No connection between `TextInput` and `Display`.  
- `Display` won't show updates from `TextInput`.  
- Leads to **inconsistent data** between components.

---

#### **✅ After Lifting State Up (Correct Approach)**
Move the state to the **parent component** and pass it down as **props**:

```jsx
import React, { useState } from "react";

function TextInput({ text, setText }) {
  return (
    <input 
      type="text" 
      value={text} 
      onChange={(e) => setText(e.target.value)} 
    />
  );
}

function Display({ text }) {
  return <h2>Entered Text: {text}</h2>;
}

function App() {
  const [text, setText] = useState(""); // ✅ State lifted up to App

  return (
    <div>
      <TextInput text={text} setText={setText} />
      <Display text={text} />
    </div>
  );
}

export default App;
```
**✅ Benefits of Lifting State Up:**  
✔ **Single Source of Truth** → The `App` component manages the state.  
✔ **Better Synchronization** → `TextInput` updates the state, and `Display` receives it via props.  
✔ **Simplifies Debugging** → All state-related logic is in one place.  

---

### **🔹 When Should We Lift State Up?**
✅ When two or more components **depend on the same state**.  
✅ When data needs to be **shared across sibling components**.  
✅ When we want to **avoid redundant state logic** in multiple components.  
✅ When passing down event handlers like `onChange`, `onClick`, etc.  

---

### **🔹 Alternative to Lifting State Up?**
While lifting state up is useful, for **global state management**, it's better to use:  
1️⃣ **Context API** → If the state needs to be shared across multiple components without prop drilling.  
2️⃣ **Redux / Zustand / Jotai / Recoil** → For large-scale applications needing centralized state management.  

---

### **🔹 Summary**
📌 **Lifting state up** means moving state to the **closest common ancestor** to share it among child components.  
📌 It **prevents duplication, improves synchronization, and makes debugging easier**.  
📌 Use it **when multiple components need access to the same state**.  
📌 For larger applications, consider **Context API or Redux** instead.  

---

### **More Examples of Lifting State Up in React 🚀**  

---

## **🔹 Example 1: Counter Shared Between Two Components**
Imagine a scenario where we have two components:  
1️⃣ **IncrementButton** → Increases the counter.  
2️⃣ **DisplayCount** → Displays the updated count.  

### **❌ Bad Approach (State in Separate Components)**
If each component manages its own state, the counter won't sync properly.

```jsx
import React, { useState } from "react";

function IncrementButton() {
  const [count, setCount] = useState(0); // ❌ Local state

  return (
    <button onClick={() => setCount(count + 1)}>Increment</button>
  );
}

function DisplayCount() {
  const [count, setCount] = useState(0); // ❌ Separate state

  return <h2>Counter: {count}</h2>;
}

function App() {
  return (
    <div>
      <IncrementButton />
      <DisplayCount />
    </div>
  );
}

export default App;
```

**🚨 Issues:**  
- **Two separate state variables** → No synchronization.  
- Clicking the button won’t update `DisplayCount`.  

---

### **✅ Good Approach (Lifting State Up)**
We **move the state to the parent (`App`)** and pass it as props to child components.

```jsx
import React, { useState } from "react";

function IncrementButton({ count, setCount }) {
  return (
    <button onClick={() => setCount(count + 1)}>Increment</button>
  );
}

function DisplayCount({ count }) {
  return <h2>Counter: {count}</h2>;
}

function App() {
  const [count, setCount] = useState(0); // ✅ Lifted state up

  return (
    <div>
      <IncrementButton count={count} setCount={setCount} />
      <DisplayCount count={count} />
    </div>
  );
}

export default App;
```

**✅ Benefits:**  
✔ **Single Source of Truth** (State managed in `App`).  
✔ **Counter updates instantly** in both components.  
✔ **Avoids redundant state** in `IncrementButton` and `DisplayCount`.

---

## **🔹 Example 2: Handling Forms with Lifting State Up**
Let's say we have a **form with a username input and a submit button**. Instead of managing state inside the `InputField`, we **lift it up** to the `App` component.

### **✅ Correct Approach (Lifting State Up)**
```jsx
import React, { useState } from "react";

function InputField({ username, setUsername }) {
  return (
    <input
      type="text"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder="Enter your name"
    />
  );
}

function SubmitButton({ username }) {
  return <button disabled={!username}>Submit</button>;
}

function App() {
  const [username, setUsername] = useState(""); // ✅ Lifted state

  return (
    <div>
      <InputField username={username} setUsername={setUsername} />
      <SubmitButton username={username} />
    </div>
  );
}

export default App;
```

**✅ Benefits:**  
✔ `SubmitButton` **knows** when the input is empty.  
✔ **Single state** for both input and button.  
✔ No need for prop drilling; state updates from `InputField` immediately affect `SubmitButton`.  

---

## **🔹 Example 3: Color Picker Shared Across Components**
Imagine an app where a **color picker updates the background color** of a display box.

### **✅ Correct Approach (Lifting State Up)**
```jsx
import React, { useState } from "react";

function ColorPicker({ color, setColor }) {
  return (
    <input
      type="color"
      value={color}
      onChange={(e) => setColor(e.target.value)}
    />
  );
}

function ColorDisplay({ color }) {
  return (
    <div style={{ width: "200px", height: "100px", backgroundColor: color }}>
      Selected Color
    </div>
  );
}

function App() {
  const [color, setColor] = useState("#ff0000"); // ✅ Lifted state

  return (
    <div>
      <ColorPicker color={color} setColor={setColor} />
      <ColorDisplay color={color} />
    </div>
  );
}

export default App;
```

**✅ Benefits:**  
✔ **Color picker and display are always in sync.**  
✔ **State is centralized** in the `App` component.  
✔ **No duplicate state, avoiding unnecessary re-renders.**  

---

## **🔹 When NOT to Lift State Up?**
Lifting state up is useful, but sometimes it's **not the best approach**:
❌ If **only one component** needs the state, keep it **local**.  
❌ If state **doesn’t need to be shared**, lifting it up adds unnecessary complexity.  
❌ If the state is **global**, use **Context API, Redux, Zustand**, etc., instead.  

---

## **🔹 Alternative: Context API Instead of Lifting State Up**
For **larger applications**, manually passing state through props (prop drilling) can be annoying.  
Instead, we can use **React Context API** to manage global state.

```jsx
import React, { createContext, useContext, useState } from "react";

// Create Context
const ColorContext = createContext();

function ColorPicker() {
  const { color, setColor } = useContext(ColorContext);
  return (
    <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
  );
}

function ColorDisplay() {
  const { color } = useContext(ColorContext);
  return (
    <div style={{ width: "200px", height: "100px", backgroundColor: color }}>
      Selected Color
    </div>
  );
}

function App() {
  const [color, setColor] = useState("#ff0000");

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      <ColorPicker />
      <ColorDisplay />
    </ColorContext.Provider>
  );
}

export default App;
```

**✅ Benefits of Context API over Lifting State Up:**  
✔ **Avoids prop drilling** when state is deeply nested.  
✔ **Global access to shared state** without passing props manually.  
✔ **Scales better** for large applications.  

---

## **🔹 Summary**
📌 **Lifting state up** moves the state to the **closest common parent** so multiple child components can use it.  
📌 Helps in **synchronizing data** across components.  
📌 Use it when multiple child components **depend on the same state**.  
📌 **Avoid lifting state up** if the state is **local** to a single component.  
📌 Use **Context API** or **Redux** for **global state management** in larger applications.  

---
