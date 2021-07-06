import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonitemVarPopFieldsModelBase } from "./PokemonV2PokemonitemVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonitemVarPopFieldsModel */
export interface PokemonV2PokemonitemVarPopFieldsModelType extends Instance<typeof PokemonV2PokemonitemVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonitemVarPopFieldsModel */
export { selectFromPokemonV2PokemonitemVarPopFields, pokemonV2PokemonitemVarPopFieldsModelPrimitives, PokemonV2PokemonitemVarPopFieldsModelSelector } from "./PokemonV2PokemonitemVarPopFieldsModel.base"

/**
 * PokemonV2PokemonitemVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokemonitemVarPopFieldsModel = PokemonV2PokemonitemVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
