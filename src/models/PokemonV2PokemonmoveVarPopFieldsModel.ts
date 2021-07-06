import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonmoveVarPopFieldsModelBase } from "./PokemonV2PokemonmoveVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonmoveVarPopFieldsModel */
export interface PokemonV2PokemonmoveVarPopFieldsModelType extends Instance<typeof PokemonV2PokemonmoveVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonmoveVarPopFieldsModel */
export { selectFromPokemonV2PokemonmoveVarPopFields, pokemonV2PokemonmoveVarPopFieldsModelPrimitives, PokemonV2PokemonmoveVarPopFieldsModelSelector } from "./PokemonV2PokemonmoveVarPopFieldsModel.base"

/**
 * PokemonV2PokemonmoveVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokemonmoveVarPopFieldsModel = PokemonV2PokemonmoveVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
