import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributedescriptionAvgFieldsModelBase } from "./PokemonV2ItemattributedescriptionAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributedescriptionAvgFieldsModel */
export interface PokemonV2ItemattributedescriptionAvgFieldsModelType extends Instance<typeof PokemonV2ItemattributedescriptionAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributedescriptionAvgFieldsModel */
export { selectFromPokemonV2ItemattributedescriptionAvgFields, pokemonV2ItemattributedescriptionAvgFieldsModelPrimitives, PokemonV2ItemattributedescriptionAvgFieldsModelSelector } from "./PokemonV2ItemattributedescriptionAvgFieldsModel.base"

/**
 * PokemonV2ItemattributedescriptionAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2ItemattributedescriptionAvgFieldsModel = PokemonV2ItemattributedescriptionAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
