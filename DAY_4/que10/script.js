const user = {
  id: 1,
  name: "Jaynam",
  skills: ["JavaScript", "React", "Node"]
};

// 1. Destructuring
const { name, skills } = user;
console.log("Name:", name);

// 2. Template literals
console.log(`${name} knows ${skills.join(", ")}`);

// 3. Spread operator to add new skill
const updatedSkills = [...skills, "MongoDB"];
console.log("Updated skills:", updatedSkills);

// 4. Rest operator function
function addSkills(...newSkills) {
  console.log("New skills added:", newSkills);
  return [...skills, ...newSkills];
}

const allSkills = addSkills("Python", "AWS", "Docker");
console.log("All skills:", allSkills);
