import { randomValue, shuffle } from '../utils.js';

import { TrainingData } from '../training-data.js';
import { sign } from '../activation.js';

export class Perceptron {
  private weights: number[];
  private biasWeight: number;

  constructor(numberOfInputs: number, public learningRate = 0.01) {
    this.weights = new Array(numberOfInputs).fill(0).map(randomValue);
    this.biasWeight = randomValue();
  }

  guess(inputs: number[]): number {
    return sign(inputs.reduce((sum, input, i) => sum + input * this.weights[i], 0) + this.biasWeight);
  }

  train(trainingData: TrainingData[]): number {
    const data = shuffle(trainingData);
    let loss = 0;
    data.forEach(datum => {
      const error = datum.label - this.guess(datum.values);
      datum.error = error;
      this.weights = this.weights.map((weight, index) => weight + error * datum.values[index] * this.learningRate);
      this.biasWeight += error * this.learningRate;
      loss += Math.abs(error / 2);
    });
    return loss;
  }

  private get f() { return (x: number) => this.m * x + this.b; }
  private get m() { return -this.weights[0] / this.weights[1]; }
  private get b() { return -this.biasWeight / this.weights[1]; }
  get status() { return { weights: this.weights, biasWeight: this.biasWeight, f: this.f, m: this.m, b: this.b }; }
}
