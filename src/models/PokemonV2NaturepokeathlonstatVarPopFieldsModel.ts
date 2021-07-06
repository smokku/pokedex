import { Instance } from "mobx-state-tree"
import { PokemonV2NaturepokeathlonstatVarPopFieldsModelBase } from "./PokemonV2NaturepokeathlonstatVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NaturepokeathlonstatVarPopFieldsModel */
export interface PokemonV2NaturepokeathlonstatVarPopFieldsModelType extends Instance<typeof PokemonV2NaturepokeathlonstatVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturepokeathlonstatVarPopFieldsModel */
export { selectFromPokemonV2NaturepokeathlonstatVarPopFields, pokemonV2NaturepokeathlonstatVarPopFieldsModelPrimitives, PokemonV2NaturepokeathlonstatVarPopFieldsModelSelector } from "./PokemonV2NaturepokeathlonstatVarPopFieldsModel.base"

/**
 * PokemonV2NaturepokeathlonstatVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2NaturepokeathlonstatVarPopFieldsModel = PokemonV2NaturepokeathlonstatVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
