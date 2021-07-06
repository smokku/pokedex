import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributeAggregateFieldsModelBase } from "./PokemonV2ItemattributeAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributeAggregateFieldsModel */
export interface PokemonV2ItemattributeAggregateFieldsModelType extends Instance<typeof PokemonV2ItemattributeAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributeAggregateFieldsModel */
export { selectFromPokemonV2ItemattributeAggregateFields, pokemonV2ItemattributeAggregateFieldsModelPrimitives, PokemonV2ItemattributeAggregateFieldsModelSelector } from "./PokemonV2ItemattributeAggregateFieldsModel.base"

/**
 * PokemonV2ItemattributeAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_itemattribute"
 */
export const PokemonV2ItemattributeAggregateFieldsModel = PokemonV2ItemattributeAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
