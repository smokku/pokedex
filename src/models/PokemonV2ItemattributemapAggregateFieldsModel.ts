import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributemapAggregateFieldsModelBase } from "./PokemonV2ItemattributemapAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributemapAggregateFieldsModel */
export interface PokemonV2ItemattributemapAggregateFieldsModelType extends Instance<typeof PokemonV2ItemattributemapAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributemapAggregateFieldsModel */
export { selectFromPokemonV2ItemattributemapAggregateFields, pokemonV2ItemattributemapAggregateFieldsModelPrimitives, PokemonV2ItemattributemapAggregateFieldsModelSelector } from "./PokemonV2ItemattributemapAggregateFieldsModel.base"

/**
 * PokemonV2ItemattributemapAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_itemattributemap"
 */
export const PokemonV2ItemattributemapAggregateFieldsModel = PokemonV2ItemattributemapAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
