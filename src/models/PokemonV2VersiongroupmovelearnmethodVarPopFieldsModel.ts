import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupmovelearnmethodVarPopFieldsModelBase } from "./PokemonV2VersiongroupmovelearnmethodVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupmovelearnmethodVarPopFieldsModel */
export interface PokemonV2VersiongroupmovelearnmethodVarPopFieldsModelType extends Instance<typeof PokemonV2VersiongroupmovelearnmethodVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupmovelearnmethodVarPopFieldsModel */
export { selectFromPokemonV2VersiongroupmovelearnmethodVarPopFields, pokemonV2VersiongroupmovelearnmethodVarPopFieldsModelPrimitives, PokemonV2VersiongroupmovelearnmethodVarPopFieldsModelSelector } from "./PokemonV2VersiongroupmovelearnmethodVarPopFieldsModel.base"

/**
 * PokemonV2VersiongroupmovelearnmethodVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2VersiongroupmovelearnmethodVarPopFieldsModel = PokemonV2VersiongroupmovelearnmethodVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
