import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewColorForm = ({ addColor }) => {
  const [formData, setFormData] = useState({ name: '', color: '#000000' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({ ...formData, [name]: value }));
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(formData);
    navigate('/colors');
  }

  return (
    <div>
      <h1>Add a new color</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Color Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="color">Color Value:</label>
          <input
            type="color"
            id="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
            required
          />
        </div>
        <button>Add Color</button>
      </form>
    </div>
  );
};

export default NewColorForm;