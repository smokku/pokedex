import { Instance } from "mobx-state-tree"
import { PokemonV2ItempocketVarPopFieldsModelBase } from "./PokemonV2ItempocketVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItempocketVarPopFieldsModel */
export interface PokemonV2ItempocketVarPopFieldsModelType extends Instance<typeof PokemonV2ItempocketVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItempocketVarPopFieldsModel */
export { selectFromPokemonV2ItempocketVarPopFields, pokemonV2ItempocketVarPopFieldsModelPrimitives, PokemonV2ItempocketVarPopFieldsModelSelector } from "./PokemonV2ItempocketVarPopFieldsModel.base"

/**
 * PokemonV2ItempocketVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2ItempocketVarPopFieldsModel = PokemonV2ItempocketVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
