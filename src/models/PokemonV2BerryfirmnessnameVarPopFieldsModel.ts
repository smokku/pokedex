import { Instance } from "mobx-state-tree"
import { PokemonV2BerryfirmnessnameVarPopFieldsModelBase } from "./PokemonV2BerryfirmnessnameVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryfirmnessnameVarPopFieldsModel */
export interface PokemonV2BerryfirmnessnameVarPopFieldsModelType extends Instance<typeof PokemonV2BerryfirmnessnameVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryfirmnessnameVarPopFieldsModel */
export { selectFromPokemonV2BerryfirmnessnameVarPopFields, pokemonV2BerryfirmnessnameVarPopFieldsModelPrimitives, PokemonV2BerryfirmnessnameVarPopFieldsModelSelector } from "./PokemonV2BerryfirmnessnameVarPopFieldsModel.base"

/**
 * PokemonV2BerryfirmnessnameVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2BerryfirmnessnameVarPopFieldsModel = PokemonV2BerryfirmnessnameVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
