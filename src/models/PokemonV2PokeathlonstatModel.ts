import { Instance } from "mobx-state-tree"
import { PokemonV2PokeathlonstatModelBase } from "./PokemonV2PokeathlonstatModel.base"

/* The TypeScript type of an instance of PokemonV2PokeathlonstatModel */
export interface PokemonV2PokeathlonstatModelType extends Instance<typeof PokemonV2PokeathlonstatModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokeathlonstatModel */
export { selectFromPokemonV2Pokeathlonstat, pokemonV2PokeathlonstatModelPrimitives, PokemonV2PokeathlonstatModelSelector } from "./PokemonV2PokeathlonstatModel.base"

/**
 * PokemonV2PokeathlonstatModel
 *
 * columns and relationships of "pokemon_v2_pokeathlonstat"
 */
export const PokemonV2PokeathlonstatModel = PokemonV2PokeathlonstatModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
