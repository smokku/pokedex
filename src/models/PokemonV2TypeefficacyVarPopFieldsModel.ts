import { Instance } from "mobx-state-tree"
import { PokemonV2TypeefficacyVarPopFieldsModelBase } from "./PokemonV2TypeefficacyVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypeefficacyVarPopFieldsModel */
export interface PokemonV2TypeefficacyVarPopFieldsModelType extends Instance<typeof PokemonV2TypeefficacyVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypeefficacyVarPopFieldsModel */
export { selectFromPokemonV2TypeefficacyVarPopFields, pokemonV2TypeefficacyVarPopFieldsModelPrimitives, PokemonV2TypeefficacyVarPopFieldsModelSelector } from "./PokemonV2TypeefficacyVarPopFieldsModel.base"

/**
 * PokemonV2TypeefficacyVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2TypeefficacyVarPopFieldsModel = PokemonV2TypeefficacyVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
