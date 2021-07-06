import { Instance } from "mobx-state-tree"
import { PokemonV2TypeefficacyVarianceFieldsModelBase } from "./PokemonV2TypeefficacyVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypeefficacyVarianceFieldsModel */
export interface PokemonV2TypeefficacyVarianceFieldsModelType extends Instance<typeof PokemonV2TypeefficacyVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypeefficacyVarianceFieldsModel */
export { selectFromPokemonV2TypeefficacyVarianceFields, pokemonV2TypeefficacyVarianceFieldsModelPrimitives, PokemonV2TypeefficacyVarianceFieldsModelSelector } from "./PokemonV2TypeefficacyVarianceFieldsModel.base"

/**
 * PokemonV2TypeefficacyVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2TypeefficacyVarianceFieldsModel = PokemonV2TypeefficacyVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
