import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributeVarPopFieldsModelBase } from "./PokemonV2ItemattributeVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributeVarPopFieldsModel */
export interface PokemonV2ItemattributeVarPopFieldsModelType extends Instance<typeof PokemonV2ItemattributeVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributeVarPopFieldsModel */
export { selectFromPokemonV2ItemattributeVarPopFields, pokemonV2ItemattributeVarPopFieldsModelPrimitives, PokemonV2ItemattributeVarPopFieldsModelSelector } from "./PokemonV2ItemattributeVarPopFieldsModel.base"

/**
 * PokemonV2ItemattributeVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2ItemattributeVarPopFieldsModel = PokemonV2ItemattributeVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
