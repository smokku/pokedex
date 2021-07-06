import { Instance } from "mobx-state-tree"
import { PokemonV2TypegameindexAggregateFieldsModelBase } from "./PokemonV2TypegameindexAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypegameindexAggregateFieldsModel */
export interface PokemonV2TypegameindexAggregateFieldsModelType extends Instance<typeof PokemonV2TypegameindexAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypegameindexAggregateFieldsModel */
export { selectFromPokemonV2TypegameindexAggregateFields, pokemonV2TypegameindexAggregateFieldsModelPrimitives, PokemonV2TypegameindexAggregateFieldsModelSelector } from "./PokemonV2TypegameindexAggregateFieldsModel.base"

/**
 * PokemonV2TypegameindexAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_typegameindex"
 */
export const PokemonV2TypegameindexAggregateFieldsModel = PokemonV2TypegameindexAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
