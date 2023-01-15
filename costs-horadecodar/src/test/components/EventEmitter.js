import Button from "./Button";

function EventEmitter() {
  const listenerButton = () => console.log("Button clicked listener");

  return (
    <div>
      <h2>Event Emitter</h2>
      <Button event={listenerButton} value="Click Event Button Emitter" />
    </div>
  );
}

export default EventEmitter;
