import { Instance } from "mobx-state-tree"
import { PokemonV2ItempocketAvgFieldsModelBase } from "./PokemonV2ItempocketAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItempocketAvgFieldsModel */
export interface PokemonV2ItempocketAvgFieldsModelType extends Instance<typeof PokemonV2ItempocketAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItempocketAvgFieldsModel */
export { selectFromPokemonV2ItempocketAvgFields, pokemonV2ItempocketAvgFieldsModelPrimitives, PokemonV2ItempocketAvgFieldsModelSelector } from "./PokemonV2ItempocketAvgFieldsModel.base"

/**
 * PokemonV2ItempocketAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2ItempocketAvgFieldsModel = PokemonV2ItempocketAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
