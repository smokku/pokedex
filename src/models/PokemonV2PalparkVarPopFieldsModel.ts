import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkVarPopFieldsModelBase } from "./PokemonV2PalparkVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkVarPopFieldsModel */
export interface PokemonV2PalparkVarPopFieldsModelType extends Instance<typeof PokemonV2PalparkVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkVarPopFieldsModel */
export { selectFromPokemonV2PalparkVarPopFields, pokemonV2PalparkVarPopFieldsModelPrimitives, PokemonV2PalparkVarPopFieldsModelSelector } from "./PokemonV2PalparkVarPopFieldsModel.base"

/**
 * PokemonV2PalparkVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PalparkVarPopFieldsModel = PokemonV2PalparkVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
