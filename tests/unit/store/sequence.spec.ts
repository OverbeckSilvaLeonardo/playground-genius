import useSequenceStore from '@/store/sequence';
import { SequencesEnum } from '@/utils/sequences.enum';
import {createPinia, setActivePinia} from 'pinia';

describe('Sequences Store', () => {
  beforeEach(() => setActivePinia(createPinia()));

  it('should add de new number to the correct sequence', () => {
    const store = useSequenceStore();
    const newPlayerNumber = 1;
    const newPcNumber = 3;

    store.addToSequence(newPlayerNumber, SequencesEnum.PLAYER);
    const pSequenceLastElement = store.playerSequence.length - 1;
    expect(store.playerSequence[pSequenceLastElement]).toBe(newPlayerNumber);
    expect(store.playerSequence[pSequenceLastElement]).not.toBe(newPcNumber);

    store.addToSequence(newPcNumber, SequencesEnum.GAME);
    const sequenceLastElement = store.playerSequence.length - 1;
    expect(store.sequence[sequenceLastElement]).toBe(newPcNumber);
    expect(store.sequence[sequenceLastElement]).not.toBe(newPlayerNumber);
  });

  it('should remove all element when clearing sequences', () => {
    const store = useSequenceStore();

    store.addToSequence(2, SequencesEnum.PLAYER);
    store.addToSequence(2, SequencesEnum.PLAYER);
    store.addToSequence(3, SequencesEnum.PLAYER);
    store.addToSequence(1, SequencesEnum.PLAYER);
    store.addToSequence(0, SequencesEnum.PLAYER);

    expect(store.playerSequenceLength).toBe(5);
    store.clearSequences();
    expect(store.playerSequenceLength).toBe(0);


    store.addToSequence(2, SequencesEnum.GAME);
    store.addToSequence(2, SequencesEnum.GAME);
    store.addToSequence(3, SequencesEnum.GAME);
    store.addToSequence(1, SequencesEnum.GAME);
    store.addToSequence(0, SequencesEnum.GAME);

    expect(store.sequenceLength).toBe(5);
    store.clearSequences();
    expect(store.sequenceLength).toBe(0);
  })
});