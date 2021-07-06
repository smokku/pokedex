import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffectflavortextVarPopFieldsModelBase } from "./PokemonV2ContesteffectflavortextVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffectflavortextVarPopFieldsModel */
export interface PokemonV2ContesteffectflavortextVarPopFieldsModelType extends Instance<typeof PokemonV2ContesteffectflavortextVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffectflavortextVarPopFieldsModel */
export { selectFromPokemonV2ContesteffectflavortextVarPopFields, pokemonV2ContesteffectflavortextVarPopFieldsModelPrimitives, PokemonV2ContesteffectflavortextVarPopFieldsModelSelector } from "./PokemonV2ContesteffectflavortextVarPopFieldsModel.base"

/**
 * PokemonV2ContesteffectflavortextVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2ContesteffectflavortextVarPopFieldsModel = PokemonV2ContesteffectflavortextVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
