import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectVarPopFieldsModelBase } from "./PokemonV2MoveeffectVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectVarPopFieldsModel */
export interface PokemonV2MoveeffectVarPopFieldsModelType extends Instance<typeof PokemonV2MoveeffectVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectVarPopFieldsModel */
export { selectFromPokemonV2MoveeffectVarPopFields, pokemonV2MoveeffectVarPopFieldsModelPrimitives, PokemonV2MoveeffectVarPopFieldsModelSelector } from "./PokemonV2MoveeffectVarPopFieldsModel.base"

/**
 * PokemonV2MoveeffectVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2MoveeffectVarPopFieldsModel = PokemonV2MoveeffectVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
