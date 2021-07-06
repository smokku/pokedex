import { Instance } from "mobx-state-tree"
import { PokemonV2PokemondexnumberAggregateModelBase } from "./PokemonV2PokemondexnumberAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2PokemondexnumberAggregateModel */
export interface PokemonV2PokemondexnumberAggregateModelType extends Instance<typeof PokemonV2PokemondexnumberAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemondexnumberAggregateModel */
export { selectFromPokemonV2PokemondexnumberAggregate, pokemonV2PokemondexnumberAggregateModelPrimitives, PokemonV2PokemondexnumberAggregateModelSelector } from "./PokemonV2PokemondexnumberAggregateModel.base"

/**
 * PokemonV2PokemondexnumberAggregateModel
 *
 * aggregated selection of "pokemon_v2_pokemondexnumber"
 */
export const PokemonV2PokemondexnumberAggregateModel = PokemonV2PokemondexnumberAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
