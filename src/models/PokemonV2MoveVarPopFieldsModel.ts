import { Instance } from "mobx-state-tree"
import { PokemonV2MoveVarPopFieldsModelBase } from "./PokemonV2MoveVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveVarPopFieldsModel */
export interface PokemonV2MoveVarPopFieldsModelType extends Instance<typeof PokemonV2MoveVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveVarPopFieldsModel */
export { selectFromPokemonV2MoveVarPopFields, pokemonV2MoveVarPopFieldsModelPrimitives, PokemonV2MoveVarPopFieldsModelSelector } from "./PokemonV2MoveVarPopFieldsModel.base"

/**
 * PokemonV2MoveVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2MoveVarPopFieldsModel = PokemonV2MoveVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
