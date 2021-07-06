import { Instance } from "mobx-state-tree"
import { PokemonV2VersionnameVarPopFieldsModelBase } from "./PokemonV2VersionnameVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersionnameVarPopFieldsModel */
export interface PokemonV2VersionnameVarPopFieldsModelType extends Instance<typeof PokemonV2VersionnameVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersionnameVarPopFieldsModel */
export { selectFromPokemonV2VersionnameVarPopFields, pokemonV2VersionnameVarPopFieldsModelPrimitives, PokemonV2VersionnameVarPopFieldsModelSelector } from "./PokemonV2VersionnameVarPopFieldsModel.base"

/**
 * PokemonV2VersionnameVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2VersionnameVarPopFieldsModel = PokemonV2VersionnameVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
