import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffectMinFieldsModelBase } from "./PokemonV2ContesteffectMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffectMinFieldsModel */
export interface PokemonV2ContesteffectMinFieldsModelType extends Instance<typeof PokemonV2ContesteffectMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffectMinFieldsModel */
export { selectFromPokemonV2ContesteffectMinFields, pokemonV2ContesteffectMinFieldsModelPrimitives, PokemonV2ContesteffectMinFieldsModelSelector } from "./PokemonV2ContesteffectMinFieldsModel.base"

/**
 * PokemonV2ContesteffectMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2ContesteffectMinFieldsModel = PokemonV2ContesteffectMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
