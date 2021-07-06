import { Instance } from "mobx-state-tree"
import { PokemonV2LocationAvgFieldsModelBase } from "./PokemonV2LocationAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationAvgFieldsModel */
export interface PokemonV2LocationAvgFieldsModelType extends Instance<typeof PokemonV2LocationAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationAvgFieldsModel */
export { selectFromPokemonV2LocationAvgFields, pokemonV2LocationAvgFieldsModelPrimitives, PokemonV2LocationAvgFieldsModelSelector } from "./PokemonV2LocationAvgFieldsModel.base"

/**
 * PokemonV2LocationAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2LocationAvgFieldsModel = PokemonV2LocationAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
