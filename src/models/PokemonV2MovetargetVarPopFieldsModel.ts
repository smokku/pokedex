import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetVarPopFieldsModelBase } from "./PokemonV2MovetargetVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetVarPopFieldsModel */
export interface PokemonV2MovetargetVarPopFieldsModelType extends Instance<typeof PokemonV2MovetargetVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetVarPopFieldsModel */
export { selectFromPokemonV2MovetargetVarPopFields, pokemonV2MovetargetVarPopFieldsModelPrimitives, PokemonV2MovetargetVarPopFieldsModelSelector } from "./PokemonV2MovetargetVarPopFieldsModel.base"

/**
 * PokemonV2MovetargetVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2MovetargetVarPopFieldsModel = PokemonV2MovetargetVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
