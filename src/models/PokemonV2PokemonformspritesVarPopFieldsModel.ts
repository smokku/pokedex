import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformspritesVarPopFieldsModelBase } from "./PokemonV2PokemonformspritesVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformspritesVarPopFieldsModel */
export interface PokemonV2PokemonformspritesVarPopFieldsModelType extends Instance<typeof PokemonV2PokemonformspritesVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformspritesVarPopFieldsModel */
export { selectFromPokemonV2PokemonformspritesVarPopFields, pokemonV2PokemonformspritesVarPopFieldsModelPrimitives, PokemonV2PokemonformspritesVarPopFieldsModelSelector } from "./PokemonV2PokemonformspritesVarPopFieldsModel.base"

/**
 * PokemonV2PokemonformspritesVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokemonformspritesVarPopFieldsModel = PokemonV2PokemonformspritesVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
