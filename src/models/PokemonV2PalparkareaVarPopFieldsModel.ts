import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkareaVarPopFieldsModelBase } from "./PokemonV2PalparkareaVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkareaVarPopFieldsModel */
export interface PokemonV2PalparkareaVarPopFieldsModelType extends Instance<typeof PokemonV2PalparkareaVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkareaVarPopFieldsModel */
export { selectFromPokemonV2PalparkareaVarPopFields, pokemonV2PalparkareaVarPopFieldsModelPrimitives, PokemonV2PalparkareaVarPopFieldsModelSelector } from "./PokemonV2PalparkareaVarPopFieldsModel.base"

/**
 * PokemonV2PalparkareaVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PalparkareaVarPopFieldsModel = PokemonV2PalparkareaVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
