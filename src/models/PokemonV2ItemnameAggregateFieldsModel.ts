import { Instance } from "mobx-state-tree"
import { PokemonV2ItemnameAggregateFieldsModelBase } from "./PokemonV2ItemnameAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemnameAggregateFieldsModel */
export interface PokemonV2ItemnameAggregateFieldsModelType extends Instance<typeof PokemonV2ItemnameAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemnameAggregateFieldsModel */
export { selectFromPokemonV2ItemnameAggregateFields, pokemonV2ItemnameAggregateFieldsModelPrimitives, PokemonV2ItemnameAggregateFieldsModelSelector } from "./PokemonV2ItemnameAggregateFieldsModel.base"

/**
 * PokemonV2ItemnameAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_itemname"
 */
export const PokemonV2ItemnameAggregateFieldsModel = PokemonV2ItemnameAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
