import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavornameAggregateModelBase } from "./PokemonV2BerryflavornameAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavornameAggregateModel */
export interface PokemonV2BerryflavornameAggregateModelType extends Instance<typeof PokemonV2BerryflavornameAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavornameAggregateModel */
export { selectFromPokemonV2BerryflavornameAggregate, pokemonV2BerryflavornameAggregateModelPrimitives, PokemonV2BerryflavornameAggregateModelSelector } from "./PokemonV2BerryflavornameAggregateModel.base"

/**
 * PokemonV2BerryflavornameAggregateModel
 *
 * aggregated selection of "pokemon_v2_berryflavorname"
 */
export const PokemonV2BerryflavornameAggregateModel = PokemonV2BerryflavornameAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
