import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformtypeAggregateFieldsModelBase } from "./PokemonV2PokemonformtypeAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformtypeAggregateFieldsModel */
export interface PokemonV2PokemonformtypeAggregateFieldsModelType extends Instance<typeof PokemonV2PokemonformtypeAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformtypeAggregateFieldsModel */
export { selectFromPokemonV2PokemonformtypeAggregateFields, pokemonV2PokemonformtypeAggregateFieldsModelPrimitives, PokemonV2PokemonformtypeAggregateFieldsModelSelector } from "./PokemonV2PokemonformtypeAggregateFieldsModel.base"

/**
 * PokemonV2PokemonformtypeAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_pokemonformtype"
 */
export const PokemonV2PokemonformtypeAggregateFieldsModel = PokemonV2PokemonformtypeAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
