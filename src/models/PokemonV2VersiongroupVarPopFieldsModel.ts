import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupVarPopFieldsModelBase } from "./PokemonV2VersiongroupVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupVarPopFieldsModel */
export interface PokemonV2VersiongroupVarPopFieldsModelType extends Instance<typeof PokemonV2VersiongroupVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupVarPopFieldsModel */
export { selectFromPokemonV2VersiongroupVarPopFields, pokemonV2VersiongroupVarPopFieldsModelPrimitives, PokemonV2VersiongroupVarPopFieldsModelSelector } from "./PokemonV2VersiongroupVarPopFieldsModel.base"

/**
 * PokemonV2VersiongroupVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2VersiongroupVarPopFieldsModel = PokemonV2VersiongroupVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
