import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetacategoryVarPopFieldsModelBase } from "./PokemonV2MovemetacategoryVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetacategoryVarPopFieldsModel */
export interface PokemonV2MovemetacategoryVarPopFieldsModelType extends Instance<typeof PokemonV2MovemetacategoryVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetacategoryVarPopFieldsModel */
export { selectFromPokemonV2MovemetacategoryVarPopFields, pokemonV2MovemetacategoryVarPopFieldsModelPrimitives, PokemonV2MovemetacategoryVarPopFieldsModelSelector } from "./PokemonV2MovemetacategoryVarPopFieldsModel.base"

/**
 * PokemonV2MovemetacategoryVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2MovemetacategoryVarPopFieldsModel = PokemonV2MovemetacategoryVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
