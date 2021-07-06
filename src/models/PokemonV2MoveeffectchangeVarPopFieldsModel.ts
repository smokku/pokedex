import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectchangeVarPopFieldsModelBase } from "./PokemonV2MoveeffectchangeVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectchangeVarPopFieldsModel */
export interface PokemonV2MoveeffectchangeVarPopFieldsModelType extends Instance<typeof PokemonV2MoveeffectchangeVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectchangeVarPopFieldsModel */
export { selectFromPokemonV2MoveeffectchangeVarPopFields, pokemonV2MoveeffectchangeVarPopFieldsModelPrimitives, PokemonV2MoveeffectchangeVarPopFieldsModelSelector } from "./PokemonV2MoveeffectchangeVarPopFieldsModel.base"

/**
 * PokemonV2MoveeffectchangeVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2MoveeffectchangeVarPopFieldsModel = PokemonV2MoveeffectchangeVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
