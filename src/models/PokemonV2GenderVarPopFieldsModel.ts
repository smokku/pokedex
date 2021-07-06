import { Instance } from "mobx-state-tree"
import { PokemonV2GenderVarPopFieldsModelBase } from "./PokemonV2GenderVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GenderVarPopFieldsModel */
export interface PokemonV2GenderVarPopFieldsModelType extends Instance<typeof PokemonV2GenderVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenderVarPopFieldsModel */
export { selectFromPokemonV2GenderVarPopFields, pokemonV2GenderVarPopFieldsModelPrimitives, PokemonV2GenderVarPopFieldsModelSelector } from "./PokemonV2GenderVarPopFieldsModel.base"

/**
 * PokemonV2GenderVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2GenderVarPopFieldsModel = PokemonV2GenderVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
