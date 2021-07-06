import { Instance } from "mobx-state-tree"
import { PokemonV2PokemoncolorAggregateFieldsModelBase } from "./PokemonV2PokemoncolorAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemoncolorAggregateFieldsModel */
export interface PokemonV2PokemoncolorAggregateFieldsModelType extends Instance<typeof PokemonV2PokemoncolorAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemoncolorAggregateFieldsModel */
export { selectFromPokemonV2PokemoncolorAggregateFields, pokemonV2PokemoncolorAggregateFieldsModelPrimitives, PokemonV2PokemoncolorAggregateFieldsModelSelector } from "./PokemonV2PokemoncolorAggregateFieldsModel.base"

/**
 * PokemonV2PokemoncolorAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_pokemoncolor"
 */
export const PokemonV2PokemoncolorAggregateFieldsModel = PokemonV2PokemoncolorAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
