import { SequencesEnum } from '@/utils/sequences.enum';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

const useSequenceStore = defineStore('sequence', () => {
  const sequence = ref<number[]>([]);
  const playerSequence = ref<number[]>([]);
  const pSequenceIsValid = ref(false);
  const sequenceLength = computed(() => sequence.value.length);
  const playerSequenceLength = computed(() => playerSequence.value.length);
  const current = ref<number | null>(null);

  function addToSequence(number: number, sequenceType: SequencesEnum) {
    if (sequenceType === SequencesEnum.PLAYER) {
      return addToPlayerSequence(number);
    }

    return addToPcSequence(number);
  }

  function clearSequences() {
    clearPcSequence();
    clearPlayerSequence();
  }

  function addToPcSequence(number: number) {
    sequence.value.push(number);
  }

  function addToPlayerSequence(number: number) {
    playerSequence.value.push(number);
  }

  function clearPcSequence() {
    sequence.value = [];
  }

  function clearPlayerSequence() {
    playerSequence.value = [];
  }

  function setPSequenceIsValid(isValid: boolean) {
    pSequenceIsValid.value = isValid;
  }

  function setCurrent(number: number | null) {
    current.value = number;
  }

  return {
    sequence,
    playerSequence,
    pSequenceIsValid,
    sequenceLength,
    playerSequenceLength,
    current,
    addToSequence,
    clearSequences,
    clearPlayerSequence,
    setPSequenceIsValid,
    setCurrent,
  };
});

export default useSequenceStore;
