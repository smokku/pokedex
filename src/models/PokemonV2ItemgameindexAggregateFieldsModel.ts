import { Instance } from "mobx-state-tree"
import { PokemonV2ItemgameindexAggregateFieldsModelBase } from "./PokemonV2ItemgameindexAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemgameindexAggregateFieldsModel */
export interface PokemonV2ItemgameindexAggregateFieldsModelType extends Instance<typeof PokemonV2ItemgameindexAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemgameindexAggregateFieldsModel */
export { selectFromPokemonV2ItemgameindexAggregateFields, pokemonV2ItemgameindexAggregateFieldsModelPrimitives, PokemonV2ItemgameindexAggregateFieldsModelSelector } from "./PokemonV2ItemgameindexAggregateFieldsModel.base"

/**
 * PokemonV2ItemgameindexAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_itemgameindex"
 */
export const PokemonV2ItemgameindexAggregateFieldsModel = PokemonV2ItemgameindexAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
