import { Instance } from "mobx-state-tree"
import { PokemonV2LocationgameindexAggregateFieldsModelBase } from "./PokemonV2LocationgameindexAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationgameindexAggregateFieldsModel */
export interface PokemonV2LocationgameindexAggregateFieldsModelType extends Instance<typeof PokemonV2LocationgameindexAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationgameindexAggregateFieldsModel */
export { selectFromPokemonV2LocationgameindexAggregateFields, pokemonV2LocationgameindexAggregateFieldsModelPrimitives, PokemonV2LocationgameindexAggregateFieldsModelSelector } from "./PokemonV2LocationgameindexAggregateFieldsModel.base"

/**
 * PokemonV2LocationgameindexAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_locationgameindex"
 */
export const PokemonV2LocationgameindexAggregateFieldsModel = PokemonV2LocationgameindexAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
