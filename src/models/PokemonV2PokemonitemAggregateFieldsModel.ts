import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonitemAggregateFieldsModelBase } from "./PokemonV2PokemonitemAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonitemAggregateFieldsModel */
export interface PokemonV2PokemonitemAggregateFieldsModelType extends Instance<typeof PokemonV2PokemonitemAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonitemAggregateFieldsModel */
export { selectFromPokemonV2PokemonitemAggregateFields, pokemonV2PokemonitemAggregateFieldsModelPrimitives, PokemonV2PokemonitemAggregateFieldsModelSelector } from "./PokemonV2PokemonitemAggregateFieldsModel.base"

/**
 * PokemonV2PokemonitemAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_pokemonitem"
 */
export const PokemonV2PokemonitemAggregateFieldsModel = PokemonV2PokemonitemAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
