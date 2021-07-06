import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitychangeAggregateFieldsModelBase } from "./PokemonV2AbilitychangeAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitychangeAggregateFieldsModel */
export interface PokemonV2AbilitychangeAggregateFieldsModelType extends Instance<typeof PokemonV2AbilitychangeAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitychangeAggregateFieldsModel */
export { selectFromPokemonV2AbilitychangeAggregateFields, pokemonV2AbilitychangeAggregateFieldsModelPrimitives, PokemonV2AbilitychangeAggregateFieldsModelSelector } from "./PokemonV2AbilitychangeAggregateFieldsModel.base"

/**
 * PokemonV2AbilitychangeAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_abilitychange"
 */
export const PokemonV2AbilitychangeAggregateFieldsModel = PokemonV2AbilitychangeAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
