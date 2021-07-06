import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupAggregateModelBase } from "./PokemonV2VersiongroupAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupAggregateModel */
export interface PokemonV2VersiongroupAggregateModelType extends Instance<typeof PokemonV2VersiongroupAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupAggregateModel */
export { selectFromPokemonV2VersiongroupAggregate, pokemonV2VersiongroupAggregateModelPrimitives, PokemonV2VersiongroupAggregateModelSelector } from "./PokemonV2VersiongroupAggregateModel.base"

/**
 * PokemonV2VersiongroupAggregateModel
 *
 * aggregated selection of "pokemon_v2_versiongroup"
 */
export const PokemonV2VersiongroupAggregateModel = PokemonV2VersiongroupAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
