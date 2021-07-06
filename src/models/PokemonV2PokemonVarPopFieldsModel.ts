import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonVarPopFieldsModelBase } from "./PokemonV2PokemonVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonVarPopFieldsModel */
export interface PokemonV2PokemonVarPopFieldsModelType extends Instance<typeof PokemonV2PokemonVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonVarPopFieldsModel */
export { selectFromPokemonV2PokemonVarPopFields, pokemonV2PokemonVarPopFieldsModelPrimitives, PokemonV2PokemonVarPopFieldsModelSelector } from "./PokemonV2PokemonVarPopFieldsModel.base"

/**
 * PokemonV2PokemonVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokemonVarPopFieldsModel = PokemonV2PokemonVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
