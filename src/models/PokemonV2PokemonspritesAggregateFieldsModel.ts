import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspritesAggregateFieldsModelBase } from "./PokemonV2PokemonspritesAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspritesAggregateFieldsModel */
export interface PokemonV2PokemonspritesAggregateFieldsModelType extends Instance<typeof PokemonV2PokemonspritesAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspritesAggregateFieldsModel */
export { selectFromPokemonV2PokemonspritesAggregateFields, pokemonV2PokemonspritesAggregateFieldsModelPrimitives, PokemonV2PokemonspritesAggregateFieldsModelSelector } from "./PokemonV2PokemonspritesAggregateFieldsModel.base"

/**
 * PokemonV2PokemonspritesAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_pokemonsprites"
 */
export const PokemonV2PokemonspritesAggregateFieldsModel = PokemonV2PokemonspritesAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
