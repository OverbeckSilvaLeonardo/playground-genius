import { setActivePinia, createPinia } from "pinia";
import useGameStore from "@/store/game";

describe('Main Game Store', () => {
    beforeEach(() => setActivePinia(createPinia()))
})