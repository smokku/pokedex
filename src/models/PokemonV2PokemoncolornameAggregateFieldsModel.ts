import { Instance } from "mobx-state-tree"
import { PokemonV2PokemoncolornameAggregateFieldsModelBase } from "./PokemonV2PokemoncolornameAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemoncolornameAggregateFieldsModel */
export interface PokemonV2PokemoncolornameAggregateFieldsModelType extends Instance<typeof PokemonV2PokemoncolornameAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemoncolornameAggregateFieldsModel */
export { selectFromPokemonV2PokemoncolornameAggregateFields, pokemonV2PokemoncolornameAggregateFieldsModelPrimitives, PokemonV2PokemoncolornameAggregateFieldsModelSelector } from "./PokemonV2PokemoncolornameAggregateFieldsModel.base"

/**
 * PokemonV2PokemoncolornameAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_pokemoncolorname"
 */
export const PokemonV2PokemoncolornameAggregateFieldsModel = PokemonV2PokemoncolornameAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
