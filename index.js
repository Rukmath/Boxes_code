const Box = (props) => {
  const { classValue, size } = props;
  return (
    <div className={classValue}>
      <p>{size}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box classValue="box1" size="Small" />
      <Box classValue="box2" size="Medium" />
      <Box classValue="box3" size="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
