import { Instance } from "mobx-state-tree"
import { PokemonV2TypeefficacyAvgFieldsModelBase } from "./PokemonV2TypeefficacyAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypeefficacyAvgFieldsModel */
export interface PokemonV2TypeefficacyAvgFieldsModelType extends Instance<typeof PokemonV2TypeefficacyAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypeefficacyAvgFieldsModel */
export { selectFromPokemonV2TypeefficacyAvgFields, pokemonV2TypeefficacyAvgFieldsModelPrimitives, PokemonV2TypeefficacyAvgFieldsModelSelector } from "./PokemonV2TypeefficacyAvgFieldsModel.base"

/**
 * PokemonV2TypeefficacyAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2TypeefficacyAvgFieldsModel = PokemonV2TypeefficacyAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
