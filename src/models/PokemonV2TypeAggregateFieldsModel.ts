import { Instance } from "mobx-state-tree"
import { PokemonV2TypeAggregateFieldsModelBase } from "./PokemonV2TypeAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypeAggregateFieldsModel */
export interface PokemonV2TypeAggregateFieldsModelType extends Instance<typeof PokemonV2TypeAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypeAggregateFieldsModel */
export { selectFromPokemonV2TypeAggregateFields, pokemonV2TypeAggregateFieldsModelPrimitives, PokemonV2TypeAggregateFieldsModelSelector } from "./PokemonV2TypeAggregateFieldsModel.base"

/**
 * PokemonV2TypeAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_type"
 */
export const PokemonV2TypeAggregateFieldsModel = PokemonV2TypeAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
