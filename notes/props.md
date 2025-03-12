## **🔹 What are Props in React?**  
**Props (short for "Properties")** are **read-only inputs** that allow us to pass data **from a parent component to a child component** in React.  

👉 **Props help make components reusable** by allowing different values to be passed dynamically.  
👉 **Props are immutable** (cannot be changed inside the child component).  
👉 **They are similar to function parameters**, where a parent component passes data to a child component.  

---

## **🔹 Why Do We Need Props?**
🚀 **1. Makes Components Reusable**  
   - Props allow us to **reuse components** with different data.  
   - Example: A `<Button>` component can receive a **label prop** to display different text.

🚀 **2. Helps in Parent-Child Communication**  
   - Data can be **passed from a parent component to a child** using props.

🚀 **3. Dynamic UI Rendering**  
   - UI components can **adapt dynamically** based on the props they receive.

---

## **🔹 How Do Props Work?**
### **1️⃣ Passing Props from Parent to Child**
```jsx
import React from "react";

function Welcome(props) {
  return <h2>Hello, {props.name}!</h2>;
}

function App() {
  return <Welcome name="Skyy" />;
}

export default App;
```
🔹 **Parent Component (`App`)** passes `"Skyy"` as the `name` prop to `Welcome`.  
🔹 **Child Component (`Welcome`)** receives the prop via `props.name`.  

---

### **2️⃣ Using Destructuring for Props**
```jsx
function Welcome({ name }) {
  return <h2>Hello, {name}!</h2>;
}
```
🔹 **Instead of `props.name`**, we can directly extract `{ name }` using **destructuring**.

---

### **3️⃣ Passing Multiple Props**
```jsx
function UserProfile({ name, age }) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

function App() {
  return <UserProfile name="Skyy" age={29} />;
}

export default App;
```
🔹 Multiple props (`name` and `age`) are passed to the `UserProfile` component.

---

### **4️⃣ Default Props (Handling Missing Props)**
```jsx
function Greeting({ message = "Welcome to React!" }) {
  return <h2>{message}</h2>;
}

function App() {
  return <Greeting />; // No message prop passed, so default is used
}

export default App;
```
🔹 **If a prop is not provided**, we can set a **default value**.

---

### **5️⃣ Passing Functions as Props (Callback Props)**
```jsx
function Button({ handleClick }) {
  return <button onClick={handleClick}>Click Me</button>;
}

function App() {
  const showMessage = () => {
    alert("Button Clicked!");
  };

  return <Button handleClick={showMessage} />;
}

export default App;
```
🔹 The **parent (`App`) passes a function (`showMessage`)** as a prop to the child (`Button`).  
🔹 The child component executes the function when clicked.

---

### **6️⃣ Passing JSX Elements as Props (Children Props)**
```jsx
function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}

function App() {
  return (
    <Card title="React Props">
      <p>This is inside the Card component!</p>
    </Card>
  );
}

export default App;
```
🔹 **`children` prop** lets us **pass JSX elements inside a component**.

---

## **🔹 Props vs State**
| Feature  | Props | State |
|----------|-------|-------|
| Mutability | **Immutable** (cannot be changed) | **Mutable** (can be updated) |
| Scope | Passed from **parent to child** | Managed within the **same component** |
| Usage | Used for **passing data** to components | Used for **handling component data & behavior** |
| Modifiable Inside Component? | ❌ No | ✅ Yes |

---

## **🎯 Summary**
✔️ **Props are used to pass data from parent to child components.**  
✔️ **Props are immutable** (they cannot be changed inside the child component).  
✔️ **We can pass strings, numbers, objects, functions, or JSX elements as props.**  
✔️ **Props make components dynamic and reusable.**  

Here are some commonly asked **React interview questions on Props**, along with their **answers**:

---

## **🔹 1. What are props in React?**
### **Answer:**  
Props (short for **"properties"**) are **read-only inputs** that allow data to be passed **from a parent component to a child component** in React. They help make components reusable and dynamic.

Example:
```jsx
function Welcome(props) {
  return <h2>Hello, {props.name}!</h2>;
}

function App() {
  return <Welcome name="Skyy" />;
}
```
Here, `"Skyy"` is passed as a **prop** to the `Welcome` component.

---

## **🔹 2. What is the difference between Props and State?**
### **Answer:**
| Feature  | Props | State |
|----------|-------|-------|
| Mutability | **Immutable** (cannot be changed) | **Mutable** (can be updated) |
| Scope | Passed from **parent to child** | Managed within the **same component** |
| Usage | Used for **passing data** to components | Used for **handling component data & behavior** |
| Modifiable Inside Component? | ❌ No | ✅ Yes |

---

## **🔹 3. Are props immutable in React?**
### **Answer:**  
Yes, **props are immutable** in React.  
A child component **cannot modify the props** received from its parent.

❌ **Incorrect (Modifying Props - Will Cause Error)**:
```jsx
function Welcome(props) {
  props.name = "John";  // ❌ ERROR! Props cannot be changed
  return <h2>Hello, {props.name}!</h2>;
}
```
✅ **Correct Way: Pass Updated Props from Parent**
```jsx
function App() {
  const newName = "John";
  return <Welcome name={newName} />;
}
```

---

## **🔹 4. Can props be passed from child to parent?**
### **Answer:**  
No, **props flow only from parent to child (unidirectional data flow)**.  
However, we can pass a **callback function as a prop** to allow a child component to communicate with the parent.

✅ **Example: Passing Data from Child to Parent**
```jsx
function Child({ sendData }) {
  return <button onClick={() => sendData("Hello from Child!")}>Click Me</button>;
}

function Parent() {
  const handleData = (data) => alert(data);

  return <Child sendData={handleData} />;
}
```
Here, `sendData` is a **prop function** that the child calls to send data to the parent.

---

## **🔹 5. What happens if you do not pass a required prop?**
### **Answer:**  
If a required prop is missing, the component will **still render**, but it may behave unexpectedly.

✅ **Solution: Use Default Props**
```jsx
function Greeting({ message = "Hello, World!" }) {
  return <h2>{message}</h2>;
}

function App() {
  return <Greeting />;  // No message prop passed, so default is used
}
```
Here, `"Hello, World!"` will be displayed as the default message.

---

## **🔹 6. How can you pass multiple props in React?**
### **Answer:**  
We can pass multiple props as attributes inside a component:
```jsx
function User({ name, age }) {
  return (
    <h2>{name} is {age} years old.</h2>
  );
}

function App() {
  return <User name="Skyy" age={29} />;
}
```

---

## **🔹 7. What is the "children" prop in React?**
### **Answer:**  
The `children` prop allows us to pass **JSX elements inside a component**.

✅ **Example:**
```jsx
function Card({ title, children }) {
  return (
    <div>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}

function App() {
  return (
    <Card title="React Props">
      <p>This is inside the Card component!</p>
    </Card>
  );
}
```
Here, `<p>This is inside the Card component!</p>` is passed as `children`.

---

## **🔹 8. Can props be functions in React?**
### **Answer:**  
Yes! We can pass **functions as props** (callback functions).

✅ **Example:**
```jsx
function Button({ onClick }) {
  return <button onClick={onClick}>Click Me</button>;
}

function App() {
  const handleClick = () => alert("Button Clicked!");
  
  return <Button onClick={handleClick} />;
}
```
Here, `handleClick` is passed as a prop and executed when the button is clicked.

---

## **🔹 9. How do you validate props in React?**
### **Answer:**  
React provides **PropTypes** to validate the type of props.

✅ **Example:**
```jsx
import PropTypes from "prop-types";

function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}

// Prop validation
Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

function App() {
  return <Greeting name="Skyy" />;
}
```
If the wrong type is passed, React will **show a warning in the console**.

---

## **🔹 10. Can we pass objects and arrays as props in React?**
### **Answer:**  
Yes! We can pass **objects and arrays** as props.

✅ **Example (Passing an Object):**
```jsx
function Profile({ user }) {
  return <h2>{user.name} is {user.age} years old.</h2>;
}

function App() {
  const userInfo = { name: "Skyy", age: 29 };
  
  return <Profile user={userInfo} />;
}
```

✅ **Example (Passing an Array):**
```jsx
function List({ items }) {
  return (
    <ul>
      {items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );
}

function App() {
  return <List items={["Apple", "Banana", "Cherry"]} />;
}
```

---

## **🔹 11. What is the difference between props and context API?**
### **Answer:**  
| Feature  | Props | Context API |
|----------|-------|------------|
| Scope | Passed **from parent to child** | Accessible **by any component** |
| Data Flow | **Unidirectional** (top-down) | Can be accessed **anywhere in the tree** |
| Use Case | Used for **small-scale** data passing | Used for **global state management** |
| Example | `<Child prop={value} />` | `useContext(MyContext)` |

✅ **Props Example:**
```jsx
<Child value="Hello" />
```

✅ **Context Example:**
```jsx
const ThemeContext = React.createContext();
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Child />
    </ThemeContext.Provider>
  );
}
function Child() {
  const theme = useContext(ThemeContext);
  return <p>Theme: {theme}</p>;
}
```

---

## **🎯 Final Takeaways on Props**
✔️ **Props help pass data from parent to child components.**  
✔️ **They are immutable** (cannot be changed inside the child component).  
✔️ **We can pass functions, arrays, objects, and even JSX as props.**  
✔️ **For prop validation, we can use `PropTypes`.**  
✔️ **When props are deeply nested, use the Context API instead.**  

### **How to Send Props from Child to Parent in React?**
Props in React are **unidirectional**, meaning they flow **from parent to child** by default. However, we can send data **from child to parent** by passing a **callback function** from the parent to the child.

---

## **🔹 Steps to Send Props from Child to Parent**
1️⃣ **Define a function in the parent component** that will handle data received from the child.  
2️⃣ **Pass the function as a prop** to the child component.  
3️⃣ **Call the function inside the child component** and pass the data as an argument.  

---

## **✅ Example: Sending Data from Child to Parent**
### **📌 Scenario:**  
We have a **Parent component** that contains a **Child component**. When we click a button in the child component, we send a message back to the parent.

### **Step 1: Parent Component (Define the Callback Function)**
```jsx
import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [message, setMessage] = useState("");

  // Function to receive data from child
  const handleChildData = (data) => {
    setMessage(data);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Message from Child: {message}</p>
      {/* Pass function as a prop to the child */}
      <Child sendData={handleChildData} />
    </div>
  );
}

export default Parent;
```

---

### **Step 2: Child Component (Call the Function with Data)**
```jsx
import React from "react";

function Child({ sendData }) {
  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={() => sendData("Hello from Child!")}>Send Message</button>
    </div>
  );
}

export default Child;
```

---

## **🔹 Explanation**
- In `Parent.js`, we define a function `handleChildData` that updates the `message` state.
- We pass `handleChildData` as a **prop** (`sendData`) to the `Child` component.
- In `Child.js`, when the button is clicked, `sendData("Hello from Child!")` is executed, sending `"Hello from Child!"` to the parent.
- The parent receives this data and updates its state, displaying the message.

---

## **✅ Another Example: Sending Form Data from Child to Parent**
### **📌 Scenario:**  
A child component contains a form where a user enters their name. When the form is submitted, the name is sent to the parent component.

### **Step 1: Parent Component**
```jsx
import React, { useState } from "react";
import ChildForm from "./ChildForm";

function Parent() {
  const [userName, setUserName] = useState("");

  const handleUserName = (name) => {
    setUserName(name);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>User Name: {userName}</p>
      <ChildForm sendName={handleUserName} />
    </div>
  );
}

export default Parent;
```

---

### **Step 2: Child Component (Form Submission)**
```jsx
import React, { useState } from "react";

function ChildForm({ sendName }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    sendName(name); // Send data to parent
  };

  return (
    <div>
      <h3>Child Form</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ChildForm;
```

---

## **🎯 Final Takeaways**
✔ **Props flow from Parent → Child, but Child → Parent works using functions as props.**  
✔ **Pass a callback function from Parent to Child and call it in the Child component.**  
✔ **We can send data like strings, numbers, objects, and even event handlers.**  
✔ **Useful for form submissions, button clicks, and component communication.**  
