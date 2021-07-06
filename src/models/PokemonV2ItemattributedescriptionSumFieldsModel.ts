import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributedescriptionSumFieldsModelBase } from "./PokemonV2ItemattributedescriptionSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributedescriptionSumFieldsModel */
export interface PokemonV2ItemattributedescriptionSumFieldsModelType extends Instance<typeof PokemonV2ItemattributedescriptionSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributedescriptionSumFieldsModel */
export { selectFromPokemonV2ItemattributedescriptionSumFields, pokemonV2ItemattributedescriptionSumFieldsModelPrimitives, PokemonV2ItemattributedescriptionSumFieldsModelSelector } from "./PokemonV2ItemattributedescriptionSumFieldsModel.base"

/**
 * PokemonV2ItemattributedescriptionSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2ItemattributedescriptionSumFieldsModel = PokemonV2ItemattributedescriptionSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
