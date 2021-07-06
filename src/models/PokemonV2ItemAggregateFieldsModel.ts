import { Instance } from "mobx-state-tree"
import { PokemonV2ItemAggregateFieldsModelBase } from "./PokemonV2ItemAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemAggregateFieldsModel */
export interface PokemonV2ItemAggregateFieldsModelType extends Instance<typeof PokemonV2ItemAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemAggregateFieldsModel */
export { selectFromPokemonV2ItemAggregateFields, pokemonV2ItemAggregateFieldsModelPrimitives, PokemonV2ItemAggregateFieldsModelSelector } from "./PokemonV2ItemAggregateFieldsModel.base"

/**
 * PokemonV2ItemAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_item"
 */
export const PokemonV2ItemAggregateFieldsModel = PokemonV2ItemAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
