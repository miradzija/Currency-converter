import "./index.css";

export default function App() {
  return (
    <div className="container">
      <div>
        <input type="text" />
        <select>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        <select>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="GBP">GBP</option>
        </select>
      </div>

      <p>OUTPUT</p>
    </div>
  );
}
