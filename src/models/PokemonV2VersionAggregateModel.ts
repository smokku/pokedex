import { Instance } from "mobx-state-tree"
import { PokemonV2VersionAggregateModelBase } from "./PokemonV2VersionAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2VersionAggregateModel */
export interface PokemonV2VersionAggregateModelType extends Instance<typeof PokemonV2VersionAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersionAggregateModel */
export { selectFromPokemonV2VersionAggregate, pokemonV2VersionAggregateModelPrimitives, PokemonV2VersionAggregateModelSelector } from "./PokemonV2VersionAggregateModel.base"

/**
 * PokemonV2VersionAggregateModel
 *
 * aggregated selection of "pokemon_v2_version"
 */
export const PokemonV2VersionAggregateModel = PokemonV2VersionAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
