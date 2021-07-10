import { Instance } from "mobx-state-tree";
import { RootStoreBase } from "./RootStore.base";

export interface RootStoreType extends Instance<typeof RootStore.Type> {}

// prettier-ignore
export const RootStore = RootStoreBase
  .views(self => ({
    get pokemonTypes(): string[] {
      const types = new Set<string>();
      self.pokemonV2Pokemon.forEach(
        pokemon => pokemon.pokemon_v2_pokemontypes?.forEach(
          ({ pokemon_v2_type: { name } } = {}) => { if (name) types.add(name) }));
      return [...types];
    }
  }))
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
