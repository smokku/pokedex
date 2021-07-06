import { Instance } from "mobx-state-tree"
import { PokemonV2BerryfirmnessVarPopFieldsModelBase } from "./PokemonV2BerryfirmnessVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryfirmnessVarPopFieldsModel */
export interface PokemonV2BerryfirmnessVarPopFieldsModelType extends Instance<typeof PokemonV2BerryfirmnessVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryfirmnessVarPopFieldsModel */
export { selectFromPokemonV2BerryfirmnessVarPopFields, pokemonV2BerryfirmnessVarPopFieldsModelPrimitives, PokemonV2BerryfirmnessVarPopFieldsModelSelector } from "./PokemonV2BerryfirmnessVarPopFieldsModel.base"

/**
 * PokemonV2BerryfirmnessVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2BerryfirmnessVarPopFieldsModel = PokemonV2BerryfirmnessVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
