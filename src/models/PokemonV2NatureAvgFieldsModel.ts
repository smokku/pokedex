import { Instance } from "mobx-state-tree"
import { PokemonV2NatureAvgFieldsModelBase } from "./PokemonV2NatureAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NatureAvgFieldsModel */
export interface PokemonV2NatureAvgFieldsModelType extends Instance<typeof PokemonV2NatureAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NatureAvgFieldsModel */
export { selectFromPokemonV2NatureAvgFields, pokemonV2NatureAvgFieldsModelPrimitives, PokemonV2NatureAvgFieldsModelSelector } from "./PokemonV2NatureAvgFieldsModel.base"

/**
 * PokemonV2NatureAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2NatureAvgFieldsModel = PokemonV2NatureAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
