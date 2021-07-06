import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetacategoryAggregateFieldsModelBase } from "./PokemonV2MovemetacategoryAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetacategoryAggregateFieldsModel */
export interface PokemonV2MovemetacategoryAggregateFieldsModelType extends Instance<typeof PokemonV2MovemetacategoryAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetacategoryAggregateFieldsModel */
export { selectFromPokemonV2MovemetacategoryAggregateFields, pokemonV2MovemetacategoryAggregateFieldsModelPrimitives, PokemonV2MovemetacategoryAggregateFieldsModelSelector } from "./PokemonV2MovemetacategoryAggregateFieldsModel.base"

/**
 * PokemonV2MovemetacategoryAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_movemetacategory"
 */
export const PokemonV2MovemetacategoryAggregateFieldsModel = PokemonV2MovemetacategoryAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
