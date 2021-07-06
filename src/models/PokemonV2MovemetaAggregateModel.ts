import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaAggregateModelBase } from "./PokemonV2MovemetaAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaAggregateModel */
export interface PokemonV2MovemetaAggregateModelType extends Instance<typeof PokemonV2MovemetaAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaAggregateModel */
export { selectFromPokemonV2MovemetaAggregate, pokemonV2MovemetaAggregateModelPrimitives, PokemonV2MovemetaAggregateModelSelector } from "./PokemonV2MovemetaAggregateModel.base"

/**
 * PokemonV2MovemetaAggregateModel
 *
 * aggregated selection of "pokemon_v2_movemeta"
 */
export const PokemonV2MovemetaAggregateModel = PokemonV2MovemetaAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
