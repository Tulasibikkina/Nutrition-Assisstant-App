import React, { useState } from "react";
import axios from "axios";

function Dashboard() {
  const [meal, setMeal] = useState({ title: "", calories: 0 });

  const addMeal = async () => {
    await axios.post("http://localhost:5000/api/meals", {
      ...meal,
      userId: "123" // replace with actual user id later
    });
    alert("Meal Added");
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <input placeholder="Meal Name"
        onChange={e => setMeal({ ...meal, title: e.target.value })} />

      <input placeholder="Calories"
        onChange={e => setMeal({ ...meal, calories: e.target.value })} />

      <button onClick={addMeal}>Add Meal</button>
    </div>
  );
}

export default Dashboard;