import { Instance } from "mobx-state-tree"
import { PokemonV2ContestcomboAggregateFieldsModelBase } from "./PokemonV2ContestcomboAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContestcomboAggregateFieldsModel */
export interface PokemonV2ContestcomboAggregateFieldsModelType extends Instance<typeof PokemonV2ContestcomboAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContestcomboAggregateFieldsModel */
export { selectFromPokemonV2ContestcomboAggregateFields, pokemonV2ContestcomboAggregateFieldsModelPrimitives, PokemonV2ContestcomboAggregateFieldsModelSelector } from "./PokemonV2ContestcomboAggregateFieldsModel.base"

/**
 * PokemonV2ContestcomboAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_contestcombo"
 */
export const PokemonV2ContestcomboAggregateFieldsModel = PokemonV2ContestcomboAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
