import { Instance } from "mobx-state-tree"
import { PokemonV2AbilitynameVarPopFieldsModelBase } from "./PokemonV2AbilitynameVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilitynameVarPopFieldsModel */
export interface PokemonV2AbilitynameVarPopFieldsModelType extends Instance<typeof PokemonV2AbilitynameVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilitynameVarPopFieldsModel */
export { selectFromPokemonV2AbilitynameVarPopFields, pokemonV2AbilitynameVarPopFieldsModelPrimitives, PokemonV2AbilitynameVarPopFieldsModelSelector } from "./PokemonV2AbilitynameVarPopFieldsModel.base"

/**
 * PokemonV2AbilitynameVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2AbilitynameVarPopFieldsModel = PokemonV2AbilitynameVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
