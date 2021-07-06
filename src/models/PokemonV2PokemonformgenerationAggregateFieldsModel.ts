import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformgenerationAggregateFieldsModelBase } from "./PokemonV2PokemonformgenerationAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformgenerationAggregateFieldsModel */
export interface PokemonV2PokemonformgenerationAggregateFieldsModelType extends Instance<typeof PokemonV2PokemonformgenerationAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformgenerationAggregateFieldsModel */
export { selectFromPokemonV2PokemonformgenerationAggregateFields, pokemonV2PokemonformgenerationAggregateFieldsModelPrimitives, PokemonV2PokemonformgenerationAggregateFieldsModelSelector } from "./PokemonV2PokemonformgenerationAggregateFieldsModel.base"

/**
 * PokemonV2PokemonformgenerationAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_pokemonformgeneration"
 */
export const PokemonV2PokemonformgenerationAggregateFieldsModel = PokemonV2PokemonformgenerationAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
