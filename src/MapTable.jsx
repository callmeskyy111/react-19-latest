import React from "react";

function MapTable() {
  const employees = [
    { id: 1, name: "Alice", role: "Developer", age: 25, avatar: "👩🏻‍💻" },
    { id: 2, name: "Bob", role: "Designer", age: 28, avatar: "🎨" },
    { id: 3, name: "Charlie", role: "Manager", age: 32, avatar: "👨🏻‍💼" },
    { id: 4, name: "Tina", role: "Tester", age: 27, avatar: "🧪" },
    { id: 5, name: "Skyy", role: "DB Admin.", age: 29, avatar: "📂" },
    { id: 6, name: "Gemma", role: "Network Eng.", age: 35, avatar: "🛜" },
    {
      id: 7,
      name: "Adam",
      role: "Cyber-Security Spcl.",
      age: 34,
      avatar: "🛡️",
    },
    // Add more employees here, if needed...
  ];

  return (
    <div>
      <h3>
        <i>Table using Array.map().. 👨🏻‍💻 </i>
      </h3>
      <table
        style={{
          border: "2px solid white",
          borderSpacing: "30px",
          borderRadius: "7px",
        }}>
        <thead>
          <tr style={{ textDecoration: "underline" }}>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Age</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.role}</td>
                <td>{employee.age}</td>
                <td>{employee.avatar}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default MapTable;
