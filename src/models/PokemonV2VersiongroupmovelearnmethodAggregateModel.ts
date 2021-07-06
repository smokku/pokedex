import { Instance } from "mobx-state-tree"
import { PokemonV2VersiongroupmovelearnmethodAggregateModelBase } from "./PokemonV2VersiongroupmovelearnmethodAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2VersiongroupmovelearnmethodAggregateModel */
export interface PokemonV2VersiongroupmovelearnmethodAggregateModelType extends Instance<typeof PokemonV2VersiongroupmovelearnmethodAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2VersiongroupmovelearnmethodAggregateModel */
export { selectFromPokemonV2VersiongroupmovelearnmethodAggregate, pokemonV2VersiongroupmovelearnmethodAggregateModelPrimitives, PokemonV2VersiongroupmovelearnmethodAggregateModelSelector } from "./PokemonV2VersiongroupmovelearnmethodAggregateModel.base"

/**
 * PokemonV2VersiongroupmovelearnmethodAggregateModel
 *
 * aggregated selection of "pokemon_v2_versiongroupmovelearnmethod"
 */
export const PokemonV2VersiongroupmovelearnmethodAggregateModel = PokemonV2VersiongroupmovelearnmethodAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
