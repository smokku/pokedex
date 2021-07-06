import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffectflavortextAggregateFieldsModelBase } from "./PokemonV2ContesteffectflavortextAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffectflavortextAggregateFieldsModel */
export interface PokemonV2ContesteffectflavortextAggregateFieldsModelType extends Instance<typeof PokemonV2ContesteffectflavortextAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffectflavortextAggregateFieldsModel */
export { selectFromPokemonV2ContesteffectflavortextAggregateFields, pokemonV2ContesteffectflavortextAggregateFieldsModelPrimitives, PokemonV2ContesteffectflavortextAggregateFieldsModelSelector } from "./PokemonV2ContesteffectflavortextAggregateFieldsModel.base"

/**
 * PokemonV2ContesteffectflavortextAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_contesteffectflavortext"
 */
export const PokemonV2ContesteffectflavortextAggregateFieldsModel = PokemonV2ContesteffectflavortextAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
