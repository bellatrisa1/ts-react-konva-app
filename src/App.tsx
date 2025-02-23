import React, { useState } from "react";
import { Stage, Layer, Rect } from "react-konva";
import Konva from 'konva';
import TextEditor from "./components/TextEditor";
import "./App.css";

const App: React.FC = () => {
  const [shapes, setShapes] = useState<Konva.Shape[]>([]);
  const [selectedShapeId, setSelectedShapeId] = useState<string | null>(null);

  const addShape = () => {
    const rect = new Konva.Rect({
      x: 50,
      y: 50,
      width: 100,
      height: 100,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 2,
      id: `${shapes.length}`,
    });
    setShapes([...shapes, rect]);
  };

  const handleSelect = (id: string) => {
    setSelectedShapeId(id);
  };

  return (
    <div>
      <button onClick={addShape}>Добавить фигуру</button>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {shapes.map((shape) => (
            <Rect
              key={shape.attrs.id}
              {...shape.attrs}
              onClick={() => handleSelect(shape.attrs.id)}
              draggable
            />
          ))}
        </Layer>
      </Stage>
      {selectedShapeId && <TextEditor shapeId={selectedShapeId} />}
    </div>
  );
};

export default App;
