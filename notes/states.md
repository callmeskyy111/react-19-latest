### **📌 What is State in React?**
In **React**, **state** is an object that holds **dynamic data** that determines how a component renders and behaves. It allows components to **remember information** between renders.

Unlike **props**, which are **read-only** and passed from a parent component, **state is managed within a component** and can change over time, triggering a **re-render**.

---

## **🔹 Key Characteristics of State**
✅ **Managed inside a component** – Each component can have its own state.  
✅ **Triggers re-render** – When the state changes, React **re-renders** the component.  
✅ **Mutable (can change over time)** – Unlike props, state can be updated using `useState`.  
✅ **Asynchronous updates** – React batches state updates for performance optimization.

---

## **🔹 How to Use State in Functional Components (Using `useState`)**
React provides the `useState` **hook** to manage state in functional components.

### **🔹 Example 1: Simple Counter Using State**
```jsx
import { useState } from "react";

function Counter() {
  // Declare a state variable 'count' and a function 'setCount' to update it
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1); // Updating state triggers a re-render
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increase</button>
    </div>
  );
}

export default Counter;
```

### **🔍 Breakdown of Code:**
1️⃣ `useState(0)` initializes state with a default value of `0`.  
2️⃣ `count` is the **current state value**.  
3️⃣ `setCount(newValue)` updates the state and triggers a **re-render**.  
4️⃣ `onClick={increment}` updates the state when the button is clicked.

---

## **🔹 State Updates and Re-rendering**
Whenever we call `setState` (or `setCount` in the above example), React:
- **Schedules an update** (state updates are asynchronous).
- **Compares the new state with the previous one**.
- **Re-renders the component** with the updated state.

### **Example: Multiple State Updates**
```jsx
function Example() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Count: {count}</button>;
}
```
🔴 **Issue:** Clicking the button **doesn’t increment by 3** because state updates are **batched and use stale values**.

✅ **Fix Using Functional Updates:**
```jsx
function handleClick() {
  setCount((prevCount) => prevCount + 1);
  setCount((prevCount) => prevCount + 1);
  setCount((prevCount) => prevCount + 1);
}
```
Now `prevCount` ensures that the latest state is used.

---

## **🔹 State vs Props (Key Differences)**

| Feature    | State | Props |
|------------|-------|-------|
| **Definition** | Internal data storage in a component | Data passed from parent to child |
| **Mutability** | Mutable (can be changed using `setState`) | Immutable (read-only) |
| **Who Controls It?** | Controlled by the component itself | Controlled by the parent component |
| **Re-renders?** | Yes, updating state triggers a re-render | Changing props triggers a re-render |
| **Usage** | Used for interactivity (e.g., forms, counters) | Used to pass data between components |

---

## **🔹 State in Class Components (Old Approach)**
Before React Hooks, state was managed inside **class components** using `this.state`.

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 }); // State update triggers re-render
  };

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increase</button>
      </div>
    );
  }
}
```
🔴 **Downside:** More complex syntax (`this.state`, `this.setState`) and `this` binding.

✅ **Hooks (`useState`) in Functional Components** made state management **easier**.

---

## **🔹 State with Objects & Arrays**
State can also hold **objects** and **arrays**.

### **Updating Object State**
```jsx
const [user, setUser] = useState({ name: "Skyy", age: 29 });

function updateName() {
  setUser({ ...user, name: "John" }); // Spread operator to retain old properties
}
```

### **Updating Array State**
```jsx
const [items, setItems] = useState(["Apple", "Banana"]);

function addItem() {
  setItems([...items, "Mango"]); // Add new item while keeping existing items
}
```

---

## **🔹 Common Mistakes with State**
❌ **Directly Modifying State:**
```jsx
count = count + 1;  // ❌ Wrong (does not trigger re-render)
```
✅ **Use `setState()`:**
```jsx
setCount(count + 1);  // ✅ Correct
```

❌ **Not Using Functional Updates When Needed**
```jsx
setCount(count + 1);
setCount(count + 1);  // ❌ This may not work as expected due to batching
```
✅ **Use Functional Updates**
```jsx
setCount(prevCount => prevCount + 1);
setCount(prevCount => prevCount + 1);  // ✅ Works correctly
```

---

## **🔹 Conclusion**
- **State** allows components to store and manage dynamic data.
- `useState` is used in functional components to **initialize, read, and update** state.
- **Updating state triggers re-renders**, updating the UI.
- **State updates are asynchronous** and React may batch multiple updates for performance.
- Always **use `setState` instead of modifying state directly**.

---
# **📌 `useState` in React – Detailed Explanation**  

In **React**, the `useState` hook is used to **manage state** in functional components. Before React Hooks, state was only available in **class components** using `this.state` and `this.setState()`. However, `useState` made it much **simpler** to work with state in functional components.  

---

## **🔹 What is `useState`?**
`useState` is a **React Hook** that lets us add **state** to functional components. It allows us to **store values**, update them, and trigger re-renders when the state changes.  

### **🔍 Syntax**
```jsx
const [state, setState] = useState(initialValue);
```
🔹 `state` → Holds the **current value** of the state.  
🔹 `setState` → A **function** used to update the state.  
🔹 `initialValue` → The **default value** of the state (can be a number, string, boolean, object, array, etc.).

---

## **🔹 Example: Counter App**
```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // Initialize state with 0

  function increment() {
    setCount(count + 1); // Update state
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increase</button>
    </div>
  );
}

export default Counter;
```
### **🔍 How It Works?**
1️⃣ **`useState(0)`** → Initializes `count` with `0`.  
2️⃣ **`setCount(count + 1)`** → Updates state when the button is clicked.  
3️⃣ **Re-render occurs** → React updates the UI with the new `count`.  

---

## **🔹 Updating State Correctly**
State updates in React **are not immediate**; they are **asynchronous** and can be **batched** for performance optimization.

### **Incorrect State Update**
```jsx
const [count, setCount] = useState(0);

function handleClick() {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
}
```
📌 **Issue:** Even though `setCount` is called **three times**, the state **only increases by 1** because React batches updates.

✅ **Solution: Use Functional Updates**
```jsx
function handleClick() {
  setCount(prevCount => prevCount + 1);
  setCount(prevCount => prevCount + 1);
  setCount(prevCount => prevCount + 1);
}
```
📌 Now, `prevCount` ensures each update gets the latest state, so **the count increases by 3**.

---

## **🔹 Using `useState` with Objects**
State can also store **objects**.

### **Example: Updating an Object in State**
```jsx
const [user, setUser] = useState({ name: "Skyy", age: 29 });

function updateName() {
  setUser({ ...user, name: "John" }); // Spread operator retains other properties
}

return (
  <div>
    <h2>Name: {user.name}</h2>
    <button onClick={updateName}>Change Name</button>
  </div>
);
```
### **Why Use the Spread Operator (`...user`)?**
❌ **Incorrect:**
```jsx
setUser({ name: "John" });  // This removes the `age` property!
```
✅ **Correct:**
```jsx
setUser({ ...user, name: "John" });  // Keeps existing properties
```

---

## **🔹 Using `useState` with Arrays**
State can store **arrays**, and we must update them **immutably**.

### **Example: Adding Items to an Array**
```jsx
const [items, setItems] = useState(["Apple", "Banana"]);

function addItem() {
  setItems([...items, "Mango"]); // Creates a new array with the new item
}

return (
  <div>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    <button onClick={addItem}>Add Mango</button>
  </div>
);
```
### **Why Use `[...items, "Mango"]`?**
❌ **Incorrect:**
```jsx
items.push("Mango");  // Mutating the array directly will NOT trigger a re-render!
setItems(items);
```
✅ **Correct:**
```jsx
setItems([...items, "Mango"]);  // Creates a NEW array, triggering a re-render
```

---

## **🔹 Lazy Initialization of `useState`**
Sometimes, initializing state **lazily** (only once) is more efficient.

### **Example: Lazy Initialization**
```jsx
const [count, setCount] = useState(() => {
  console.log("Calculating initial state...");
  return 10;
});
```
🔹 Here, the function inside `useState(() => {...})` runs **only on the first render**, **not on every re-render**.

---

## **🔹 State vs Props (Key Differences)**

| Feature    | State | Props |
|------------|-------|-------|
| **Definition** | Internal data storage in a component | Data passed from parent to child |
| **Mutability** | Mutable (can change using `setState`) | Immutable (read-only) |
| **Who Controls It?** | Controlled by the component itself | Controlled by the parent component |
| **Re-renders?** | Yes, updating state triggers a re-render | Changing props triggers a re-render |
| **Usage** | Used for interactivity (e.g., forms, counters) | Used to pass data between components |

---

## **🔹 Common Mistakes with `useState`**
❌ **Modifying State Directly**
```jsx
count = count + 1;  // ❌ Wrong (does not trigger re-render)
```
✅ **Use `setState()`**
```jsx
setCount(count + 1);  // ✅ Correct
```

❌ **Forgetting Functional Updates in State Updates**
```jsx
setCount(count + 1);
setCount(count + 1);  // ❌ May not work correctly due to batching
```
✅ **Use Functional Updates**
```jsx
setCount(prevCount => prevCount + 1);
setCount(prevCount => prevCount + 1);  // ✅ Works correctly
```

---

## **🔹 Conclusion**
- `useState` is a **hook** that allows **functional components** to manage **state**.
- **State updates are asynchronous**, and React may batch them for performance.
- Always **use `setState()`** instead of modifying state directly.
- **For objects/arrays**, always **create a new copy** instead of modifying state directly.
- **Use functional updates (`prevState`)** to ensure state updates correctly when based on the previous state.

---
# **📌 `useState` in React – Detailed Explanation**  

In **React**, the `useState` hook is used to **manage state** in functional components. Before React Hooks, state was only available in **class components** using `this.state` and `this.setState()`. However, `useState` made it much **simpler** to work with state in functional components.  

---

## **🔹 What is `useState`?**
`useState` is a **React Hook** that lets us add **state** to functional components. It allows us to **store values**, update them, and trigger re-renders when the state changes.  

### **🔍 Syntax**
```jsx
const [state, setState] = useState(initialValue);
```
🔹 `state` → Holds the **current value** of the state.  
🔹 `setState` → A **function** used to update the state.  
🔹 `initialValue` → The **default value** of the state (can be a number, string, boolean, object, array, etc.).

---

## **🔹 Example: Counter App**
```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // Initialize state with 0

  function increment() {
    setCount(count + 1); // Update state
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increase</button>
    </div>
  );
}

export default Counter;
```
### **🔍 How It Works?**
1️⃣ **`useState(0)`** → Initializes `count` with `0`.  
2️⃣ **`setCount(count + 1)`** → Updates state when the button is clicked.  
3️⃣ **Re-render occurs** → React updates the UI with the new `count`.  

---

## **🔹 Updating State Correctly**
State updates in React **are not immediate**; they are **asynchronous** and can be **batched** for performance optimization.

### **Incorrect State Update**
```jsx
const [count, setCount] = useState(0);

function handleClick() {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
}
```
📌 **Issue:** Even though `setCount` is called **three times**, the state **only increases by 1** because React batches updates.

✅ **Solution: Use Functional Updates**
```jsx
function handleClick() {
  setCount(prevCount => prevCount + 1);
  setCount(prevCount => prevCount + 1);
  setCount(prevCount => prevCount + 1);
}
```
📌 Now, `prevCount` ensures each update gets the latest state, so **the count increases by 3**.

---

## **🔹 Using `useState` with Objects**
State can also store **objects**.

### **Example: Updating an Object in State**
```jsx
const [user, setUser] = useState({ name: "Skyy", age: 29 });

function updateName() {
  setUser({ ...user, name: "John" }); // Spread operator retains other properties
}

return (
  <div>
    <h2>Name: {user.name}</h2>
    <button onClick={updateName}>Change Name</button>
  </div>
);
```
### **Why Use the Spread Operator (`...user`)?**
❌ **Incorrect:**
```jsx
setUser({ name: "John" });  // This removes the `age` property!
```
✅ **Correct:**
```jsx
setUser({ ...user, name: "John" });  // Keeps existing properties
```

---

## **🔹 Using `useState` with Arrays**
State can store **arrays**, and we must update them **immutably**.

### **Example: Adding Items to an Array**
```jsx
const [items, setItems] = useState(["Apple", "Banana"]);

function addItem() {
  setItems([...items, "Mango"]); // Creates a new array with the new item
}

return (
  <div>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    <button onClick={addItem}>Add Mango</button>
  </div>
);
```
### **Why Use `[...items, "Mango"]`?**
❌ **Incorrect:**
```jsx
items.push("Mango");  // Mutating the array directly will NOT trigger a re-render!
setItems(items);
```
✅ **Correct:**
```jsx
setItems([...items, "Mango"]);  // Creates a NEW array, triggering a re-render
```

---

## **🔹 Lazy Initialization of `useState`**
Sometimes, initializing state **lazily** (only once) is more efficient.

### **Example: Lazy Initialization**
```jsx
const [count, setCount] = useState(() => {
  console.log("Calculating initial state...");
  return 10;
});
```
🔹 Here, the function inside `useState(() => {...})` runs **only on the first render**, **not on every re-render**.

---

## **🔹 State vs Props (Key Differences)**

| Feature    | State | Props |
|------------|-------|-------|
| **Definition** | Internal data storage in a component | Data passed from parent to child |
| **Mutability** | Mutable (can change using `setState`) | Immutable (read-only) |
| **Who Controls It?** | Controlled by the component itself | Controlled by the parent component |
| **Re-renders?** | Yes, updating state triggers a re-render | Changing props triggers a re-render |
| **Usage** | Used for interactivity (e.g., forms, counters) | Used to pass data between components |

---

## **🔹 Common Mistakes with `useState`**
❌ **Modifying State Directly**
```jsx
count = count + 1;  // ❌ Wrong (does not trigger re-render)
```
✅ **Use `setState()`**
```jsx
setCount(count + 1);  // ✅ Correct
```

❌ **Forgetting Functional Updates in State Updates**
```jsx
setCount(count + 1);
setCount(count + 1);  // ❌ May not work correctly due to batching
```
✅ **Use Functional Updates**
```jsx
setCount(prevCount => prevCount + 1);
setCount(prevCount => prevCount + 1);  // ✅ Works correctly
```

---

## **🔹 Conclusion**
- `useState` is a **hook** that allows **functional components** to manage **state**.
- **State updates are asynchronous**, and React may batch them for performance.
- Always **use `setState()`** instead of modifying state directly.
- **For objects/arrays**, always **create a new copy** instead of modifying state directly.
- **Use functional updates (`prevState`)** to ensure state updates correctly when based on the previous state.

---
### **📌 Using `useState` in a Form (React Example)**  
Let’s build a **controlled form** in React using `useState`. The form will allow users to enter **name, email, and password** and submit the data.

---

## **🔹 Full Code Example**
```jsx
import React, { useState } from "react";

function SignupForm() {
  // Managing form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle input change
  function handleChange(event) {
    const { name, value } = event.target; // Get the input's name and value
    setFormData({ ...formData, [name]: value }); // Update state dynamically
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent page refresh
    console.log("Form Data Submitted:", formData);
  }

  return (
    <div>
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        {/* Email Input */}
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        {/* Password Input */}
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        {/* Submit Button */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default SignupForm;
```

---

## **🔹 Explanation**
### **1️⃣ `useState` to Store Form Data**
```jsx
const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: "",
});
```
📌 This initializes an object with **empty values** for name, email, and password.

---

### **2️⃣ Handling Input Changes Dynamically**
```jsx
function handleChange(event) {
  const { name, value } = event.target;
  setFormData({ ...formData, [name]: value });
}
```
📌 The function dynamically updates the correct state field using the **input’s `name`**.

❌ **Incorrect Approach**
```jsx
setFormData({ name: event.target.value }); // ❌ Overwrites other fields
```
✅ **Correct Approach (Using Spread Operator `...formData`)**
```jsx
setFormData({ ...formData, [name]: value }); // ✅ Keeps other fields unchanged
```

---

### **3️⃣ Preventing Default Form Submission Behavior**
```jsx
function handleSubmit(event) {
  event.preventDefault(); // Prevents page refresh
  console.log("Form Data Submitted:", formData);
}
```
📌 This ensures React handles the form submission **without reloading** the page.

---

## **🔹 Making the Form More User-Friendly**
### ✅ **Adding Validation**
```jsx
function handleSubmit(event) {
  event.preventDefault();
  if (!formData.name || !formData.email || !formData.password) {
    alert("All fields are required!");
    return;
  }
  console.log("Form Data Submitted:", formData);
}
```

---

### ✅ **Clearing the Form After Submission**
```jsx
function handleSubmit(event) {
  event.preventDefault();
  if (!formData.name || !formData.email || !formData.password) {
    alert("All fields are required!");
    return;
  }
  console.log("Form Submitted:", formData);
  setFormData({ name: "", email: "", password: "" }); // Reset form
}
```
📌 After submission, `setFormData({...})` resets the form **to empty values**.

---

## **🔹 Conclusion**
- **`useState` stores the form data** as an object.
- **Event handlers update the state dynamically** for each input field.
- **Controlled forms ensure React manages the input state** rather than relying on the DOM.
- **Preventing default form submission** avoids unnecessary page reloads.

### **✅ Adding Email & Password Validation in React Form**  
We’ll enhance our **React form** with **real-time validation** for:  
1️⃣ **Email Format Check**  
2️⃣ **Password Strength Check**  

---

## **🔹 Full Code with Validation**
```jsx
import React, { useState } from "react";

function SignupForm() {
  // Managing form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Managing validation errors
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // Handle input change
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    // Perform validation
    if (name === "email") validateEmail(value);
    if (name === "password") validatePassword(value);
  }

  // Email validation function
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard email format
    if (!emailRegex.test(email)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email format!" }));
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  }

  // Password validation function
  function validatePassword(password) {
    if (password.length < 6) {
      setErrors((prev) => ({
        ...prev,
        password: "Password must be at least 6 characters!",
      }));
    } else {
      setErrors((prev) => ({ ...prev, password: "" }));
    }
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    // Final validation check
    if (!formData.name || !formData.email || !formData.password) {
      alert("All fields are required!");
      return;
    }
    if (errors.email || errors.password) {
      alert("Please fix the errors before submitting!");
      return;
    }

    console.log("Form Submitted:", formData);
    setFormData({ name: "", email: "", password: "" }); // Reset form
  }

  return (
    <div>
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        {/* Email Input */}
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        {/* Password Input */}
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

        {/* Submit Button */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default SignupForm;
```

---

## **🔹 Explanation**
### **✅ 1. Real-time Email Validation**
```jsx
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setErrors((prev) => ({ ...prev, email: "Invalid email format!" }));
  } else {
    setErrors((prev) => ({ ...prev, email: "" }));
  }
}
```
- Checks if the email matches a **standard email pattern**.
- If **invalid**, an error message appears **below the email field**.

---

### **✅ 2. Password Strength Validation**
```jsx
function validatePassword(password) {
  if (password.length < 6) {
    setErrors((prev) => ({
      ...prev,
      password: "Password must be at least 6 characters!",
    }));
  } else {
    setErrors((prev) => ({ ...prev, password: "" }));
  }
}
```
- Ensures the password is at **least 6 characters**.
- If **too short**, an error message appears.

---

### **✅ 3. Preventing Submission with Errors**
```jsx
if (errors.email || errors.password) {
  alert("Please fix the errors before submitting!");
  return;
}
```
- If validation **fails**, submission is blocked.
- The user must correct errors before submitting.

---

## **🔹 Example Validation in Action**
| Input | Error Message |
|------|--------------|
| `johndoe@gmail` | ❌ Invalid email format |
| `123` | ❌ Password must be at least 6 characters |
| `johndoe@gmail.com` | ✅ (Valid email) |
| `mypassword123` | ✅ (Valid password) |

---

## **🔥 Bonus: Stronger Password Validation**
If we want **stronger password security**, we can add these rules:
✅ At least **one uppercase letter**  
✅ At least **one number**  
✅ At least **one special character (@, #, etc.)**  

**Updated Password Validation:**
```jsx
function validatePassword(password) {
  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!strongPasswordRegex.test(password)) {
    setErrors((prev) => ({
      ...prev,
      password:
        "Password must be at least 8 characters, include one uppercase letter, one number, and one special character!",
    }));
  } else {
    setErrors((prev) => ({ ...prev, password: "" }));
  }
}
```

---

## **🎯 Final Thoughts**
✔️ We built a **React form** with **real-time validation** using `useState`.  
✔️ We **prevent form submission** if the data is incorrect.  
✔️ We **display validation messages** dynamically.  

### **📌 Controlling Radio Buttons, Checkboxes, and Select Tags in React**  

In React, form elements like **radio buttons, checkboxes, and `<select>` dropdowns** are usually controlled components, meaning their values are stored in React state.  

---

## **🔹 1. Controlling Radio Buttons in React**
Radio buttons allow users to select **one option** from a group. In React, we store the selected value in **state**.

### **✅ Example: Controlled Radio Buttons**
```jsx
import { useState } from "react";

function RadioButtons() {
  const [gender, setGender] = useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div>
      <h2>Select Gender:</h2>
      <label>
        <input 
          type="radio" 
          value="male" 
          checked={gender === "male"} 
          onChange={handleChange} 
        />
        Male
      </label>
      <label>
        <input 
          type="radio" 
          value="female" 
          checked={gender === "female"} 
          onChange={handleChange} 
        />
        Female
      </label>
      <p>Selected: {gender}</p>
    </div>
  );
}

export default RadioButtons;
```
### **🔹 Explanation:**
✔ **Controlled with state (`gender`)** → Ensures only one radio button is selected at a time.  
✔ **`checked` attribute** → Ensures the radio button reflects the state value.  
✔ **`onChange` handler** → Updates state when selection changes.  

---

## **🔹 2. Controlling Checkboxes in React**
Checkboxes allow users to **select multiple options**. We store selected values in an **array inside state**.

### **✅ Example: Controlled Checkboxes**
```jsx
import { useState } from "react";

function CheckboxGroup() {
  const [selectedHobbies, setSelectedHobbies] = useState([]);

  const handleChange = (event) => {
    const { value, checked } = event.target;
    setSelectedHobbies((prevHobbies) =>
      checked ? [...prevHobbies, value] : prevHobbies.filter((hobby) => hobby !== value)
    );
  };

  return (
    <div>
      <h2>Select Hobbies:</h2>
      <label>
        <input type="checkbox" value="reading" onChange={handleChange} />
        Reading
      </label>
      <label>
        <input type="checkbox" value="traveling" onChange={handleChange} />
        Traveling
      </label>
      <label>
        <input type="checkbox" value="gaming" onChange={handleChange} />
        Gaming
      </label>
      <p>Selected Hobbies: {selectedHobbies.join(", ")}</p>
    </div>
  );
}

export default CheckboxGroup;
```
### **🔹 Explanation:**
✔ **Stores selected options in an array (`selectedHobbies`)**.  
✔ **`checked` determines whether the checkbox is selected.**  
✔ **`onChange` handler** → Adds/removes values from the array when clicked.  

---

## **🔹 3. Controlling `<select>` Dropdown in React**
The `<select>` tag lets users choose an option from a dropdown.

### **✅ Example: Controlled `<select>` Dropdown**
```jsx
import { useState } from "react";

function SelectBox() {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div>
      <h2>Select a Country:</h2>
      <select value={selectedCountry} onChange={handleChange}>
        <option value="">--Select--</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
      </select>
      <p>Selected Country: {selectedCountry}</p>
    </div>
  );
}

export default SelectBox;
```
### **🔹 Explanation:**
✔ **Controlled with state (`selectedCountry`)** → Reflects the chosen option.  
✔ **`value` in `<select>`** → Always matches state value.  
✔ **`onChange` handler** → Updates state when an option is selected.  

---

## **🌟 Summary:**
| **Form Element** | **State Type** | **How It Works?** |
|-----------------|--------------|----------------|
| **Radio Buttons** | Single value (`string`) | One option at a time (`checked` determines selection) |
| **Checkboxes** | Array (`[]`) | Multiple selections, stores values in an array |
| **Select Dropdown** | Single value (`string`) | One option at a time (`value` in `<select>`) |

### **📌 Understanding Array & Object State Manipulation in React**
State manipulation in React, especially for arrays and objects, requires **immutability**. Since React’s `useState` does not perform a deep merge, we must manually update the state while ensuring we do **not mutate the original state**.

---

## **1️⃣ Object State Manipulation**
Objects in React state should always be updated using the **spread operator (`...`)** or the **functional update pattern** to maintain immutability.

### **🔹 Updating a Simple Object in State**
Let's say we have a state object for a user:
```jsx
const [user, setUser] = useState({
  name: "Skyy",
  age: 29,
  location: "Kolkata",
});
```

#### ✅ **Updating a Single Property**
We use the **spread operator (`...user`)** to copy existing properties while modifying only the required field.

```jsx
setUser((prevUser) => ({
  ...prevUser,
  age: 30, // Updating only the 'age' property
}));
```

#### ✅ **Updating via Input Field (Generic Approach)**
```jsx
const handleChange = (e) => {
  const { name, value } = e.target;
  setUser((prevUser) => ({
    ...prevUser,
    [name]: value, // Dynamic property update
  }));
};
```
```jsx
<input type="text" name="name" value={user.name} onChange={handleChange} />
<input type="number" name="age" value={user.age} onChange={handleChange} />
```
---

### **🔹 Updating Nested Objects**
If a state contains a nested object, React does **not** deeply merge it. You must manually update each nested level.

```jsx
const [user, setUser] = useState({
  name: "Skyy",
  address: { city: "Kolkata", country: "India" },
});
```

#### ✅ **Updating Nested State (Correct Way)**
```jsx
setUser((prevUser) => ({
  ...prevUser,
  address: { ...prevUser.address, city: "Delhi" }, // Preserve `country`
}));
```

#### ❌ **Mutating State (Incorrect)**
```jsx
user.address.city = "Delhi"; // ❌ This mutates the original object.
setUser(user); // ❌ React might not detect this change.
```
---

## **2️⃣ Array State Manipulation**
Arrays should also be updated **immutably**, using methods like `.map()`, `.filter()`, `.concat()`, and the spread operator (`[...]`).

### **🔹 Adding an Item to an Array**
```jsx
const [skills, setSkills] = useState(["React", "JavaScript"]);

// ✅ Correct way (Immutable)
setSkills((prevSkills) => [...prevSkills, "Node.js"]);
```

### **🔹 Removing an Item from an Array**
```jsx
setSkills((prevSkills) => prevSkills.filter((skill) => skill !== "JavaScript"));
```

### **🔹 Updating an Item in an Array**
Using `.map()` to update a specific element.
```jsx
setSkills((prevSkills) =>
  prevSkills.map((skill) => (skill === "React" ? "Next.js" : skill))
);
```

### **🔹 Updating an Object Inside an Array**
Example: Updating an object inside an array of users.
```jsx
const [users, setUsers] = useState([
  { id: 1, name: "Skyy", age: 29 },
  { id: 2, name: "Alice", age: 25 },
]);

setUsers((prevUsers) =>
  prevUsers.map((user) =>
    user.id === 1 ? { ...user, age: 30 } : user
  )
);
```

---

## **3️⃣ Handling Complex State Updates**
For deeply nested state structures, **useReducer** is often a better choice than `useState`.

Example: **Managing a complex form with nested objects and arrays**
```jsx
const [profile, setProfile] = useState({
  name: "Skyy",
  details: {
    age: 29,
    address: {
      city: "Kolkata",
      country: "India",
    },
  },
  skills: ["React", "Node.js"],
});
```

### **🔹 Updating Nested Properties & Arrays Dynamically**
```jsx
const updateProfile = (key, value) => {
  setProfile((prevProfile) => ({
    ...prevProfile,
    details: { ...prevProfile.details, [key]: value },
  }));
};

updateProfile("age", 30);
```

---

## **⚡ Key Takeaways**
1. **Never mutate state directly**. Always use spread operators (`...`) or immutable methods (`map()`, `filter()`, etc.).
2. **For objects**, always spread existing properties before updating.
3. **For arrays**, use `.map()` for updates, `.filter()` for removals, and `[...arr, newItem]` for additions.
4. **For deeply nested objects**, manually update each level or consider `useReducer`.

---