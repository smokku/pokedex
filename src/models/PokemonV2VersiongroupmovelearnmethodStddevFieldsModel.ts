import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupmovelearnmethodStddevFieldsModelBase } from "./PokemonV2VersiongroupmovelearnmethodStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupmovelearnmethodStddevFieldsModel */
export interface PokemonV2VersiongroupmovelearnmethodStddevFieldsModelType extends Instance<typeof PokemonV2VersiongroupmovelearnmethodStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupmovelearnmethodStddevFieldsModel */
export { selectFromPokemonV2VersiongroupmovelearnmethodStddevFields, pokemonV2VersiongroupmovelearnmethodStddevFieldsModelPrimitives, PokemonV2VersiongroupmovelearnmethodStddevFieldsModelSelector } from "./PokemonV2VersiongroupmovelearnmethodStddevFieldsModel.base"

/**
 * PokemonV2VersiongroupmovelearnmethodStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2VersiongroupmovelearnmethodStddevFieldsModel = PokemonV2VersiongroupmovelearnmethodStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
