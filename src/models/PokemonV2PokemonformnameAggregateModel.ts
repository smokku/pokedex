import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformnameAggregateModelBase } from "./PokemonV2PokemonformnameAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformnameAggregateModel */
export interface PokemonV2PokemonformnameAggregateModelType extends Instance<typeof PokemonV2PokemonformnameAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformnameAggregateModel */
export { selectFromPokemonV2PokemonformnameAggregate, pokemonV2PokemonformnameAggregateModelPrimitives, PokemonV2PokemonformnameAggregateModelSelector } from "./PokemonV2PokemonformnameAggregateModel.base"

/**
 * PokemonV2PokemonformnameAggregateModel
 *
 * aggregated selection of "pokemon_v2_pokemonformname"
 */
export const PokemonV2PokemonformnameAggregateModel = PokemonV2PokemonformnameAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
