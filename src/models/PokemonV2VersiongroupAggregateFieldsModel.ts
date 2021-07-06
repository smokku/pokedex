import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupAggregateFieldsModelBase } from "./PokemonV2VersiongroupAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupAggregateFieldsModel */
export interface PokemonV2VersiongroupAggregateFieldsModelType extends Instance<typeof PokemonV2VersiongroupAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupAggregateFieldsModel */
export { selectFromPokemonV2VersiongroupAggregateFields, pokemonV2VersiongroupAggregateFieldsModelPrimitives, PokemonV2VersiongroupAggregateFieldsModelSelector } from "./PokemonV2VersiongroupAggregateFieldsModel.base"

/**
 * PokemonV2VersiongroupAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_versiongroup"
 */
export const PokemonV2VersiongroupAggregateFieldsModel = PokemonV2VersiongroupAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
