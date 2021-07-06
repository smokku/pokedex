import { Instance } from "mobx-state-tree"
import { PokemonV2StatnameAggregateFieldsModelBase } from "./PokemonV2StatnameAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2StatnameAggregateFieldsModel */
export interface PokemonV2StatnameAggregateFieldsModelType extends Instance<typeof PokemonV2StatnameAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2StatnameAggregateFieldsModel */
export { selectFromPokemonV2StatnameAggregateFields, pokemonV2StatnameAggregateFieldsModelPrimitives, PokemonV2StatnameAggregateFieldsModelSelector } from "./PokemonV2StatnameAggregateFieldsModel.base"

/**
 * PokemonV2StatnameAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_statname"
 */
export const PokemonV2StatnameAggregateFieldsModel = PokemonV2StatnameAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
