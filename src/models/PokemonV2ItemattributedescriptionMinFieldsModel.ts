import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributedescriptionMinFieldsModelBase } from "./PokemonV2ItemattributedescriptionMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributedescriptionMinFieldsModel */
export interface PokemonV2ItemattributedescriptionMinFieldsModelType extends Instance<typeof PokemonV2ItemattributedescriptionMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributedescriptionMinFieldsModel */
export { selectFromPokemonV2ItemattributedescriptionMinFields, pokemonV2ItemattributedescriptionMinFieldsModelPrimitives, PokemonV2ItemattributedescriptionMinFieldsModelSelector } from "./PokemonV2ItemattributedescriptionMinFieldsModel.base"

/**
 * PokemonV2ItemattributedescriptionMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2ItemattributedescriptionMinFieldsModel = PokemonV2ItemattributedescriptionMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
