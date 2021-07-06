import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffectAggregateFieldsModelBase } from "./PokemonV2ContesteffectAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffectAggregateFieldsModel */
export interface PokemonV2ContesteffectAggregateFieldsModelType extends Instance<typeof PokemonV2ContesteffectAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffectAggregateFieldsModel */
export { selectFromPokemonV2ContesteffectAggregateFields, pokemonV2ContesteffectAggregateFieldsModelPrimitives, PokemonV2ContesteffectAggregateFieldsModelSelector } from "./PokemonV2ContesteffectAggregateFieldsModel.base"

/**
 * PokemonV2ContesteffectAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_contesteffect"
 */
export const PokemonV2ContesteffectAggregateFieldsModel = PokemonV2ContesteffectAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
