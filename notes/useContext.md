## **📌 Understanding `useContext` in React (In-Depth Guide)**
  
React’s `useContext` Hook allows us to **share state and functions** between components **without** manually passing props at every level (a.k.a. "prop drilling"). It is mainly used for **global state management** in small-to-medium applications.

---

## **🔹 Why `useContext`?**
When building React applications, **data** often needs to be passed **from a parent component to deeply nested child components**.  
🔸 **Without `useContext`**, we have to pass props down **manually** (prop drilling).  
🔸 **With `useContext`**, we can **access state directly** in any component, skipping unnecessary prop passing.

---

## **🔹 Creating a Context in React**
1️⃣ Create a Context using `React.createContext()`.  
2️⃣ Wrap components with a **Provider** to pass data.  
3️⃣ Access the data inside any child component using `useContext()`.  

---

## **🔹 Basic Example: Theme Context**
Let's create a **theme context** where users can toggle between **light and dark mode**.

### ✅ **Step 1: Create the Context**
```jsx
import React, { createContext, useState } from "react";

// Create the context
const ThemeContext = createContext();

// Create a Provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Export the Context
export default ThemeContext;
```
Here, we:
- Created a **Theme Context** using `createContext()`.
- Defined a **Provider component (`ThemeProvider`)** to **manage and provide the theme state**.
- Used `useState` to track the theme (`light` or `dark`).
- Passed `{ theme, toggleTheme }` in `value`, making it available to all components.

---

### ✅ **Step 2: Use `useContext` in a Component**
Now, let's **consume the theme data** inside a component.

```jsx
import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "10px",
        border: "1px solid",
      }}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

export default ThemedButton;
```

- `useContext(ThemeContext)` gives direct access to `theme` and `toggleTheme`.
- The button’s **background and text color change** based on the theme.

---

### ✅ **Step 3: Wrap the App with `ThemeProvider`**
Now, wrap the entire app in `ThemeProvider` so that every component has access to the theme context.

```jsx
import React from "react";
import { ThemeProvider } from "./ThemeContext";
import ThemedButton from "./ThemedButton";

function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>React useContext Example</h1>
        <ThemedButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
```

### 🎯 **What We Achieved?**
- The **theme** is **shared globally** without prop drilling.
- Any component can **consume** `theme` and `toggleTheme` using `useContext()`.

---

## **🔹 Advanced Example: User Authentication Context**
A more **real-world** example: managing **user authentication state** using `useContext`.

### ✅ **Step 1: Create `AuthContext.js`**
```jsx
import React, { createContext, useState } from "react";

// Create the authentication context
const AuthContext = createContext();

// Create an AuthProvider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Function to log in
  const login = (username) => {
    setUser({ name: username });
  };

  // Function to log out
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
```

---

### ✅ **Step 2: Consume `AuthContext` in a Component**
```jsx
import React, { useContext } from "react";
import AuthContext from "./AuthContext";

function Navbar() {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <nav>
      {user ? (
        <>
          <span>Welcome, {user.name}!</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <span>Please log in</span>
          <button onClick={() => login("Skyy")}>Login</button>
        </>
      )}
    </nav>
  );
}

export default Navbar;
```

---

### ✅ **Step 3: Wrap `App` with `AuthProvider`**
```jsx
import React from "react";
import { AuthProvider } from "./AuthContext";
import Navbar from "./Navbar";

function App() {
  return (
    <AuthProvider>
      <Navbar />
    </AuthProvider>
  );
}

export default App;
```

### 🎯 **What We Achieved?**
- **Login/logout functions** are globally accessible.
- No need to pass user state down as props.
- Any component can access **`user`, `login`, and `logout`**.

---

## **🔹 `useContext` vs Other State Management Solutions**
| Feature       | `useContext` | Redux | Zustand | Recoil |
|--------------|-------------|-------|---------|--------|
| Setup Time   | ⏳ Very Low  | 🚀 High  | 🔥 Medium | 🔥 Medium |
| Complexity   | 🟢 Simple   | 🔴 Complex | 🟠 Moderate | 🟠 Moderate |
| Performance  | ⚡ Fast  | 🚀 Optimized  | ⚡ Fast | ⚡ Fast |
| Best For     | 🏠 Small Apps | 🏢 Large Apps | 🚀 Lightweight State | ⚛️ Atom-based State |

**Key Takeaways:**
- `useContext` is **best for small/medium apps**.
- For **global and complex state management**, **Redux or Zustand** is preferred.

---

## **📌 Best Practices for `useContext`**
✅ **Use it for themes, authentication, or simple global state.**  
✅ **Wrap the entire app inside the Provider.**  
✅ **Avoid nesting multiple context providers deeply.**  
✅ **For performance, use `useReducer` with `useContext`** for complex state.  
✅ **Consider memoizing values** to prevent unnecessary re-renders.

---

## **📌 When NOT to Use `useContext`**
❌ If the app **grows too large**, consider **Zustand, Redux, or Recoil**.  
❌ If the state updates **very frequently**, `useContext` may **cause unnecessary re-renders**.  
❌ Don't use it for **temporary state** (use local state instead).

---

## **📌 Final Thoughts**
React’s `useContext` Hook **removes prop drilling** and is **ideal for global state sharing** in small-to-medium apps. For larger applications, we may need Redux or Zustand.

### **📌 More `useContext` Examples in React**
Here are some additional real-world use cases of `useContext` to help deepen our understanding. 🚀

---

## **1️⃣ Language Context (Multi-language Support)**
We can use `useContext` to **store and switch between different languages** dynamically.

### ✅ **Step 1: Create `LanguageContext.js`**
```jsx
import React, { createContext, useState } from "react";

// Create the Language Context
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  // Function to change language
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageContext;
```

---

### ✅ **Step 2: Create `LanguageSwitcher.js`**
```jsx
import React, { useContext } from "react";
import LanguageContext from "./LanguageContext";

function LanguageSwitcher() {
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <div>
      <h2>Current Language: {language}</h2>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("es")}>Español</button>
      <button onClick={() => changeLanguage("fr")}>Français</button>
    </div>
  );
}

export default LanguageSwitcher;
```

---

### ✅ **Step 3: Wrap `App.js` with `LanguageProvider`**
```jsx
import React from "react";
import { LanguageProvider } from "./LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

function App() {
  return (
    <LanguageProvider>
      <div>
        <h1>Multi-Language Support Example</h1>
        <LanguageSwitcher />
      </div>
    </LanguageProvider>
  );
}

export default App;
```

### 🎯 **What We Achieved?**
- We **stored the language in context** and switched it dynamically.
- Any component can **access the language state** using `useContext`.

---

## **2️⃣ Cart Context (E-commerce Shopping Cart)**
In an e-commerce app, we can use `useContext` to **manage the shopping cart globally**.

### ✅ **Step 1: Create `CartContext.js`**
```jsx
import React, { createContext, useState } from "react";

// Create the Cart Context
const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Function to add an item
  const addItem = (item) => {
    setCart([...cart, item]);
  };

  // Function to remove an item
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
```

---

### ✅ **Step 2: Create `Cart.js`**
```jsx
import React, { useContext } from "react";
import CartContext from "./CartContext";

function Cart() {
  const { cart, removeItem } = useContext(CartContext);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <p>{item.name} - ${item.price}</p>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
```

---

### ✅ **Step 3: Create `Product.js`**
```jsx
import React, { useContext } from "react";
import CartContext from "./CartContext";

function Product({ id, name, price }) {
  const { addItem } = useContext(CartContext);

  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button onClick={() => addItem({ id, name, price })}>Add to Cart</button>
    </div>
  );
}

export default Product;
```

---

### ✅ **Step 4: Wrap `App.js` with `CartProvider`**
```jsx
import React from "react";
import { CartProvider } from "./CartContext";
import Product from "./Product";
import Cart from "./Cart";

function App() {
  return (
    <CartProvider>
      <h1>Shopping Cart Example</h1>
      <Product id={1} name="Laptop" price={1000} />
      <Product id={2} name="Phone" price={500} />
      <Cart />
    </CartProvider>
  );
}

export default App;
```

### 🎯 **What We Achieved?**
- **Cart state is globally managed** without prop drilling.
- Components can **add or remove items from the cart** using `useContext`.

---

## **3️⃣ User Preferences Context (Dark Mode + Font Size)**
This example combines **dark mode** and **font size settings**.

### ✅ **Step 1: Create `PreferencesContext.js`**
```jsx
import React, { createContext, useState } from "react";

const PreferencesContext = createContext();

export function PreferencesProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  return (
    <PreferencesContext.Provider value={{ darkMode, setDarkMode, fontSize, setFontSize }}>
      {children}
    </PreferencesContext.Provider>
  );
}

export default PreferencesContext;
```

---

### ✅ **Step 2: Create `Settings.js`**
```jsx
import React, { useContext } from "react";
import PreferencesContext from "./PreferencesContext";

function Settings() {
  const { darkMode, setDarkMode, fontSize, setFontSize } = useContext(PreferencesContext);

  return (
    <div style={{ background: darkMode ? "#222" : "#fff", color: darkMode ? "#fff" : "#000" }}>
      <h2>Settings</h2>
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>
      <br />
      <button onClick={() => setFontSize(fontSize + 2)}>Increase Font</button>
      <button onClick={() => setFontSize(fontSize - 2)}>Decrease Font</button>
      <p style={{ fontSize: `${fontSize}px` }}>Sample Text</p>
    </div>
  );
}

export default Settings;
```

---

### ✅ **Step 3: Wrap `App.js` with `PreferencesProvider`**
```jsx
import React from "react";
import { PreferencesProvider } from "./PreferencesContext";
import Settings from "./Settings";

function App() {
  return (
    <PreferencesProvider>
      <h1>User Preferences</h1>
      <Settings />
    </PreferencesProvider>
  );
}

export default App;
```

### 🎯 **What We Achieved?**
- **Dark mode and font size** are stored in context.
- **Settings can be modified** without prop drilling.

---

## **📌 Summary**
| Example | Description |
|---------|-------------|
| **Language Context** | Stores and switches languages dynamically. |
| **Cart Context** | Manages a global shopping cart in an e-commerce app. |
| **User Preferences** | Controls dark mode and font size settings globally. |

---

## **📌 Final Thoughts**
React’s `useContext` Hook makes it easy to **share global state** across components without passing props manually.  
For **large-scale apps**, we can **combine `useContext` with `useReducer`** or use **state management libraries** like Redux or Zustand.

## **🛠 `useContext` with Custom Hooks in React**  
Using `useContext` with **custom hooks** allows us to create **cleaner and more reusable** logic for global state management. This approach improves **code readability** and **modularity**. Let's explore it step by step! 🚀

---

## **1️⃣ Why Use Custom Hooks with `useContext`?**
✅ **Encapsulation** – We keep logic separate and reusable.  
✅ **Cleaner Components** – No need to import and use `useContext` repeatedly in every component.  
✅ **Code Reusability** – We can call the custom hook whenever we need the context.

---

# **📌 Example 1: Theme Context (Dark Mode)**
We'll build a **dark mode toggle** using `useContext` and a custom hook.

---

### ✅ **Step 1: Create `ThemeContext.js`**
We create a **context** for the theme and wrap the app with a provider.
```jsx
import React, { createContext, useState } from "react";

// Create Theme Context
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  // Function to toggle theme
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
```

---

### ✅ **Step 2: Create a Custom Hook `useTheme.js`**
Instead of calling `useContext(ThemeContext)` everywhere, we **create a custom hook**.
```jsx
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

// Custom Hook to use ThemeContext
export function useTheme() {
  return useContext(ThemeContext);
}
```
🔹 **Why?** – Now, any component can just call `useTheme()` instead of `useContext(ThemeContext)`.

---

### ✅ **Step 3: Create `ThemeToggle.js`**
This component **toggles** between light and dark mode.
```jsx
import React from "react";
import { useTheme } from "./useTheme";

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div style={{
      background: isDark ? "#222" : "#fff",
      color: isDark ? "#fff" : "#000",
      padding: "20px",
      textAlign: "center"
    }}>
      <h2>{isDark ? "Dark Mode 🌙" : "Light Mode ☀️"}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemeToggle;
```

---

### ✅ **Step 4: Wrap `App.js` with `ThemeProvider`**
```jsx
import React from "react";
import { ThemeProvider } from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";

function App() {
  return (
    <ThemeProvider>
      <h1>Dark Mode Toggle with useContext</h1>
      <ThemeToggle />
    </ThemeProvider>
  );
}

export default App;
```

---

## 🎯 **What We Achieved?**
✅ **Encapsulated logic** inside a `useTheme()` hook.  
✅ **Easier access** to the theme state without using `useContext` manually everywhere.  
✅ **Cleaner and reusable components.**  

---

# **📌 Example 2: Authentication Context (Login System)**
We will create an **auth context** with a **custom hook** for managing user login.

---

### ✅ **Step 1: Create `AuthContext.js`**
```jsx
import React, { createContext, useState } from "react";

// Create Authentication Context
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Function to log in
  const login = (username) => {
    setUser({ name: username });
  };

  // Function to log out
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
```

---

### ✅ **Step 2: Create a Custom Hook `useAuth.js`**
```jsx
import { useContext } from "react";
import AuthContext from "./AuthContext";

// Custom Hook for Authentication
export function useAuth() {
  return useContext(AuthContext);
}
```
Now we can call `useAuth()` instead of `useContext(AuthContext)` everywhere.

---

### ✅ **Step 3: Create `LoginButton.js`**
```jsx
import React, { useState } from "react";
import { useAuth } from "./useAuth";

function LoginButton() {
  const { user, login, logout } = useAuth();
  const [username, setUsername] = useState("");

  return (
    <div>
      {user ? (
        <>
          <h2>Welcome, {user.name} 👋</h2>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={() => login(username)}>Login</button>
        </>
      )}
    </div>
  );
}

export default LoginButton;
```

---

### ✅ **Step 4: Wrap `App.js` with `AuthProvider`**
```jsx
import React from "react";
import { AuthProvider } from "./AuthContext";
import LoginButton from "./LoginButton";

function App() {
  return (
    <AuthProvider>
      <h1>Authentication with useContext</h1>
      <LoginButton />
    </AuthProvider>
  );
}

export default App;
```

---

## 🎯 **What We Achieved?**
✅ **Encapsulated authentication logic** inside `useAuth()`.  
✅ **Login/logout state is managed globally** without prop drilling.  
✅ **Reusable authentication logic** across different components.  

---

## **📌 Final Summary**
| Example | Custom Hook | Purpose |
|---------|------------|---------|
| **Dark Mode Toggle** | `useTheme()` | Manage global theme state |
| **Login System** | `useAuth()` | Handle user authentication globally |

---

## **📌 Why Use Custom Hooks with `useContext`?**
✅ **Cleaner code** – No need to use `useContext` manually in every component.  
✅ **Encapsulation** – Keeps logic separate and reusable.  
✅ **Easy to scale** – Works well in large applications.  

---

## **🛠 `useContext` + `useReducer` in React**  
Combining **`useContext`** with **`useReducer`** is a powerful pattern for managing **global state** in React. This approach provides **better state management** than `useState`, especially in complex applications. 🚀

---

## **📌 Why Use `useReducer` with `useContext`?**
✅ **Centralized State Management** – Keeps state logic separate from components.  
✅ **Scalability** – Ideal for large applications.  
✅ **Performance Optimization** – Prevents unnecessary re-renders.  
✅ **Encapsulation** – Keeps state logic clean and reusable.

---

# **📌 Example 1: Counter Context (Global Counter)**
We will create a **global counter** with **increment, decrement, and reset** actions using `useReducer` inside `useContext`.

---

### ✅ **Step 1: Create `CounterContext.js`**
```jsx
import React, { createContext, useReducer } from "react";

// Create Counter Context
const CounterContext = createContext();

// Define Actions
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// Reducer Function
function counterReducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    case RESET:
      return { count: 0 };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

// Counter Provider
export function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

export default CounterContext;
```

---

### ✅ **Step 2: Create a Custom Hook `useCounter.js`**
```jsx
import { useContext } from "react";
import CounterContext from "./CounterContext";

// Custom Hook to use Counter Context
export function useCounter() {
  return useContext(CounterContext);
}
```
Now, instead of calling `useContext(CounterContext)` manually, we simply call `useCounter()`.

---

### ✅ **Step 3: Create `CounterComponent.js`**
This component will **increase, decrease, and reset** the global counter.

```jsx
import React from "react";
import { useCounter } from "./useCounter";

function CounterComponent() {
  const { state, dispatch } = useCounter();

  return (
    <div>
      <h2>Global Counter: {state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>➕ Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>➖ Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>🔄 Reset</button>
    </div>
  );
}

export default CounterComponent;
```

---

### ✅ **Step 4: Wrap `App.js` with `CounterProvider`**
```jsx
import React from "react";
import { CounterProvider } from "./CounterContext";
import CounterComponent from "./CounterComponent";

function App() {
  return (
    <CounterProvider>
      <h1>Global Counter using useReducer & useContext</h1>
      <CounterComponent />
    </CounterProvider>
  );
}

export default App;
```

---

## 🎯 **What We Achieved?**
✅ **Global counter state** with `useReducer`.  
✅ **No prop drilling** – state is accessible anywhere.  
✅ **Better performance** – re-renders only when necessary.  

---

# **📌 Example 2: Authentication with `useReducer`**
Let's create a **login system** using `useReducer` and `useContext`.

---

### ✅ **Step 1: Create `AuthContext.js`**
```jsx
import React, { createContext, useReducer } from "react";

// Create Auth Context
const AuthContext = createContext();

// Define Actions
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

// Reducer Function
function authReducer(state, action) {
  switch (action.type) {
    case LOGIN:
      return { user: action.payload };
    case LOGOUT:
      return { user: null };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

// Auth Provider
export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
```

---

### ✅ **Step 2: Create a Custom Hook `useAuth.js`**
```jsx
import { useContext } from "react";
import AuthContext from "./AuthContext";

// Custom Hook to use Auth Context
export function useAuth() {
  return useContext(AuthContext);
}
```
This allows us to easily access the authentication state anywhere in the app.

---

### ✅ **Step 3: Create `AuthComponent.js`**
```jsx
import React, { useState } from "react";
import { useAuth } from "./useAuth";

function AuthComponent() {
  const { state, dispatch } = useAuth();
  const [username, setUsername] = useState("");

  return (
    <div>
      {state.user ? (
        <>
          <h2>Welcome, {state.user} 👋</h2>
          <button onClick={() => dispatch({ type: "LOGOUT" })}>Logout</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={() => dispatch({ type: "LOGIN", payload: username })}>
            Login
          </button>
        </>
      )}
    </div>
  );
}

export default AuthComponent;
```

---

### ✅ **Step 4: Wrap `App.js` with `AuthProvider`**
```jsx
import React from "react";
import { AuthProvider } from "./AuthContext";
import AuthComponent from "./AuthComponent";

function App() {
  return (
    <AuthProvider>
      <h1>Authentication with useReducer & useContext</h1>
      <AuthComponent />
    </AuthProvider>
  );
}

export default App;
```

---

## 🎯 **What We Achieved?**
✅ **Centralized authentication logic** with `useReducer`.  
✅ **Encapsulated state logic** in `useContext`.  
✅ **No unnecessary re-renders** – only updates when needed.  

---

# **📌 Summary: `useContext` vs `useContext + useReducer`**
| Feature | `useContext` Only | `useContext` + `useReducer` |
|---------|----------------|---------------------|
| **State Management** | Uses `useState` | Uses `useReducer` |
| **Best For** | Simple global state | Complex state logic |
| **Performance** | Can re-render frequently | More optimized |
| **Code Structure** | Easy to implement | More scalable |

---

## **📌 When to Use `useReducer` with `useContext`?**
✅ When **state logic is complex** (e.g., multiple actions, multiple states).  
✅ When we **need performance optimization** by preventing unnecessary renders.  
✅ When we **want a clean separation** of state and UI logic.  

---

