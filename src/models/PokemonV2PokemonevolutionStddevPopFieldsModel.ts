import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonevolutionStddevPopFieldsModelBase } from "./PokemonV2PokemonevolutionStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonevolutionStddevPopFieldsModel */
export interface PokemonV2PokemonevolutionStddevPopFieldsModelType extends Instance<typeof PokemonV2PokemonevolutionStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonevolutionStddevPopFieldsModel */
export { selectFromPokemonV2PokemonevolutionStddevPopFields, pokemonV2PokemonevolutionStddevPopFieldsModelPrimitives, PokemonV2PokemonevolutionStddevPopFieldsModelSelector } from "./PokemonV2PokemonevolutionStddevPopFieldsModel.base"

/**
 * PokemonV2PokemonevolutionStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokemonevolutionStddevPopFieldsModel = PokemonV2PokemonevolutionStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
