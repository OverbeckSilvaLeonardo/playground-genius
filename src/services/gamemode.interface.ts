export default interface IGameMode {
  sequenceLength: number;
  sequence: number[];

  start(): void;
  stop(): void;
}