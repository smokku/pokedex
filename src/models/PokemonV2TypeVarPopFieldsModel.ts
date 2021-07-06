import { Instance } from "mobx-state-tree"
import { PokemonV2TypeVarPopFieldsModelBase } from "./PokemonV2TypeVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypeVarPopFieldsModel */
export interface PokemonV2TypeVarPopFieldsModelType extends Instance<typeof PokemonV2TypeVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypeVarPopFieldsModel */
export { selectFromPokemonV2TypeVarPopFields, pokemonV2TypeVarPopFieldsModelPrimitives, PokemonV2TypeVarPopFieldsModelSelector } from "./PokemonV2TypeVarPopFieldsModel.base"

/**
 * PokemonV2TypeVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2TypeVarPopFieldsModel = PokemonV2TypeVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
