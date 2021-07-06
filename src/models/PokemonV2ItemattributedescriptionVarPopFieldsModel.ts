import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributedescriptionVarPopFieldsModelBase } from "./PokemonV2ItemattributedescriptionVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributedescriptionVarPopFieldsModel */
export interface PokemonV2ItemattributedescriptionVarPopFieldsModelType extends Instance<typeof PokemonV2ItemattributedescriptionVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributedescriptionVarPopFieldsModel */
export { selectFromPokemonV2ItemattributedescriptionVarPopFields, pokemonV2ItemattributedescriptionVarPopFieldsModelPrimitives, PokemonV2ItemattributedescriptionVarPopFieldsModelSelector } from "./PokemonV2ItemattributedescriptionVarPopFieldsModel.base"

/**
 * PokemonV2ItemattributedescriptionVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2ItemattributedescriptionVarPopFieldsModel = PokemonV2ItemattributedescriptionVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
