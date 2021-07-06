import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvaluenameVarPopFieldsModelBase } from "./PokemonV2EncounterconditionvaluenameVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvaluenameVarPopFieldsModel */
export interface PokemonV2EncounterconditionvaluenameVarPopFieldsModelType extends Instance<typeof PokemonV2EncounterconditionvaluenameVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvaluenameVarPopFieldsModel */
export { selectFromPokemonV2EncounterconditionvaluenameVarPopFields, pokemonV2EncounterconditionvaluenameVarPopFieldsModelPrimitives, PokemonV2EncounterconditionvaluenameVarPopFieldsModelSelector } from "./PokemonV2EncounterconditionvaluenameVarPopFieldsModel.base"

/**
 * PokemonV2EncounterconditionvaluenameVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2EncounterconditionvaluenameVarPopFieldsModel = PokemonV2EncounterconditionvaluenameVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
