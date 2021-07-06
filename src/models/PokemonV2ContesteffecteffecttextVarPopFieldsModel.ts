import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffecteffecttextVarPopFieldsModelBase } from "./PokemonV2ContesteffecteffecttextVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffecteffecttextVarPopFieldsModel */
export interface PokemonV2ContesteffecteffecttextVarPopFieldsModelType extends Instance<typeof PokemonV2ContesteffecteffecttextVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffecteffecttextVarPopFieldsModel */
export { selectFromPokemonV2ContesteffecteffecttextVarPopFields, pokemonV2ContesteffecteffecttextVarPopFieldsModelPrimitives, PokemonV2ContesteffecteffecttextVarPopFieldsModelSelector } from "./PokemonV2ContesteffecteffecttextVarPopFieldsModel.base"

/**
 * PokemonV2ContesteffecteffecttextVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2ContesteffecteffecttextVarPopFieldsModel = PokemonV2ContesteffecteffecttextVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
