import { Instance } from "mobx-state-tree"
import { PokemonV2AbilityflavortextVarPopFieldsModelBase } from "./PokemonV2AbilityflavortextVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilityflavortextVarPopFieldsModel */
export interface PokemonV2AbilityflavortextVarPopFieldsModelType extends Instance<typeof PokemonV2AbilityflavortextVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilityflavortextVarPopFieldsModel */
export { selectFromPokemonV2AbilityflavortextVarPopFields, pokemonV2AbilityflavortextVarPopFieldsModelPrimitives, PokemonV2AbilityflavortextVarPopFieldsModelSelector } from "./PokemonV2AbilityflavortextVarPopFieldsModel.base"

/**
 * PokemonV2AbilityflavortextVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2AbilityflavortextVarPopFieldsModel = PokemonV2AbilityflavortextVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
