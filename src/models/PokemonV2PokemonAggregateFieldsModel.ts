import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonAggregateFieldsModelBase } from "./PokemonV2PokemonAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonAggregateFieldsModel */
export interface PokemonV2PokemonAggregateFieldsModelType extends Instance<typeof PokemonV2PokemonAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonAggregateFieldsModel */
export { selectFromPokemonV2PokemonAggregateFields, pokemonV2PokemonAggregateFieldsModelPrimitives, PokemonV2PokemonAggregateFieldsModelSelector } from "./PokemonV2PokemonAggregateFieldsModel.base"

/**
 * PokemonV2PokemonAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_pokemon"
 */
export const PokemonV2PokemonAggregateFieldsModel = PokemonV2PokemonAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
