import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaailmentAggregateFieldsModelBase } from "./PokemonV2MovemetaailmentAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaailmentAggregateFieldsModel */
export interface PokemonV2MovemetaailmentAggregateFieldsModelType extends Instance<typeof PokemonV2MovemetaailmentAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaailmentAggregateFieldsModel */
export { selectFromPokemonV2MovemetaailmentAggregateFields, pokemonV2MovemetaailmentAggregateFieldsModelPrimitives, PokemonV2MovemetaailmentAggregateFieldsModelSelector } from "./PokemonV2MovemetaailmentAggregateFieldsModel.base"

/**
 * PokemonV2MovemetaailmentAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_movemetaailment"
 */
export const PokemonV2MovemetaailmentAggregateFieldsModel = PokemonV2MovemetaailmentAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
