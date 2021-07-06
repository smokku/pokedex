import { Instance } from "mobx-state-tree"
import { PokemonV2RegionnameAggregateFieldsModelBase } from "./PokemonV2RegionnameAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2RegionnameAggregateFieldsModel */
export interface PokemonV2RegionnameAggregateFieldsModelType extends Instance<typeof PokemonV2RegionnameAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2RegionnameAggregateFieldsModel */
export { selectFromPokemonV2RegionnameAggregateFields, pokemonV2RegionnameAggregateFieldsModelPrimitives, PokemonV2RegionnameAggregateFieldsModelSelector } from "./PokemonV2RegionnameAggregateFieldsModel.base"

/**
 * PokemonV2RegionnameAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_regionname"
 */
export const PokemonV2RegionnameAggregateFieldsModel = PokemonV2RegionnameAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
