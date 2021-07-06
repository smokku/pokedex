import { Instance } from "mobx-state-tree"
import { PokemonV2AbilityAggregateFieldsModelBase } from "./PokemonV2AbilityAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilityAggregateFieldsModel */
export interface PokemonV2AbilityAggregateFieldsModelType extends Instance<typeof PokemonV2AbilityAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilityAggregateFieldsModel */
export { selectFromPokemonV2AbilityAggregateFields, pokemonV2AbilityAggregateFieldsModelPrimitives, PokemonV2AbilityAggregateFieldsModelSelector } from "./PokemonV2AbilityAggregateFieldsModel.base"

/**
 * PokemonV2AbilityAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_ability"
 */
export const PokemonV2AbilityAggregateFieldsModel = PokemonV2AbilityAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
