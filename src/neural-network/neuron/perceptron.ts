import { sign } from '../activation';
import { TrainingData } from '../training-data';
import { randomValue, shuffle } from '../utils';

export class Perceptron {
  private weights: number[];
  private biasWeight: number;

  constructor (numberOfInputs: number, public learningRate = 0.01) {
    this.weights = new Array(numberOfInputs).fill(0).map(randomValue);
    this.biasWeight = randomValue();
  }

  /** Guesses the output for the given inputs */
  public guess (inputs: number[]): number {
    let sum = inputs.reduce((sum, input, index) => sum + input * this.weights[index], 0);
    sum += this.biasWeight;

    const guess = sign(sum);

    return guess;
  }

  /** Returns the linear function this perceptron represents (y = mx + b) */
  public get f (): (x: number) => number {
    return (x: number): number => this.m * x + this.b;
  }

  /** Returns the m part of the linear function this perceptron represents (y = mx + b) */
  public get m (): number {
    return -this.weights[0] / this.weights[1];
  }

  /** Returns the b part of the linear function this perceptron represents (y = mx + b) */
  public get b (): number {
    return -this.biasWeight / this.weights[1];
  }

  /** Trains the perceptron with the given training data once */
  public train (trainingData: TrainingData[]): void {
    const data: TrainingData[] = shuffle(trainingData);

    data.forEach(datum => {
      const guess = this.guess(datum.values);
      const error = datum.label - guess;
      datum.correct = !error;

      this.weights = this.weights.map((weight, index) => weight + error * datum.values[index] * this.learningRate);
      this.biasWeight = this.biasWeight + error * this.learningRate;
    });
  }
}