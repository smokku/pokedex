import { Instance } from "mobx-state-tree"
import { PokemonV2TypeefficacyMinFieldsModelBase } from "./PokemonV2TypeefficacyMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypeefficacyMinFieldsModel */
export interface PokemonV2TypeefficacyMinFieldsModelType extends Instance<typeof PokemonV2TypeefficacyMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypeefficacyMinFieldsModel */
export { selectFromPokemonV2TypeefficacyMinFields, pokemonV2TypeefficacyMinFieldsModelPrimitives, PokemonV2TypeefficacyMinFieldsModelSelector } from "./PokemonV2TypeefficacyMinFieldsModel.base"

/**
 * PokemonV2TypeefficacyMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2TypeefficacyMinFieldsModel = PokemonV2TypeefficacyMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
