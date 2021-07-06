import { Instance } from "mobx-state-tree"
import { PokemonV2RegionAggregateFieldsModelBase } from "./PokemonV2RegionAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2RegionAggregateFieldsModel */
export interface PokemonV2RegionAggregateFieldsModelType extends Instance<typeof PokemonV2RegionAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2RegionAggregateFieldsModel */
export { selectFromPokemonV2RegionAggregateFields, pokemonV2RegionAggregateFieldsModelPrimitives, PokemonV2RegionAggregateFieldsModelSelector } from "./PokemonV2RegionAggregateFieldsModel.base"

/**
 * PokemonV2RegionAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_region"
 */
export const PokemonV2RegionAggregateFieldsModel = PokemonV2RegionAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
