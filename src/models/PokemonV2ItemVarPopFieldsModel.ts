import { Instance } from "mobx-state-tree"
import { PokemonV2ItemVarPopFieldsModelBase } from "./PokemonV2ItemVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemVarPopFieldsModel */
export interface PokemonV2ItemVarPopFieldsModelType extends Instance<typeof PokemonV2ItemVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemVarPopFieldsModel */
export { selectFromPokemonV2ItemVarPopFields, pokemonV2ItemVarPopFieldsModelPrimitives, PokemonV2ItemVarPopFieldsModelSelector } from "./PokemonV2ItemVarPopFieldsModel.base"

/**
 * PokemonV2ItemVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2ItemVarPopFieldsModel = PokemonV2ItemVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
