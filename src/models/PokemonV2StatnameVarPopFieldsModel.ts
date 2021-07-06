import { Instance } from "mobx-state-tree"
import { PokemonV2StatnameVarPopFieldsModelBase } from "./PokemonV2StatnameVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2StatnameVarPopFieldsModel */
export interface PokemonV2StatnameVarPopFieldsModelType extends Instance<typeof PokemonV2StatnameVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2StatnameVarPopFieldsModel */
export { selectFromPokemonV2StatnameVarPopFields, pokemonV2StatnameVarPopFieldsModelPrimitives, PokemonV2StatnameVarPopFieldsModelSelector } from "./PokemonV2StatnameVarPopFieldsModel.base"

/**
 * PokemonV2StatnameVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2StatnameVarPopFieldsModel = PokemonV2StatnameVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
