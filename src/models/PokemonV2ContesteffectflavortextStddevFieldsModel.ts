import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffectflavortextStddevFieldsModelBase } from "./PokemonV2ContesteffectflavortextStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffectflavortextStddevFieldsModel */
export interface PokemonV2ContesteffectflavortextStddevFieldsModelType extends Instance<typeof PokemonV2ContesteffectflavortextStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffectflavortextStddevFieldsModel */
export { selectFromPokemonV2ContesteffectflavortextStddevFields, pokemonV2ContesteffectflavortextStddevFieldsModelPrimitives, PokemonV2ContesteffectflavortextStddevFieldsModelSelector } from "./PokemonV2ContesteffectflavortextStddevFieldsModel.base"

/**
 * PokemonV2ContesteffectflavortextStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2ContesteffectflavortextStddevFieldsModel = PokemonV2ContesteffectflavortextStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
