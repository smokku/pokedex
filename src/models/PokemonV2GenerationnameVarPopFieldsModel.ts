import { Instance } from "mobx-state-tree"
import { PokemonV2GenerationnameVarPopFieldsModelBase } from "./PokemonV2GenerationnameVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GenerationnameVarPopFieldsModel */
export interface PokemonV2GenerationnameVarPopFieldsModelType extends Instance<typeof PokemonV2GenerationnameVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenerationnameVarPopFieldsModel */
export { selectFromPokemonV2GenerationnameVarPopFields, pokemonV2GenerationnameVarPopFieldsModelPrimitives, PokemonV2GenerationnameVarPopFieldsModelSelector } from "./PokemonV2GenerationnameVarPopFieldsModel.base"

/**
 * PokemonV2GenerationnameVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2GenerationnameVarPopFieldsModel = PokemonV2GenerationnameVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
