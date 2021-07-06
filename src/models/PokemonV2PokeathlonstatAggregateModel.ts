import { Instance } from "mobx-state-tree"
import { PokemonV2PokeathlonstatAggregateModelBase } from "./PokemonV2PokeathlonstatAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2PokeathlonstatAggregateModel */
export interface PokemonV2PokeathlonstatAggregateModelType extends Instance<typeof PokemonV2PokeathlonstatAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokeathlonstatAggregateModel */
export { selectFromPokemonV2PokeathlonstatAggregate, pokemonV2PokeathlonstatAggregateModelPrimitives, PokemonV2PokeathlonstatAggregateModelSelector } from "./PokemonV2PokeathlonstatAggregateModel.base"

/**
 * PokemonV2PokeathlonstatAggregateModel
 *
 * aggregated selection of "pokemon_v2_pokeathlonstat"
 */
export const PokemonV2PokeathlonstatAggregateModel = PokemonV2PokeathlonstatAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
