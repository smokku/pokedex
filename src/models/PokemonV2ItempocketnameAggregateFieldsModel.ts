import { Instance } from "mobx-state-tree"
import { PokemonV2ItempocketnameAggregateFieldsModelBase } from "./PokemonV2ItempocketnameAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItempocketnameAggregateFieldsModel */
export interface PokemonV2ItempocketnameAggregateFieldsModelType extends Instance<typeof PokemonV2ItempocketnameAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItempocketnameAggregateFieldsModel */
export { selectFromPokemonV2ItempocketnameAggregateFields, pokemonV2ItempocketnameAggregateFieldsModelPrimitives, PokemonV2ItempocketnameAggregateFieldsModelSelector } from "./PokemonV2ItempocketnameAggregateFieldsModel.base"

/**
 * PokemonV2ItempocketnameAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_itempocketname"
 */
export const PokemonV2ItempocketnameAggregateFieldsModel = PokemonV2ItempocketnameAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
