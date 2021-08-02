// async & await

const getTodos = async () => {
  const response = await fetch("todos/eren.json");
  const data = await response.json();
  return data;
};

console.log(1);
console.log(2);

getTodos()
  .then((data) => console.log("resolved:", data))
  .catch((err) => console.log(err));

console.log(3);
console.log(4);

// fetch("todos/eren.json")
//   .then((response) => {
//     console.log("resolved", response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("rejected", err);
//   });
