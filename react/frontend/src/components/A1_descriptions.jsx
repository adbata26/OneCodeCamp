export default function ({ description }) {
  return (
    <div>
       
      <div>
      <strong>Name:</strong> {description.name}
      </div>
      <div>
      <strong>Age:</strong> {description.Age}
      </div>
      <div>
      <strong>Bionote:</strong> <p>{description.description}</p>
     
      <button>LET'S DATE</button>
      </div>
    </div>
  );
}
