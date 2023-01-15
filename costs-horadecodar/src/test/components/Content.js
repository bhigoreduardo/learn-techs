function Content({ description, content, handleOnClick }) {
  return (
    <>
      {description && content && (
        <>
          <p>
            {description}: {content}
          </p>
          <button onClick={() => handleOnClick("")}>Clear</button>
        </>
      )}
    </>
  );
}
export default Content;
