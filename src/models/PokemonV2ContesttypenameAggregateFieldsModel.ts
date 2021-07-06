import { Instance } from "mobx-state-tree"
import { PokemonV2ContesttypenameAggregateFieldsModelBase } from "./PokemonV2ContesttypenameAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesttypenameAggregateFieldsModel */
export interface PokemonV2ContesttypenameAggregateFieldsModelType extends Instance<typeof PokemonV2ContesttypenameAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesttypenameAggregateFieldsModel */
export { selectFromPokemonV2ContesttypenameAggregateFields, pokemonV2ContesttypenameAggregateFieldsModelPrimitives, PokemonV2ContesttypenameAggregateFieldsModelSelector } from "./PokemonV2ContesttypenameAggregateFieldsModel.base"

/**
 * PokemonV2ContesttypenameAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_contesttypename"
 */
export const PokemonV2ContesttypenameAggregateFieldsModel = PokemonV2ContesttypenameAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
