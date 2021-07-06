import { Instance } from "mobx-state-tree"
import { PokemonV2ItemspritesVarPopFieldsModelBase } from "./PokemonV2ItemspritesVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemspritesVarPopFieldsModel */
export interface PokemonV2ItemspritesVarPopFieldsModelType extends Instance<typeof PokemonV2ItemspritesVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemspritesVarPopFieldsModel */
export { selectFromPokemonV2ItemspritesVarPopFields, pokemonV2ItemspritesVarPopFieldsModelPrimitives, PokemonV2ItemspritesVarPopFieldsModelSelector } from "./PokemonV2ItemspritesVarPopFieldsModel.base"

/**
 * PokemonV2ItemspritesVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2ItemspritesVarPopFieldsModel = PokemonV2ItemspritesVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
