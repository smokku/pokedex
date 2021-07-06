import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributeVarPopFieldsModelBase } from "./PokemonV2MoveattributeVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributeVarPopFieldsModel */
export interface PokemonV2MoveattributeVarPopFieldsModelType extends Instance<typeof PokemonV2MoveattributeVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributeVarPopFieldsModel */
export { selectFromPokemonV2MoveattributeVarPopFields, pokemonV2MoveattributeVarPopFieldsModelPrimitives, PokemonV2MoveattributeVarPopFieldsModelSelector } from "./PokemonV2MoveattributeVarPopFieldsModel.base"

/**
 * PokemonV2MoveattributeVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2MoveattributeVarPopFieldsModel = PokemonV2MoveattributeVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
