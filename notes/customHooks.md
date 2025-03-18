## **🧑🏻‍💻 What Are Custom Hooks in React?**

In **React**, a **custom hook** is a **JavaScript function** that uses one or more built-in **React hooks** (`useState`, `useEffect`, `useContext`, `useReducer`, etc.) to encapsulate **reusable logic**.

It allows us to **extract component logic** into reusable functions, making our components cleaner and more maintainable. Custom hooks always follow the naming convention starting with `"use"`, like `useAuth()`, `useFetch()`, or `useCounter()`.

---

## **📌 Why Use Custom Hooks?**

✅ **Reusability** - Extract and reuse logic across multiple components.  
✅ **Separation of Concerns** - Keep UI and logic separate.  
✅ **Cleaner Code** - Improve code readability and maintainability.  
✅ **Avoid Code Duplication** - Eliminate repeated logic in components.  
✅ **Easy to Test** - Custom hooks are easier to unit test.

---

## **📖 Syntax of a Custom Hook**
A custom hook is essentially a function that may return **state variables**, **functions**, or **values** using other hooks.

```jsx
import { useState, useEffect } from "react";

function useCustomHook() {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("Custom Hook Mounted!");
    // Perform any side effect
  }, []);

  return data;
}

export default useCustomHook;
```

---

## ✅ **Example 1: Creating a Custom Hook for Fetching Data (`useFetch`)**

Let's create a reusable `useFetch()` hook to fetch data from an API using `fetch()`.

### **useFetch.js**
```jsx
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
}

export default useFetch;
```

---

### **App.js**
```jsx
import React from "react";
import useFetch from "./useFetch";

function App() {
  const { data, error, loading } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

---

## ✅ **Example 2: Custom Hook for Window Size (`useWindowSize`)**

This hook tracks the **window width and height**.

### **useWindowSize.js**
```jsx
import { useState, useEffect } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default useWindowSize;
```

---

### **App.js**
```jsx
import React from "react";
import useWindowSize from "./useWindowSize";

function App() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <h1>Window Size Tracker 📏</h1>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
}

export default App;
```

---

## ✅ **Example 3: Custom Hook for Theme Switching (`useTheme`)**

This hook allows users to switch between **light and dark themes**.

### **useTheme.js**
```jsx
import { useState, useEffect } from "react";

function useTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme; // Apply theme to the body
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
}

export default useTheme;
```

---

### **App.js**
```jsx
import React from "react";
import useTheme from "./useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h1>Current Theme: {theme === "light" ? "🌞 Light" : "🌙 Dark"}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default App;
```
---

## ✅ **When Should We Use Custom Hooks?**

- When a piece of logic is reused across multiple components.
- When a component contains complex state management logic.
- When we want to simplify a component by extracting logic into a reusable function.
- When we perform side effects (e.g., API calls, event listeners, subscriptions).
- When we manage **global state** using `useContext` or `useReducer`.

---

## ✅ **Best Practices for Custom Hooks**

1. **Name** - Always prefix the name with `use` (e.g., `useAuth`, `useFetch`).
2. **Keep It Focused** - A hook should solve one specific problem.
3. **Avoid Side Effects** - Only use `useEffect` for side effects.
4. **Parameterize** - Accept parameters to make the hook dynamic.
5. **Clean Up** - Always clean up side effects (e.g., remove event listeners).
6. **Reusability** - Ensure it works across multiple components.
7. **Unit Testable** - Make sure hooks are easily testable.

---

## ✅ **Conclusion**

- **Custom Hooks** are an excellent way to reuse stateful logic.
- They simplify components by extracting logic into reusable functions.
- We can combine multiple hooks inside a custom hook for more complex logic.

## ✅ **Dos and Don'ts of Custom Hooks in React**

When creating and using **custom hooks** in React, following best practices ensures your code remains clean, efficient, and maintainable. Here's a detailed look at the **dos** and **don'ts** when working with custom hooks.

---

## **🟢 Dos of Custom Hooks**

### 1. ✅ **Name Custom Hooks with `use` Prefix**  
- **Why?** React relies on the naming convention to identify custom hooks. It ensures the hook behaves correctly and is recognized by React's linting rules.  
- **Example:**  
```jsx
function useFetchData(url) { /*...*/ }
```
---

### 2. ✅ **Keep Hooks Focused and Reusable**  
- **Why?** Custom hooks should have a **single responsibility**. Extract only the necessary logic to keep them reusable.  
- **Example:**  
- `useAuth()` → Handles authentication logic  
- `useLocalStorage()` → Manages localStorage interactions  
- `useTheme()` → Handles theme toggling  

---

### 3. ✅ **Use Built-in Hooks**  
- **Why?** Custom hooks should combine or extend existing React hooks like `useState`, `useEffect`, `useContext`, `useReducer`, etc.  
- **Example:**  
```jsx
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return { count, increment, decrement };
}
```

---

### 4. ✅ **Clean Up Side Effects Using Return Functions**  
- **Why?** Prevent memory leaks by cleaning up listeners, intervals, or subscriptions using `useEffect`.  
- **Example:**  
```jsx
function useWindowSize() {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setSize(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}
```

---

### 5. ✅ **Use Parameters for Flexibility**  
- **Why?** Allow passing dynamic data to your hook, making it more reusable.  
- **Example:**  
```jsx
function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, options]);

  return { data, loading, error };
}
```

---

### 6. ✅ **Return Values Cleanly**  
- **Why?** Always return necessary values and functions in an organized way (using objects for flexibility).  
- **Example:**  
```jsx
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  return { count, increment: () => setCount(count + 1) };
}
```

---

## **🔴 Don'ts of Custom Hooks**

### 1. ❌ **Don’t Use Hooks Conditionally**  
- **Why?** Hooks must always be called in the same order to ensure proper state management.  
- **Example (Incorrect)**  
```jsx
function useExample(condition) {
  if (condition) {
    const [state, setState] = useState(0); // ❌ Invalid
  }
}
```
- **Fix:**  
```jsx
function useExample(condition) {
  const [state, setState] = useState(0);
  return condition ? state : null;
}
```

---

### 2. ❌ **Don’t Modify the DOM Directly**  
- **Why?** Custom hooks should not manipulate the DOM directly. Instead, use React's state and effects.  
- **Incorrect:**  
```jsx
function useCustomHook() {
  document.body.style.backgroundColor = "blue"; // ❌ Avoid this
}
```
- **Fix:**  
```jsx
function useTheme(theme) {
  useEffect(() => {
    document.body.className = theme; // ✅ Safe
  }, [theme]);
}
```

---

### 3. ❌ **Don’t Use Custom Hooks Inside Loops, Conditions, or Nested Functions**  
- **Why?** Hooks rely on a consistent call order. Conditional usage may lead to bugs.  
- **Incorrect:**  
```jsx
if (true) {
  const data = useFetch("/api"); // ❌ Avoid this
}
```
- **Fix:**  
```jsx
const data = useFetch("/api"); // ✅ Use hooks at the top level
```

---

### 4. ❌ **Don’t Return JSX from Custom Hooks**  
- **Why?** Hooks are not meant to return UI components. Keep UI logic separate.  
- **Incorrect:**  
```jsx
function useComponent() {
  return <h1>Hello</h1>; // ❌ Invalid
}
```
- **Fix:**  
```jsx
function useExample() {
  const [state, setState] = useState("Hello");
  return state; // ✅ Return data, not JSX
}
```

---

### 5. ❌ **Don’t Create Hooks Without a Purpose**  
- **Why?** Custom hooks should serve a reusable purpose. Avoid creating unnecessary hooks.  
- **Incorrect:**  
```jsx
function usePrintMessage() {
  console.log("Hello"); // ❌ This is unnecessary
}
```
- **Fix:**  
Only create hooks if they manage state, handle effects, or abstract logic.

---

## ✅ **Final Tips for Writing Custom Hooks**

- **Test Properly**: Ensure hooks are thoroughly tested using libraries like `React Testing Library`.  
- **Document Clearly**: Provide usage examples for better collaboration.  
- **Encapsulate Business Logic**: Abstract API calls, authentication logic, or subscriptions.  
- **Optimize**: Memoize functions and values when necessary using `useMemo` and `useCallback`.  
- **Reuse**: Use custom hooks in multiple components to reduce redundancy.  
---

Here’s a list of **interview questions on custom hooks in React** with detailed answers:  

---

### ✅ **1. What are custom hooks in React? Why do we need them?**  
**Answer:**  
- **Custom hooks** are JavaScript functions that start with `use` and allow you to **reuse stateful logic** across components.  
- They provide a way to extract logic from components, making the code cleaner and more maintainable.  
- Unlike components, they **don’t return JSX**. They return data, state, or functions.  
- They reduce **code duplication** and improve reusability.  

**Example:**  
```jsx
function useCounter(initialValue = 0) {
  const [count, setCount] = React.useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
}
```
---

### ✅ **2. Why should custom hooks start with `use`?**  
**Answer:**  
- React enforces a naming convention where hooks should start with `use` (e.g., `useState`, `useEffect`).  
- This allows **React’s linter** (ESLint) to identify and apply the **Rules of Hooks** for proper hook usage.  
- It also helps developers easily recognize the purpose of a function.  

---

### ✅ **3. How do you create a custom hook that handles API calls using `useFetch()`?**  
**Answer:**  
Here’s how you can build a reusable `useFetch` hook:  
```jsx
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network error");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { data, loading, error };
}
```
**Usage:**  
```jsx
const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");
```

---

### ✅ **4. Can custom hooks return JSX? Why or why not?**  
**Answer:**  
- **No, custom hooks** cannot return JSX because they are not components.  
- Custom hooks are meant to encapsulate logic, handle state, or manage side effects, while components are responsible for rendering UI.  
- If you need reusable UI, consider using a **component** instead.  

---

### ✅ **5. How can you pass parameters to a custom hook?**  
**Answer:**  
- You can pass parameters by simply accepting them as function arguments in the custom hook.  
- For example:  
```jsx
function useCounter(initialValue = 0, step = 1) {
  const [count, setCount] = React.useState(initialValue);
  const increment = () => setCount(count + step);
  return { count, increment };
}

const { count, increment } = useCounter(10, 2);
```

---

### ✅ **6. How do you handle side effects inside a custom hook?**  
**Answer:**  
- You can use `useEffect` within a custom hook to handle side effects like API calls, event listeners, or subscriptions.  
- Always clean up side effects using the cleanup function.  
**Example:**  
```jsx
function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = "React App"; // Cleanup
    };
  }, [title]);
}
useDocumentTitle("Welcome to Skyy's App");
```

---

### ✅ **7. How do you test a custom hook?**  
**Answer:**  
- You can test custom hooks using libraries like `@testing-library/react-hooks`.  
- Example test for `useCounter`:  
```jsx
import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from './useCounter';

test('should increment counter', () => {
  const { result } = renderHook(() => useCounter(0));
  
  act(() => result.current.increment());
  
  expect(result.current.count).toBe(1);
});
```

---

### ✅ **8. Can a custom hook use another hook inside it?**  
**Answer:**  
- Yes, custom hooks can use other built-in hooks like `useState`, `useEffect`, or even other custom hooks.  
- Example using multiple hooks inside one custom hook:  
```jsx
function useUserData(userId) {
  const { data, loading } = useFetch(`/api/user/${userId}`);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (data?.role === 'admin') setIsAdmin(true);
  }, [data]);

  return { data, loading, isAdmin };
}
```

---

### ✅ **9. How can you optimize a custom hook using `useMemo` or `useCallback`?**  
**Answer:**  
- **useMemo** is used to optimize the return values of a hook.  
- **useCallback** is used to memoize functions to prevent unnecessary re-creations.  
**Example:**  
```jsx
function useFilteredList(list, query) {
  const filteredList = React.useMemo(() => {
    return list.filter((item) => item.includes(query));
  }, [list, query]);

  return filteredList;
}
```

---

### ✅ **10. What are some real-world use cases for custom hooks?**  
**Answer:**  
- **API Calls:** `useFetch()`, `useAxios()`  
- **Form Management:** `useForm()`  
- **Authentication:** `useAuth()`  
- **Debouncing:** `useDebounce()`  
- **LocalStorage Management:** `useLocalStorage()`  
- **Responsive Design:** `useWindowSize()`  
- **Event Listeners:** `useEventListener()`  
- **Theme Management:** `useTheme()`  

---
Here’s a list of **interview questions on custom hooks in React** with detailed answers:  

---

### ✅ **1. What are custom hooks in React? Why do we need them?**  
**Answer:**  
- **Custom hooks** are JavaScript functions that start with `use` and allow you to **reuse stateful logic** across components.  
- They provide a way to extract logic from components, making the code cleaner and more maintainable.  
- Unlike components, they **don’t return JSX**. They return data, state, or functions.  
- They reduce **code duplication** and improve reusability.  

**Example:**  
```jsx
function useCounter(initialValue = 0) {
  const [count, setCount] = React.useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
}
```
---

### ✅ **2. Why should custom hooks start with `use`?**  
**Answer:**  
- React enforces a naming convention where hooks should start with `use` (e.g., `useState`, `useEffect`).  
- This allows **React’s linter** (ESLint) to identify and apply the **Rules of Hooks** for proper hook usage.  
- It also helps developers easily recognize the purpose of a function.  

---

### ✅ **3. How do you create a custom hook that handles API calls using `useFetch()`?**  
**Answer:**  
Here’s how you can build a reusable `useFetch` hook:  
```jsx
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network error");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { data, loading, error };
}
```
**Usage:**  
```jsx
const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");
```

---

### ✅ **4. Can custom hooks return JSX? Why or why not?**  
**Answer:**  
- **No, custom hooks** cannot return JSX because they are not components.  
- Custom hooks are meant to encapsulate logic, handle state, or manage side effects, while components are responsible for rendering UI.  
- If you need reusable UI, consider using a **component** instead.  

---

### ✅ **5. How can you pass parameters to a custom hook?**  
**Answer:**  
- You can pass parameters by simply accepting them as function arguments in the custom hook.  
- For example:  
```jsx
function useCounter(initialValue = 0, step = 1) {
  const [count, setCount] = React.useState(initialValue);
  const increment = () => setCount(count + step);
  return { count, increment };
}

const { count, increment } = useCounter(10, 2);
```

---

### ✅ **6. How do you handle side effects inside a custom hook?**  
**Answer:**  
- You can use `useEffect` within a custom hook to handle side effects like API calls, event listeners, or subscriptions.  
- Always clean up side effects using the cleanup function.  
**Example:**  
```jsx
function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = "React App"; // Cleanup
    };
  }, [title]);
}
useDocumentTitle("Welcome to Skyy's App");
```

---

### ✅ **7. How do you test a custom hook?**  
**Answer:**  
- You can test custom hooks using libraries like `@testing-library/react-hooks`.  
- Example test for `useCounter`:  
```jsx
import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from './useCounter';

test('should increment counter', () => {
  const { result } = renderHook(() => useCounter(0));
  
  act(() => result.current.increment());
  
  expect(result.current.count).toBe(1);
});
```

---

### ✅ **8. Can a custom hook use another hook inside it?**  
**Answer:**  
- Yes, custom hooks can use other built-in hooks like `useState`, `useEffect`, or even other custom hooks.  
- Example using multiple hooks inside one custom hook:  
```jsx
function useUserData(userId) {
  const { data, loading } = useFetch(`/api/user/${userId}`);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (data?.role === 'admin') setIsAdmin(true);
  }, [data]);

  return { data, loading, isAdmin };
}
```

---

### ✅ **9. How can you optimize a custom hook using `useMemo` or `useCallback`?**  
**Answer:**  
- **useMemo** is used to optimize the return values of a hook.  
- **useCallback** is used to memoize functions to prevent unnecessary re-creations.  
**Example:**  
```jsx
function useFilteredList(list, query) {
  const filteredList = React.useMemo(() => {
    return list.filter((item) => item.includes(query));
  }, [list, query]);

  return filteredList;
}
```

---

### ✅ **10. What are some real-world use cases for custom hooks?**  
**Answer:**  
- **API Calls:** `useFetch()`, `useAxios()`  
- **Form Management:** `useForm()`  
- **Authentication:** `useAuth()`  
- **Debouncing:** `useDebounce()`  
- **LocalStorage Management:** `useLocalStorage()`  
- **Responsive Design:** `useWindowSize()`  
- **Event Listeners:** `useEventListener()`  
- **Theme Management:** `useTheme()`  

---