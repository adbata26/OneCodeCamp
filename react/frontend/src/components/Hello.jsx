const name = "Allen";

function displamyage() {
  return 28;
}
function Hello({ person, fruits }) {
  return (
    <div>
      <h1>pogi si {person.name}</h1>
      <h1>Age is {person.age}</h1>
      <h1>Favorite Fruit {fruits}</h1>
    </div>
  );
}

export default Hello;
