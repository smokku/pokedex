import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonshapeAvgFieldsModelBase } from "./PokemonV2PokemonshapeAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonshapeAvgFieldsModel */
export interface PokemonV2PokemonshapeAvgFieldsModelType extends Instance<typeof PokemonV2PokemonshapeAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonshapeAvgFieldsModel */
export { selectFromPokemonV2PokemonshapeAvgFields, pokemonV2PokemonshapeAvgFieldsModelPrimitives, PokemonV2PokemonshapeAvgFieldsModelSelector } from "./PokemonV2PokemonshapeAvgFieldsModel.base"

/**
 * PokemonV2PokemonshapeAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemonshapeAvgFieldsModel = PokemonV2PokemonshapeAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
