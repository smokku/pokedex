import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflavortextAggregateFieldsModelBase } from "./PokemonV2ItemflavortextAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflavortextAggregateFieldsModel */
export interface PokemonV2ItemflavortextAggregateFieldsModelType extends Instance<typeof PokemonV2ItemflavortextAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflavortextAggregateFieldsModel */
export { selectFromPokemonV2ItemflavortextAggregateFields, pokemonV2ItemflavortextAggregateFieldsModelPrimitives, PokemonV2ItemflavortextAggregateFieldsModelSelector } from "./PokemonV2ItemflavortextAggregateFieldsModel.base"

/**
 * PokemonV2ItemflavortextAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_itemflavortext"
 */
export const PokemonV2ItemflavortextAggregateFieldsModel = PokemonV2ItemflavortextAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
