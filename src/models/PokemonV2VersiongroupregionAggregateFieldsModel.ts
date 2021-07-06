import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupregionAggregateFieldsModelBase } from "./PokemonV2VersiongroupregionAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupregionAggregateFieldsModel */
export interface PokemonV2VersiongroupregionAggregateFieldsModelType extends Instance<typeof PokemonV2VersiongroupregionAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupregionAggregateFieldsModel */
export { selectFromPokemonV2VersiongroupregionAggregateFields, pokemonV2VersiongroupregionAggregateFieldsModelPrimitives, PokemonV2VersiongroupregionAggregateFieldsModelSelector } from "./PokemonV2VersiongroupregionAggregateFieldsModel.base"

/**
 * PokemonV2VersiongroupregionAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_versiongroupregion"
 */
export const PokemonV2VersiongroupregionAggregateFieldsModel = PokemonV2VersiongroupregionAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
