import { Instance } from "mobx-state-tree"
import { PokemonV2BerryfirmnessAggregateModelBase } from "./PokemonV2BerryfirmnessAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2BerryfirmnessAggregateModel */
export interface PokemonV2BerryfirmnessAggregateModelType extends Instance<typeof PokemonV2BerryfirmnessAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryfirmnessAggregateModel */
export { selectFromPokemonV2BerryfirmnessAggregate, pokemonV2BerryfirmnessAggregateModelPrimitives, PokemonV2BerryfirmnessAggregateModelSelector } from "./PokemonV2BerryfirmnessAggregateModel.base"

/**
 * PokemonV2BerryfirmnessAggregateModel
 *
 * aggregated selection of "pokemon_v2_berryfirmness"
 */
export const PokemonV2BerryfirmnessAggregateModel = PokemonV2BerryfirmnessAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
