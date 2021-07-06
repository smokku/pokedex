import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetdescriptionVarPopFieldsModelBase } from "./PokemonV2MovetargetdescriptionVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetdescriptionVarPopFieldsModel */
export interface PokemonV2MovetargetdescriptionVarPopFieldsModelType extends Instance<typeof PokemonV2MovetargetdescriptionVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetdescriptionVarPopFieldsModel */
export { selectFromPokemonV2MovetargetdescriptionVarPopFields, pokemonV2MovetargetdescriptionVarPopFieldsModelPrimitives, PokemonV2MovetargetdescriptionVarPopFieldsModelSelector } from "./PokemonV2MovetargetdescriptionVarPopFieldsModel.base"

/**
 * PokemonV2MovetargetdescriptionVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2MovetargetdescriptionVarPopFieldsModel = PokemonV2MovetargetdescriptionVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
