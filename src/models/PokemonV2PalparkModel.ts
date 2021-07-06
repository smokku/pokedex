import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkModelBase } from "./PokemonV2PalparkModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkModel */
export interface PokemonV2PalparkModelType extends Instance<typeof PokemonV2PalparkModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkModel */
export { selectFromPokemonV2Palpark, pokemonV2PalparkModelPrimitives, PokemonV2PalparkModelSelector } from "./PokemonV2PalparkModel.base"

/**
 * PokemonV2PalparkModel
 *
 * columns and relationships of "pokemon_v2_palpark"
 */
export const PokemonV2PalparkModel = PokemonV2PalparkModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
