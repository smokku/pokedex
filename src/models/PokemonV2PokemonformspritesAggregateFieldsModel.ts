import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformspritesAggregateFieldsModelBase } from "./PokemonV2PokemonformspritesAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformspritesAggregateFieldsModel */
export interface PokemonV2PokemonformspritesAggregateFieldsModelType extends Instance<typeof PokemonV2PokemonformspritesAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformspritesAggregateFieldsModel */
export { selectFromPokemonV2PokemonformspritesAggregateFields, pokemonV2PokemonformspritesAggregateFieldsModelPrimitives, PokemonV2PokemonformspritesAggregateFieldsModelSelector } from "./PokemonV2PokemonformspritesAggregateFieldsModel.base"

/**
 * PokemonV2PokemonformspritesAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_pokemonformsprites"
 */
export const PokemonV2PokemonformspritesAggregateFieldsModel = PokemonV2PokemonformspritesAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
