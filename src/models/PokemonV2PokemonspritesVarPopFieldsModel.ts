import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspritesVarPopFieldsModelBase } from "./PokemonV2PokemonspritesVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspritesVarPopFieldsModel */
export interface PokemonV2PokemonspritesVarPopFieldsModelType extends Instance<typeof PokemonV2PokemonspritesVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspritesVarPopFieldsModel */
export { selectFromPokemonV2PokemonspritesVarPopFields, pokemonV2PokemonspritesVarPopFieldsModelPrimitives, PokemonV2PokemonspritesVarPopFieldsModelSelector } from "./PokemonV2PokemonspritesVarPopFieldsModel.base"

/**
 * PokemonV2PokemonspritesVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokemonspritesVarPopFieldsModel = PokemonV2PokemonspritesVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
