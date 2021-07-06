import { Instance } from "mobx-state-tree"
import { PokemonV2TypenameVarPopFieldsModelBase } from "./PokemonV2TypenameVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypenameVarPopFieldsModel */
export interface PokemonV2TypenameVarPopFieldsModelType extends Instance<typeof PokemonV2TypenameVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypenameVarPopFieldsModel */
export { selectFromPokemonV2TypenameVarPopFields, pokemonV2TypenameVarPopFieldsModelPrimitives, PokemonV2TypenameVarPopFieldsModelSelector } from "./PokemonV2TypenameVarPopFieldsModel.base"

/**
 * PokemonV2TypenameVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2TypenameVarPopFieldsModel = PokemonV2TypenameVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
