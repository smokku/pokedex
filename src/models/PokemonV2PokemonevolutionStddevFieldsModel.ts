import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonevolutionStddevFieldsModelBase } from "./PokemonV2PokemonevolutionStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonevolutionStddevFieldsModel */
export interface PokemonV2PokemonevolutionStddevFieldsModelType extends Instance<typeof PokemonV2PokemonevolutionStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonevolutionStddevFieldsModel */
export { selectFromPokemonV2PokemonevolutionStddevFields, pokemonV2PokemonevolutionStddevFieldsModelPrimitives, PokemonV2PokemonevolutionStddevFieldsModelSelector } from "./PokemonV2PokemonevolutionStddevFieldsModel.base"

/**
 * PokemonV2PokemonevolutionStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemonevolutionStddevFieldsModel = PokemonV2PokemonevolutionStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
