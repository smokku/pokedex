import { Instance } from "mobx-state-tree"
import { PokemonV2GenderAvgFieldsModelBase } from "./PokemonV2GenderAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GenderAvgFieldsModel */
export interface PokemonV2GenderAvgFieldsModelType extends Instance<typeof PokemonV2GenderAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenderAvgFieldsModel */
export { selectFromPokemonV2GenderAvgFields, pokemonV2GenderAvgFieldsModelPrimitives, PokemonV2GenderAvgFieldsModelSelector } from "./PokemonV2GenderAvgFieldsModel.base"

/**
 * PokemonV2GenderAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2GenderAvgFieldsModel = PokemonV2GenderAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
