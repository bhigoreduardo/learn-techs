function Loop({ items }) {
  return (
    <div>
      <h2>Loop</h2>
      {items ? (
        items.map((item, index) => (
          <p key={index}>
            {index}: {item}
          </p>
        ))
      ) : (
        <p>No content</p>
      )}
    </div>
  );
}
export default Loop;
