import { Instance } from "mobx-state-tree"
import { PokemonV2PokeathlonstatVarPopFieldsModelBase } from "./PokemonV2PokeathlonstatVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokeathlonstatVarPopFieldsModel */
export interface PokemonV2PokeathlonstatVarPopFieldsModelType extends Instance<typeof PokemonV2PokeathlonstatVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokeathlonstatVarPopFieldsModel */
export { selectFromPokemonV2PokeathlonstatVarPopFields, pokemonV2PokeathlonstatVarPopFieldsModelPrimitives, PokemonV2PokeathlonstatVarPopFieldsModelSelector } from "./PokemonV2PokeathlonstatVarPopFieldsModel.base"

/**
 * PokemonV2PokeathlonstatVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokeathlonstatVarPopFieldsModel = PokemonV2PokeathlonstatVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
