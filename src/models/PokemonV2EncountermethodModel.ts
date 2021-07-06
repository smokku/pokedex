import { Instance } from "mobx-state-tree"
import { PokemonV2EncountermethodModelBase } from "./PokemonV2EncountermethodModel.base"

/* The TypeScript type of an instance of PokemonV2EncountermethodModel */
export interface PokemonV2EncountermethodModelType extends Instance<typeof PokemonV2EncountermethodModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncountermethodModel */
export { selectFromPokemonV2Encountermethod, pokemonV2EncountermethodModelPrimitives, PokemonV2EncountermethodModelSelector } from "./PokemonV2EncountermethodModel.base"

/**
 * PokemonV2EncountermethodModel
 *
 * columns and relationships of "pokemon_v2_encountermethod"
 */
export const PokemonV2EncountermethodModel = PokemonV2EncountermethodModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
