import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonevolutionModelBase } from "./PokemonV2PokemonevolutionModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonevolutionModel */
export interface PokemonV2PokemonevolutionModelType extends Instance<typeof PokemonV2PokemonevolutionModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonevolutionModel */
export { selectFromPokemonV2Pokemonevolution, pokemonV2PokemonevolutionModelPrimitives, PokemonV2PokemonevolutionModelSelector } from "./PokemonV2PokemonevolutionModel.base"

/**
 * PokemonV2PokemonevolutionModel
 *
 * columns and relationships of "pokemon_v2_pokemonevolution"
 */
export const PokemonV2PokemonevolutionModel = PokemonV2PokemonevolutionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
