import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonegggroupAggregateModelBase } from "./PokemonV2PokemonegggroupAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonegggroupAggregateModel */
export interface PokemonV2PokemonegggroupAggregateModelType extends Instance<typeof PokemonV2PokemonegggroupAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonegggroupAggregateModel */
export { selectFromPokemonV2PokemonegggroupAggregate, pokemonV2PokemonegggroupAggregateModelPrimitives, PokemonV2PokemonegggroupAggregateModelSelector } from "./PokemonV2PokemonegggroupAggregateModel.base"

/**
 * PokemonV2PokemonegggroupAggregateModel
 *
 * aggregated selection of "pokemon_v2_pokemonegggroup"
 */
export const PokemonV2PokemonegggroupAggregateModel = PokemonV2PokemonegggroupAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
