import { Card }from "./card";

export function List({robots}) {
  
  return (
    <div className="cards-list">
     <ul className="card-list">
      {robots.map(robot => (
        <li className="card-item" key={robot.id} >
          <Card {...robot} />
        </li>
      ))}
    </ul>
    </div>
  );
}
