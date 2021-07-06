import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributemapVarPopFieldsModelBase } from "./PokemonV2ItemattributemapVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributemapVarPopFieldsModel */
export interface PokemonV2ItemattributemapVarPopFieldsModelType extends Instance<typeof PokemonV2ItemattributemapVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributemapVarPopFieldsModel */
export { selectFromPokemonV2ItemattributemapVarPopFields, pokemonV2ItemattributemapVarPopFieldsModelPrimitives, PokemonV2ItemattributemapVarPopFieldsModelSelector } from "./PokemonV2ItemattributemapVarPopFieldsModel.base"

/**
 * PokemonV2ItemattributemapVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2ItemattributemapVarPopFieldsModel = PokemonV2ItemattributemapVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
