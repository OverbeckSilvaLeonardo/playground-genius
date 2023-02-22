export default interface IGameMode {
  start(): void;
  stop(): void;
  replaySequence(): void;
  nextStep(): void;
  validateSequence(): void;
}