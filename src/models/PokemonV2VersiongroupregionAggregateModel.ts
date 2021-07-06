import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupregionAggregateModelBase } from "./PokemonV2VersiongroupregionAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupregionAggregateModel */
export interface PokemonV2VersiongroupregionAggregateModelType extends Instance<typeof PokemonV2VersiongroupregionAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupregionAggregateModel */
export { selectFromPokemonV2VersiongroupregionAggregate, pokemonV2VersiongroupregionAggregateModelPrimitives, PokemonV2VersiongroupregionAggregateModelSelector } from "./PokemonV2VersiongroupregionAggregateModel.base"

/**
 * PokemonV2VersiongroupregionAggregateModel
 *
 * aggregated selection of "pokemon_v2_versiongroupregion"
 */
export const PokemonV2VersiongroupregionAggregateModel = PokemonV2VersiongroupregionAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
