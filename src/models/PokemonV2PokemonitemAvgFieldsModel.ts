import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonitemAvgFieldsModelBase } from "./PokemonV2PokemonitemAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonitemAvgFieldsModel */
export interface PokemonV2PokemonitemAvgFieldsModelType extends Instance<typeof PokemonV2PokemonitemAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonitemAvgFieldsModel */
export { selectFromPokemonV2PokemonitemAvgFields, pokemonV2PokemonitemAvgFieldsModelPrimitives, PokemonV2PokemonitemAvgFieldsModelSelector } from "./PokemonV2PokemonitemAvgFieldsModel.base"

/**
 * PokemonV2PokemonitemAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemonitemAvgFieldsModel = PokemonV2PokemonitemAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
