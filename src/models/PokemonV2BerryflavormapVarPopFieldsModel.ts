import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavormapVarPopFieldsModelBase } from "./PokemonV2BerryflavormapVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavormapVarPopFieldsModel */
export interface PokemonV2BerryflavormapVarPopFieldsModelType extends Instance<typeof PokemonV2BerryflavormapVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavormapVarPopFieldsModel */
export { selectFromPokemonV2BerryflavormapVarPopFields, pokemonV2BerryflavormapVarPopFieldsModelPrimitives, PokemonV2BerryflavormapVarPopFieldsModelSelector } from "./PokemonV2BerryflavormapVarPopFieldsModel.base"

/**
 * PokemonV2BerryflavormapVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2BerryflavormapVarPopFieldsModel = PokemonV2BerryflavormapVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
