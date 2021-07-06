import { Instance } from "mobx-state-tree"
import { PokemonV2EgggroupnameVarPopFieldsModelBase } from "./PokemonV2EgggroupnameVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EgggroupnameVarPopFieldsModel */
export interface PokemonV2EgggroupnameVarPopFieldsModelType extends Instance<typeof PokemonV2EgggroupnameVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EgggroupnameVarPopFieldsModel */
export { selectFromPokemonV2EgggroupnameVarPopFields, pokemonV2EgggroupnameVarPopFieldsModelPrimitives, PokemonV2EgggroupnameVarPopFieldsModelSelector } from "./PokemonV2EgggroupnameVarPopFieldsModel.base"

/**
 * PokemonV2EgggroupnameVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2EgggroupnameVarPopFieldsModel = PokemonV2EgggroupnameVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
