import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupmovelearnmethodVarSampFieldsModelBase } from "./PokemonV2VersiongroupmovelearnmethodVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupmovelearnmethodVarSampFieldsModel */
export interface PokemonV2VersiongroupmovelearnmethodVarSampFieldsModelType extends Instance<typeof PokemonV2VersiongroupmovelearnmethodVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupmovelearnmethodVarSampFieldsModel */
export { selectFromPokemonV2VersiongroupmovelearnmethodVarSampFields, pokemonV2VersiongroupmovelearnmethodVarSampFieldsModelPrimitives, PokemonV2VersiongroupmovelearnmethodVarSampFieldsModelSelector } from "./PokemonV2VersiongroupmovelearnmethodVarSampFieldsModel.base"

/**
 * PokemonV2VersiongroupmovelearnmethodVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2VersiongroupmovelearnmethodVarSampFieldsModel = PokemonV2VersiongroupmovelearnmethodVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
