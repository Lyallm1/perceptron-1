import { sign } from '../activation';
import { TrainingData } from '../training-data';

export class Perceptron {
  private weights: number[];
  private biasWeight: number;

  constructor (numberOfInputs: number, public learningRate = 0.01) {
    this.weights = new Array(numberOfInputs).fill(0).map(_ => Math.random() * 2 - 1);
    this.biasWeight = Math.random() * 2 - 1;
  }

  public guess (inputs: number[]): number {
    let sum = inputs.reduce((sum, input, index) => sum + input * this.weights[index], 0);
    sum += this.biasWeight;

    const guess = sign(sum);

    return guess;
  }

  public get f (): (x: number) => number {
    return (x: number): number => this.m * x + this.b;
  }

  public get m (): number {
    return -this.weights[0] / this.weights[1];
  }

  public get b (): number {
    return -this.biasWeight / this.weights[1];
  }

  public train (data: TrainingData[]): void {
    data.forEach(datum => {
      const guess = this.guess(datum.values);
      const error = datum.label - guess;
      datum.correct = !error;

      this.weights = this.weights.map((weight, index) => weight + error * datum.values[index] * this.learningRate);
      this.biasWeight = this.biasWeight + error * this.learningRate;
    });
  }
}