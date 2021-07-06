import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareanameAvgFieldsModelBase } from "./PokemonV2LocationareanameAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareanameAvgFieldsModel */
export interface PokemonV2LocationareanameAvgFieldsModelType extends Instance<typeof PokemonV2LocationareanameAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareanameAvgFieldsModel */
export { selectFromPokemonV2LocationareanameAvgFields, pokemonV2LocationareanameAvgFieldsModelPrimitives, PokemonV2LocationareanameAvgFieldsModelSelector } from "./PokemonV2LocationareanameAvgFieldsModel.base"

/**
 * PokemonV2LocationareanameAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2LocationareanameAvgFieldsModel = PokemonV2LocationareanameAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
