import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetastatchangeAggregateModelBase } from "./PokemonV2MovemetastatchangeAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetastatchangeAggregateModel */
export interface PokemonV2MovemetastatchangeAggregateModelType extends Instance<typeof PokemonV2MovemetastatchangeAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetastatchangeAggregateModel */
export { selectFromPokemonV2MovemetastatchangeAggregate, pokemonV2MovemetastatchangeAggregateModelPrimitives, PokemonV2MovemetastatchangeAggregateModelSelector } from "./PokemonV2MovemetastatchangeAggregateModel.base"

/**
 * PokemonV2MovemetastatchangeAggregateModel
 *
 * aggregated selection of "pokemon_v2_movemetastatchange"
 */
export const PokemonV2MovemetastatchangeAggregateModel = PokemonV2MovemetastatchangeAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
