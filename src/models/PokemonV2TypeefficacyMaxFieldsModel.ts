import { Instance } from "mobx-state-tree"
import { PokemonV2TypeefficacyMaxFieldsModelBase } from "./PokemonV2TypeefficacyMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypeefficacyMaxFieldsModel */
export interface PokemonV2TypeefficacyMaxFieldsModelType extends Instance<typeof PokemonV2TypeefficacyMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypeefficacyMaxFieldsModel */
export { selectFromPokemonV2TypeefficacyMaxFields, pokemonV2TypeefficacyMaxFieldsModelPrimitives, PokemonV2TypeefficacyMaxFieldsModelSelector } from "./PokemonV2TypeefficacyMaxFieldsModel.base"

/**
 * PokemonV2TypeefficacyMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2TypeefficacyMaxFieldsModel = PokemonV2TypeefficacyMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
