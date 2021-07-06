import { Instance } from "mobx-state-tree"
import { PokemonV2MovechangeVarPopFieldsModelBase } from "./PokemonV2MovechangeVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovechangeVarPopFieldsModel */
export interface PokemonV2MovechangeVarPopFieldsModelType extends Instance<typeof PokemonV2MovechangeVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovechangeVarPopFieldsModel */
export { selectFromPokemonV2MovechangeVarPopFields, pokemonV2MovechangeVarPopFieldsModelPrimitives, PokemonV2MovechangeVarPopFieldsModelSelector } from "./PokemonV2MovechangeVarPopFieldsModel.base"

/**
 * PokemonV2MovechangeVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2MovechangeVarPopFieldsModel = PokemonV2MovechangeVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
