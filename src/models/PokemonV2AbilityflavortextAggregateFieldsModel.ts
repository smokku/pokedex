import { Instance } from "mobx-state-tree"
import { PokemonV2AbilityflavortextAggregateFieldsModelBase } from "./PokemonV2AbilityflavortextAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilityflavortextAggregateFieldsModel */
export interface PokemonV2AbilityflavortextAggregateFieldsModelType extends Instance<typeof PokemonV2AbilityflavortextAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilityflavortextAggregateFieldsModel */
export { selectFromPokemonV2AbilityflavortextAggregateFields, pokemonV2AbilityflavortextAggregateFieldsModelPrimitives, PokemonV2AbilityflavortextAggregateFieldsModelSelector } from "./PokemonV2AbilityflavortextAggregateFieldsModel.base"

/**
 * PokemonV2AbilityflavortextAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_abilityflavortext"
 */
export const PokemonV2AbilityflavortextAggregateFieldsModel = PokemonV2AbilityflavortextAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
