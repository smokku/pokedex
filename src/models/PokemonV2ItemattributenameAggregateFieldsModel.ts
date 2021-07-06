import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributenameAggregateFieldsModelBase } from "./PokemonV2ItemattributenameAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributenameAggregateFieldsModel */
export interface PokemonV2ItemattributenameAggregateFieldsModelType extends Instance<typeof PokemonV2ItemattributenameAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributenameAggregateFieldsModel */
export { selectFromPokemonV2ItemattributenameAggregateFields, pokemonV2ItemattributenameAggregateFieldsModelPrimitives, PokemonV2ItemattributenameAggregateFieldsModelSelector } from "./PokemonV2ItemattributenameAggregateFieldsModel.base"

/**
 * PokemonV2ItemattributenameAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_itemattributename"
 */
export const PokemonV2ItemattributenameAggregateFieldsModel = PokemonV2ItemattributenameAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
