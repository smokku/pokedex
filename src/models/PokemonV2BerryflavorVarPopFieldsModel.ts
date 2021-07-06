import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavorVarPopFieldsModelBase } from "./PokemonV2BerryflavorVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavorVarPopFieldsModel */
export interface PokemonV2BerryflavorVarPopFieldsModelType extends Instance<typeof PokemonV2BerryflavorVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavorVarPopFieldsModel */
export { selectFromPokemonV2BerryflavorVarPopFields, pokemonV2BerryflavorVarPopFieldsModelPrimitives, PokemonV2BerryflavorVarPopFieldsModelSelector } from "./PokemonV2BerryflavorVarPopFieldsModel.base"

/**
 * PokemonV2BerryflavorVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2BerryflavorVarPopFieldsModel = PokemonV2BerryflavorVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
