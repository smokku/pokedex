import { Instance } from "mobx-state-tree"
import { PokemonV2ContesttypeAggregateFieldsModelBase } from "./PokemonV2ContesttypeAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesttypeAggregateFieldsModel */
export interface PokemonV2ContesttypeAggregateFieldsModelType extends Instance<typeof PokemonV2ContesttypeAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesttypeAggregateFieldsModel */
export { selectFromPokemonV2ContesttypeAggregateFields, pokemonV2ContesttypeAggregateFieldsModelPrimitives, PokemonV2ContesttypeAggregateFieldsModelSelector } from "./PokemonV2ContesttypeAggregateFieldsModel.base"

/**
 * PokemonV2ContesttypeAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_contesttype"
 */
export const PokemonV2ContesttypeAggregateFieldsModel = PokemonV2ContesttypeAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
