import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflavortextVarPopFieldsModelBase } from "./PokemonV2ItemflavortextVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflavortextVarPopFieldsModel */
export interface PokemonV2ItemflavortextVarPopFieldsModelType extends Instance<typeof PokemonV2ItemflavortextVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflavortextVarPopFieldsModel */
export { selectFromPokemonV2ItemflavortextVarPopFields, pokemonV2ItemflavortextVarPopFieldsModelPrimitives, PokemonV2ItemflavortextVarPopFieldsModelSelector } from "./PokemonV2ItemflavortextVarPopFieldsModel.base"

/**
 * PokemonV2ItemflavortextVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2ItemflavortextVarPopFieldsModel = PokemonV2ItemflavortextVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
