import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributeAvgFieldsModelBase } from "./PokemonV2ItemattributeAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributeAvgFieldsModel */
export interface PokemonV2ItemattributeAvgFieldsModelType extends Instance<typeof PokemonV2ItemattributeAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributeAvgFieldsModel */
export { selectFromPokemonV2ItemattributeAvgFields, pokemonV2ItemattributeAvgFieldsModelPrimitives, PokemonV2ItemattributeAvgFieldsModelSelector } from "./PokemonV2ItemattributeAvgFieldsModel.base"

/**
 * PokemonV2ItemattributeAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2ItemattributeAvgFieldsModel = PokemonV2ItemattributeAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
