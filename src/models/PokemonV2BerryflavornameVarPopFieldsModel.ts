import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavornameVarPopFieldsModelBase } from "./PokemonV2BerryflavornameVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavornameVarPopFieldsModel */
export interface PokemonV2BerryflavornameVarPopFieldsModelType extends Instance<typeof PokemonV2BerryflavornameVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavornameVarPopFieldsModel */
export { selectFromPokemonV2BerryflavornameVarPopFields, pokemonV2BerryflavornameVarPopFieldsModelPrimitives, PokemonV2BerryflavornameVarPopFieldsModelSelector } from "./PokemonV2BerryflavornameVarPopFieldsModel.base"

/**
 * PokemonV2BerryflavornameVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2BerryflavornameVarPopFieldsModel = PokemonV2BerryflavornameVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
