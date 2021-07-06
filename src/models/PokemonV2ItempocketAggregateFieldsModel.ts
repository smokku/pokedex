import { Instance } from "mobx-state-tree"
import { PokemonV2ItempocketAggregateFieldsModelBase } from "./PokemonV2ItempocketAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItempocketAggregateFieldsModel */
export interface PokemonV2ItempocketAggregateFieldsModelType extends Instance<typeof PokemonV2ItempocketAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItempocketAggregateFieldsModel */
export { selectFromPokemonV2ItempocketAggregateFields, pokemonV2ItempocketAggregateFieldsModelPrimitives, PokemonV2ItempocketAggregateFieldsModelSelector } from "./PokemonV2ItempocketAggregateFieldsModel.base"

/**
 * PokemonV2ItempocketAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_itempocket"
 */
export const PokemonV2ItempocketAggregateFieldsModel = PokemonV2ItempocketAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
