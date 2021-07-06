import { Instance } from "mobx-state-tree"
import { PokemonV2TypeefficacyStddevPopFieldsModelBase } from "./PokemonV2TypeefficacyStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypeefficacyStddevPopFieldsModel */
export interface PokemonV2TypeefficacyStddevPopFieldsModelType extends Instance<typeof PokemonV2TypeefficacyStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypeefficacyStddevPopFieldsModel */
export { selectFromPokemonV2TypeefficacyStddevPopFields, pokemonV2TypeefficacyStddevPopFieldsModelPrimitives, PokemonV2TypeefficacyStddevPopFieldsModelSelector } from "./PokemonV2TypeefficacyStddevPopFieldsModel.base"

/**
 * PokemonV2TypeefficacyStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2TypeefficacyStddevPopFieldsModel = PokemonV2TypeefficacyStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
