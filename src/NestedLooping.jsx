import React from "react";

function NestedLooping() {
  const collegeData = [
    {
      name: "Skyy University",
      city: "Kolkata",
      website: "skyy.university.edu",
      students: [
        {
          name: "Alice",
          age: 25,
          email: "alice@gmail.com",
        },
        {
          name: "Bob",
          age: 27,
          email: "bob@gmail.com",
        },
        {
          name: "Charlie",
          age: 28,
          email: "charlie@gmail.com",
        },
      ],
    },
    {
      name: "Banerjee Tech. College",
      city: "Berlin",
      website: "btu.edu",
      students: [
        {
          name: "David",
          age: 26,
          email: "david@gmail.com",
        },
        {
          name: "Eve",
          age: 29,
          email: "eve@gmail.com",
        },
      ],
    },
    {
      name: "Soumadip University",
      city: "Delhi",
      website: "sumu.edu",
      students: [
        {
          name: "Frank",
          age: 24,
          email: "frank@gmail.com",
        },
        {
          name: "Grace",
          age: 28,
          email: "grace@gmail.com",
        },
      ],
    },
  ];
  return (
    <div>
      <h2>Nested Looping With Component:</h2>
      <div>
        {collegeData.map((college) => {
          return (
            <div key={college.name}>
              <hr />
              <h3>🏫College: {college.name}</h3>
              <h4>📍{college.city}</h4>
              <h4>📧{college.website}</h4>
              <p>Student List:</p>
              <ol
                style={{
                  border: "2px solid white",
                  margin: "5px",
                  borderRadius: "8px",
                }}>
                {college.students.map((student) => {
                  return (
                    <div key={student.name} style={{ padding: "4px" }}>
                      <li style={{ fontWeight: "bold" }}>🎓{student.name}</li>
                      <p>age: {student.age}</p>
                      <p>email: {student.email}</p>
                    </div>
                  );
                })}
              </ol>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NestedLooping;
