import { Instance } from "mobx-state-tree"
import { PokemonV2CharacteristicAggregateModelBase } from "./PokemonV2CharacteristicAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2CharacteristicAggregateModel */
export interface PokemonV2CharacteristicAggregateModelType extends Instance<typeof PokemonV2CharacteristicAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2CharacteristicAggregateModel */
export { selectFromPokemonV2CharacteristicAggregate, pokemonV2CharacteristicAggregateModelPrimitives, PokemonV2CharacteristicAggregateModelSelector } from "./PokemonV2CharacteristicAggregateModel.base"

/**
 * PokemonV2CharacteristicAggregateModel
 *
 * aggregated selection of "pokemon_v2_characteristic"
 */
export const PokemonV2CharacteristicAggregateModel = PokemonV2CharacteristicAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
