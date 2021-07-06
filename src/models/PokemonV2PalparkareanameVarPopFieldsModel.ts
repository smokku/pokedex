import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkareanameVarPopFieldsModelBase } from "./PokemonV2PalparkareanameVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkareanameVarPopFieldsModel */
export interface PokemonV2PalparkareanameVarPopFieldsModelType extends Instance<typeof PokemonV2PalparkareanameVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkareanameVarPopFieldsModel */
export { selectFromPokemonV2PalparkareanameVarPopFields, pokemonV2PalparkareanameVarPopFieldsModelPrimitives, PokemonV2PalparkareanameVarPopFieldsModelSelector } from "./PokemonV2PalparkareanameVarPopFieldsModel.base"

/**
 * PokemonV2PalparkareanameVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PalparkareanameVarPopFieldsModel = PokemonV2PalparkareanameVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
