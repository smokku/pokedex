import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupmovelearnmethodStddevPopFieldsModelBase } from "./PokemonV2VersiongroupmovelearnmethodStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupmovelearnmethodStddevPopFieldsModel */
export interface PokemonV2VersiongroupmovelearnmethodStddevPopFieldsModelType extends Instance<typeof PokemonV2VersiongroupmovelearnmethodStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupmovelearnmethodStddevPopFieldsModel */
export { selectFromPokemonV2VersiongroupmovelearnmethodStddevPopFields, pokemonV2VersiongroupmovelearnmethodStddevPopFieldsModelPrimitives, PokemonV2VersiongroupmovelearnmethodStddevPopFieldsModelSelector } from "./PokemonV2VersiongroupmovelearnmethodStddevPopFieldsModel.base"

/**
 * PokemonV2VersiongroupmovelearnmethodStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2VersiongroupmovelearnmethodStddevPopFieldsModel = PokemonV2VersiongroupmovelearnmethodStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
