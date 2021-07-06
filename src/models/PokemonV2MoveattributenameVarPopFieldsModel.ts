import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributenameVarPopFieldsModelBase } from "./PokemonV2MoveattributenameVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributenameVarPopFieldsModel */
export interface PokemonV2MoveattributenameVarPopFieldsModelType extends Instance<typeof PokemonV2MoveattributenameVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributenameVarPopFieldsModel */
export { selectFromPokemonV2MoveattributenameVarPopFields, pokemonV2MoveattributenameVarPopFieldsModelPrimitives, PokemonV2MoveattributenameVarPopFieldsModelSelector } from "./PokemonV2MoveattributenameVarPopFieldsModel.base"

/**
 * PokemonV2MoveattributenameVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2MoveattributenameVarPopFieldsModel = PokemonV2MoveattributenameVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
