import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffectflavortextStddevPopFieldsModelBase } from "./PokemonV2ContesteffectflavortextStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffectflavortextStddevPopFieldsModel */
export interface PokemonV2ContesteffectflavortextStddevPopFieldsModelType extends Instance<typeof PokemonV2ContesteffectflavortextStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffectflavortextStddevPopFieldsModel */
export { selectFromPokemonV2ContesteffectflavortextStddevPopFields, pokemonV2ContesteffectflavortextStddevPopFieldsModelPrimitives, PokemonV2ContesteffectflavortextStddevPopFieldsModelSelector } from "./PokemonV2ContesteffectflavortextStddevPopFieldsModel.base"

/**
 * PokemonV2ContesteffectflavortextStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2ContesteffectflavortextStddevPopFieldsModel = PokemonV2ContesteffectflavortextStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
