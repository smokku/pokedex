import { Instance } from "mobx-state-tree"
import { PokemonV2StatAggregateFieldsModelBase } from "./PokemonV2StatAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2StatAggregateFieldsModel */
export interface PokemonV2StatAggregateFieldsModelType extends Instance<typeof PokemonV2StatAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2StatAggregateFieldsModel */
export { selectFromPokemonV2StatAggregateFields, pokemonV2StatAggregateFieldsModelPrimitives, PokemonV2StatAggregateFieldsModelSelector } from "./PokemonV2StatAggregateFieldsModel.base"

/**
 * PokemonV2StatAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_stat"
 */
export const PokemonV2StatAggregateFieldsModel = PokemonV2StatAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
