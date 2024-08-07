function Stats({ items }) {
  const numItems = items.length;
  const numItemsPacked = items.filter((items) => items.packed).length;
  const percentagePacked = Math.round((numItemsPacked / numItems) * 100);

  return (
    <footer className="stats">
      {percentagePacked !== 100
        ? `You have ${numItems} items on your list, and you already packed
      ${numItemsPacked} (${percentagePacked}%)`
        : "You got everything! Ready to go"}
    </footer>
  );
}

export default Stats;
