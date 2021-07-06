import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffectflavortextMinFieldsModelBase } from "./PokemonV2ContesteffectflavortextMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffectflavortextMinFieldsModel */
export interface PokemonV2ContesteffectflavortextMinFieldsModelType extends Instance<typeof PokemonV2ContesteffectflavortextMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffectflavortextMinFieldsModel */
export { selectFromPokemonV2ContesteffectflavortextMinFields, pokemonV2ContesteffectflavortextMinFieldsModelPrimitives, PokemonV2ContesteffectflavortextMinFieldsModelSelector } from "./PokemonV2ContesteffectflavortextMinFieldsModel.base"

/**
 * PokemonV2ContesteffectflavortextMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2ContesteffectflavortextMinFieldsModel = PokemonV2ContesteffectflavortextMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
