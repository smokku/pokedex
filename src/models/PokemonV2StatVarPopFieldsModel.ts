import { Instance } from "mobx-state-tree"
import { PokemonV2StatVarPopFieldsModelBase } from "./PokemonV2StatVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2StatVarPopFieldsModel */
export interface PokemonV2StatVarPopFieldsModelType extends Instance<typeof PokemonV2StatVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2StatVarPopFieldsModel */
export { selectFromPokemonV2StatVarPopFields, pokemonV2StatVarPopFieldsModelPrimitives, PokemonV2StatVarPopFieldsModelSelector } from "./PokemonV2StatVarPopFieldsModel.base"

/**
 * PokemonV2StatVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2StatVarPopFieldsModel = PokemonV2StatVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
