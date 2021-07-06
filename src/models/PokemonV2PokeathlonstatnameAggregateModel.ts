import { Instance } from "mobx-state-tree"
import { PokemonV2PokeathlonstatnameAggregateModelBase } from "./PokemonV2PokeathlonstatnameAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2PokeathlonstatnameAggregateModel */
export interface PokemonV2PokeathlonstatnameAggregateModelType extends Instance<typeof PokemonV2PokeathlonstatnameAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokeathlonstatnameAggregateModel */
export { selectFromPokemonV2PokeathlonstatnameAggregate, pokemonV2PokeathlonstatnameAggregateModelPrimitives, PokemonV2PokeathlonstatnameAggregateModelSelector } from "./PokemonV2PokeathlonstatnameAggregateModel.base"

/**
 * PokemonV2PokeathlonstatnameAggregateModel
 *
 * aggregated selection of "pokemon_v2_pokeathlonstatname"
 */
export const PokemonV2PokeathlonstatnameAggregateModel = PokemonV2PokeathlonstatnameAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
