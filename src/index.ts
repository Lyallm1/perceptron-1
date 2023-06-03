import { Ball } from './dynamic-canvas/shapes/ball.js';
import { Canvas } from './dynamic-canvas/canvas/canvas.js';
import { Line } from './dynamic-canvas/shapes/line.js';
import { Perceptron } from './neural-network/neuron/perceptron.js';
import { Text } from './dynamic-canvas/shapes/text.js';
import { TrainingData } from './neural-network/training-data.js';
import { Vector } from './dynamic-canvas/vector/vector.js';

let perceptron = new Perceptron(2, 0.001), m = 0.5, b = 0.5, dataPoints = 1000, learningRate = 0.001, interval: NodeJS.Timer, lossHistory: number[] = [];
const canvas = new Canvas(document.getElementById('graph'), { width: 800, height: 800 }),
perceptronVisualization = new Canvas(document.getElementById('perceptron'), { width: 400, height: 300 }),
lossVisualization = new Canvas(document.getElementById('loss'), { width: 400, height: 300 });

function drawPerceptron(p: Perceptron, x: number, y: number) {
  perceptronVisualization.removeShapes();
  perceptronVisualization.addShape(new Text(new Vector(15, 56), 'x', '24px'));
  perceptronVisualization.addShape(new Text(new Vector(15, 156), 'y', '24px'));
  perceptronVisualization.addShape(new Ball(25, new Vector(60, 50), 'white', 'black'));
  perceptronVisualization.addShape(new Ball(25, new Vector(60, 150), 'white', 'black'));
  perceptronVisualization.addShape(new Ball(25, new Vector(60, 250), 'white', 'black'));
  perceptronVisualization.addShape(new Line(new Vector(83, 60), new Vector(190, 145), 'black'));
  perceptronVisualization.addShape(new Line(new Vector(85, 150), new Vector(185, 150), 'black'));
  perceptronVisualization.addShape(new Line(new Vector(83, 240), new Vector(190, 155), 'black'));
  perceptronVisualization.addShape(new Text(new Vector(125, 86), p.status.weights[0].toFixed(3)));
  perceptronVisualization.addShape(new Text(new Vector(115, 145), p.status.weights[1].toFixed(3)));
  perceptronVisualization.addShape(new Text(new Vector(125, 225), p.status.biasWeight.toFixed(3)));
  perceptronVisualization.addShape(new Ball(25, new Vector(210, 150), 'white', 'black'));
  perceptronVisualization.addShape(new Line(new Vector(235, 150), new Vector(325, 150), 'black'));
  perceptronVisualization.addShape(new Text(new Vector(125, 290), `y = ${p.status.m.toFixed(2)}x + ${p.status.b.toFixed(2)}`, '30px'));
  perceptronVisualization.addShape(new Text(new Vector(55, 255), '1'));
  perceptronVisualization.addShape(new Text(new Vector(50, 290), 'bias', '12px'));
  if (x && y) {
    perceptronVisualization.addShape(new Text(new Vector(45, 55), x.toFixed(2)));
    perceptronVisualization.addShape(new Text(new Vector(45, 155), y.toFixed(2)));
    const weightedSum = x * p.status.weights[0] + y * p.status.weights[1] + p.status.biasWeight;
    perceptronVisualization.addShape(new Text(new Vector(195, 155), weightedSum.toFixed(2)));
    perceptronVisualization.addShape(new Ball(25, new Vector(350, 150), weightedSum > 0 ? 'gold' : 'lightblue', 'none'));
  }
  perceptronVisualization.draw();
}
function startTraining() {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
  perceptron = new Perceptron(2, learningRate);
  const trainingData = new Array(dataPoints).fill(0).map(() => {
    const x = Math.random() * 2 - 1, y = Math.random() * 2 - 1;
    return { values: [x, y], label: y > m * x + b ? 1 : -1, error: 1 } as TrainingData;
  });
  lossHistory = [];
  interval = setInterval(() => {
    if (!trainingData.find(data => data.error)) {
      console.log(`Training completed: ${perceptron.status.m.toFixed(2)} * x + ${perceptron.status.b.toFixed(2)} (expected ${m} * x + ${b})`);
      clearInterval(interval);
      return;
    }
    lossHistory.push(perceptron.train(trainingData));
    console.log(`Thinking: ${perceptron.status.m.toFixed(2)} * x + ${perceptron.status.b.toFixed(2)}`);
    const halfWidth = canvas.width / 2, halfHeight = canvas.height / 2;
    canvas.removeShapes();
    canvas.addShape(new Line(new Vector(halfWidth, 0), new Vector(halfWidth, canvas.width), 'grey'));
    canvas.addShape(new Line(new Vector(0, halfHeight), new Vector(canvas.height, halfWidth), 'grey'));
    canvas.addShape(new Text(new Vector(halfWidth + 10, 20), '-1', '20px', 'grey'));
    canvas.addShape(new Text(new Vector(halfWidth + 10, canvas.height - 5), '1', '20px', 'grey'));
    canvas.addShape(new Text(new Vector(5, halfHeight + 20), '-1', '20px', 'grey'));
    canvas.addShape(new Text(new Vector(canvas.width - 20, halfHeight + 20), '1', '20px', 'grey'));
    trainingData.map(data => new Ball(3, new Vector((data.values[0] + 1) * halfWidth, (data.values[1] + 1) * halfHeight), data.label === 1 ? 'gold' : 'lightblue', data.error ? 'red' : 'green')).forEach(canvas.addShape);
    canvas.addShape(new Line(new Vector(0, (perceptron.status.f(-1) + 1) * halfHeight), new Vector(canvas.height, (perceptron.status.f(1) + 1) * halfHeight)));
    canvas.draw();
    drawPerceptron(perceptron, 0, 0);
    lossVisualization.removeShapes();
    lossVisualization.addShape(new Line(new Vector(25, 25), new Vector(25, 275), 'grey'));
    lossVisualization.addShape(new Line(new Vector(25, 275), new Vector(375, 275), 'grey'));
    lossVisualization.draw();
    const ctx = lossVisualization.context;
    ctx.beginPath();
    lossHistory.forEach((l, i) => {
      const x = 25 + 350 * i / lossHistory.length, y = 275 - l / Math.max(...lossHistory) * 250;
      ctx.fillStyle = 'grey';
      ctx.fillText(l + '', x - 3, y - 5);
      if (i === 0) ctx.moveTo(x, y);
      else {
        ctx.lineTo(x, y);
        ctx.moveTo(x, y);
      }
    });
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'black';
    ctx.stroke();
  }, 300);
}

canvas.addEventListener('mousemove', (e: MouseEvent) => {
  const graphContainer = document.getElementById('graph');
  drawPerceptron(perceptron, (e.clientX - graphContainer.offsetLeft + window.scrollX) / 400 - 1, (e.clientY - graphContainer.offsetTop + window.scrollY) / 400 - 1);
});
document.getElementById('m')?.addEventListener('change', event => m = Number((event.target as HTMLInputElement).value));
document.getElementById('b')?.addEventListener('change', event => b = Number((event.target as HTMLInputElement).value));
document.getElementById('datapoints')?.addEventListener('change', event => dataPoints = Number((event.target as HTMLInputElement).value));
document.getElementById('learningrate')?.addEventListener('change', event => learningRate = Number((event.target as HTMLInputElement).value));
document.getElementById('train-button')?.addEventListener('click', startTraining);
document.getElementById('stop-button')?.addEventListener('click', () => clearInterval(interval));
window.addEventListener('load', startTraining);
