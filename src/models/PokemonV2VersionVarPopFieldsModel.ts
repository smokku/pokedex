import { Instance } from "mobx-state-tree"
import { PokemonV2VersionVarPopFieldsModelBase } from "./PokemonV2VersionVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersionVarPopFieldsModel */
export interface PokemonV2VersionVarPopFieldsModelType extends Instance<typeof PokemonV2VersionVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersionVarPopFieldsModel */
export { selectFromPokemonV2VersionVarPopFields, pokemonV2VersionVarPopFieldsModelPrimitives, PokemonV2VersionVarPopFieldsModelSelector } from "./PokemonV2VersionVarPopFieldsModel.base"

/**
 * PokemonV2VersionVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2VersionVarPopFieldsModel = PokemonV2VersionVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
