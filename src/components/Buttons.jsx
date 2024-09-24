function Buttons({ activeFilter, setActiveFilter }) {
  return (
    <div className="button-group">
      <button
        className={activeFilter === "all" ? "active" : ""}
        onClick={() => setActiveFilter("all")}
      >
        All
      </button>
      <button
        className={activeFilter === "women" ? "active" : ""}
        onClick={() => setActiveFilter("women")}
      >
        Women
      </button>
      <button
        className={activeFilter === "men" ? "active" : ""}
        onClick={() => setActiveFilter("men")}
      >
        Men
      </button>
      <button
        className={activeFilter === "byName" ? "active" : ""}
        onClick={() => setActiveFilter("byName")}
      >
        By name
      </button>
      <button
        className={activeFilter === "byAge" ? "active" : ""}
        onClick={() => setActiveFilter("byAge")}
      >
        By age
      </button>
    </div>
  );
}

export default Buttons;
