import { Instance } from "mobx-state-tree"
import { PokemonV2NatureVarPopFieldsModelBase } from "./PokemonV2NatureVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NatureVarPopFieldsModel */
export interface PokemonV2NatureVarPopFieldsModelType extends Instance<typeof PokemonV2NatureVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NatureVarPopFieldsModel */
export { selectFromPokemonV2NatureVarPopFields, pokemonV2NatureVarPopFieldsModelPrimitives, PokemonV2NatureVarPopFieldsModelSelector } from "./PokemonV2NatureVarPopFieldsModel.base"

/**
 * PokemonV2NatureVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2NatureVarPopFieldsModel = PokemonV2NatureVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
