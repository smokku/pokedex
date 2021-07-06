import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonabilityAggregateFieldsModelBase } from "./PokemonV2PokemonabilityAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonabilityAggregateFieldsModel */
export interface PokemonV2PokemonabilityAggregateFieldsModelType extends Instance<typeof PokemonV2PokemonabilityAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonabilityAggregateFieldsModel */
export { selectFromPokemonV2PokemonabilityAggregateFields, pokemonV2PokemonabilityAggregateFieldsModelPrimitives, PokemonV2PokemonabilityAggregateFieldsModelSelector } from "./PokemonV2PokemonabilityAggregateFieldsModel.base"

/**
 * PokemonV2PokemonabilityAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_pokemonability"
 */
export const PokemonV2PokemonabilityAggregateFieldsModel = PokemonV2PokemonabilityAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
