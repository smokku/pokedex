import { Instance } from "mobx-state-tree"
import { PokemonV2EgggroupVarPopFieldsModelBase } from "./PokemonV2EgggroupVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EgggroupVarPopFieldsModel */
export interface PokemonV2EgggroupVarPopFieldsModelType extends Instance<typeof PokemonV2EgggroupVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EgggroupVarPopFieldsModel */
export { selectFromPokemonV2EgggroupVarPopFields, pokemonV2EgggroupVarPopFieldsModelPrimitives, PokemonV2EgggroupVarPopFieldsModelSelector } from "./PokemonV2EgggroupVarPopFieldsModel.base"

/**
 * PokemonV2EgggroupVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2EgggroupVarPopFieldsModel = PokemonV2EgggroupVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
