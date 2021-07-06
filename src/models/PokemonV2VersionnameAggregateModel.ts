import { Instance } from "mobx-state-tree"
import { PokemonV2VersionnameAggregateModelBase } from "./PokemonV2VersionnameAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2VersionnameAggregateModel */
export interface PokemonV2VersionnameAggregateModelType extends Instance<typeof PokemonV2VersionnameAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersionnameAggregateModel */
export { selectFromPokemonV2VersionnameAggregate, pokemonV2VersionnameAggregateModelPrimitives, PokemonV2VersionnameAggregateModelSelector } from "./PokemonV2VersionnameAggregateModel.base"

/**
 * PokemonV2VersionnameAggregateModel
 *
 * aggregated selection of "pokemon_v2_versionname"
 */
export const PokemonV2VersionnameAggregateModel = PokemonV2VersionnameAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
