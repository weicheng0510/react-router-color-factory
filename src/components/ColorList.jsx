import { Link } from "react-router-dom";

const ColorList = ({ colors }) => {
  return (
    <div>
      <h1>Welcome to the Color Factory</h1>
      <Link to="/colors/new">Add a new color</Link>
      <ul>
        {colors.map(color => (
          <li key={color.name}>
            <Link to={`/colors/${color.name}`}>{color.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default ColorList;