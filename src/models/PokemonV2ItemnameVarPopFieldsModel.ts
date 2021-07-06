import { Instance } from "mobx-state-tree"
import { PokemonV2ItemnameVarPopFieldsModelBase } from "./PokemonV2ItemnameVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemnameVarPopFieldsModel */
export interface PokemonV2ItemnameVarPopFieldsModelType extends Instance<typeof PokemonV2ItemnameVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemnameVarPopFieldsModel */
export { selectFromPokemonV2ItemnameVarPopFields, pokemonV2ItemnameVarPopFieldsModelPrimitives, PokemonV2ItemnameVarPopFieldsModelSelector } from "./PokemonV2ItemnameVarPopFieldsModel.base"

/**
 * PokemonV2ItemnameVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2ItemnameVarPopFieldsModel = PokemonV2ItemnameVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
