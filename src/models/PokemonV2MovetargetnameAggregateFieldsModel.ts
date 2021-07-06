import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetnameAggregateFieldsModelBase } from "./PokemonV2MovetargetnameAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetnameAggregateFieldsModel */
export interface PokemonV2MovetargetnameAggregateFieldsModelType extends Instance<typeof PokemonV2MovetargetnameAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetnameAggregateFieldsModel */
export { selectFromPokemonV2MovetargetnameAggregateFields, pokemonV2MovetargetnameAggregateFieldsModelPrimitives, PokemonV2MovetargetnameAggregateFieldsModelSelector } from "./PokemonV2MovetargetnameAggregateFieldsModel.base"

/**
 * PokemonV2MovetargetnameAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_movetargetname"
 */
export const PokemonV2MovetargetnameAggregateFieldsModel = PokemonV2MovetargetnameAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
