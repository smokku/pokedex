import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavormapAggregateModelBase } from "./PokemonV2BerryflavormapAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavormapAggregateModel */
export interface PokemonV2BerryflavormapAggregateModelType extends Instance<typeof PokemonV2BerryflavormapAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavormapAggregateModel */
export { selectFromPokemonV2BerryflavormapAggregate, pokemonV2BerryflavormapAggregateModelPrimitives, PokemonV2BerryflavormapAggregateModelSelector } from "./PokemonV2BerryflavormapAggregateModel.base"

/**
 * PokemonV2BerryflavormapAggregateModel
 *
 * aggregated selection of "pokemon_v2_berryflavormap"
 */
export const PokemonV2BerryflavormapAggregateModel = PokemonV2BerryflavormapAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
