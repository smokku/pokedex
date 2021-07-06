import { Instance } from "mobx-state-tree"
import { PokemonV2TypeefficacyStddevFieldsModelBase } from "./PokemonV2TypeefficacyStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypeefficacyStddevFieldsModel */
export interface PokemonV2TypeefficacyStddevFieldsModelType extends Instance<typeof PokemonV2TypeefficacyStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypeefficacyStddevFieldsModel */
export { selectFromPokemonV2TypeefficacyStddevFields, pokemonV2TypeefficacyStddevFieldsModelPrimitives, PokemonV2TypeefficacyStddevFieldsModelSelector } from "./PokemonV2TypeefficacyStddevFieldsModel.base"

/**
 * PokemonV2TypeefficacyStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2TypeefficacyStddevFieldsModel = PokemonV2TypeefficacyStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
