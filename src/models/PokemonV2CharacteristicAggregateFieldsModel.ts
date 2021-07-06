import { Instance } from "mobx-state-tree"
import { PokemonV2CharacteristicAggregateFieldsModelBase } from "./PokemonV2CharacteristicAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2CharacteristicAggregateFieldsModel */
export interface PokemonV2CharacteristicAggregateFieldsModelType extends Instance<typeof PokemonV2CharacteristicAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2CharacteristicAggregateFieldsModel */
export { selectFromPokemonV2CharacteristicAggregateFields, pokemonV2CharacteristicAggregateFieldsModelPrimitives, PokemonV2CharacteristicAggregateFieldsModelSelector } from "./PokemonV2CharacteristicAggregateFieldsModel.base"

/**
 * PokemonV2CharacteristicAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_characteristic"
 */
export const PokemonV2CharacteristicAggregateFieldsModel = PokemonV2CharacteristicAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
