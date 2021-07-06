import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffectVarPopFieldsModelBase } from "./PokemonV2ContesteffectVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffectVarPopFieldsModel */
export interface PokemonV2ContesteffectVarPopFieldsModelType extends Instance<typeof PokemonV2ContesteffectVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffectVarPopFieldsModel */
export { selectFromPokemonV2ContesteffectVarPopFields, pokemonV2ContesteffectVarPopFieldsModelPrimitives, PokemonV2ContesteffectVarPopFieldsModelSelector } from "./PokemonV2ContesteffectVarPopFieldsModel.base"

/**
 * PokemonV2ContesteffectVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2ContesteffectVarPopFieldsModel = PokemonV2ContesteffectVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
