import { Instance } from "mobx-state-tree"
import { PokemonV2BerryVarPopFieldsModelBase } from "./PokemonV2BerryVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryVarPopFieldsModel */
export interface PokemonV2BerryVarPopFieldsModelType extends Instance<typeof PokemonV2BerryVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryVarPopFieldsModel */
export { selectFromPokemonV2BerryVarPopFields, pokemonV2BerryVarPopFieldsModelPrimitives, PokemonV2BerryVarPopFieldsModelSelector } from "./PokemonV2BerryVarPopFieldsModel.base"

/**
 * PokemonV2BerryVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2BerryVarPopFieldsModel = PokemonV2BerryVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
