import { Instance } from "mobx-state-tree"
import { PokemonV2TypeefficacyStddevSampFieldsModelBase } from "./PokemonV2TypeefficacyStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypeefficacyStddevSampFieldsModel */
export interface PokemonV2TypeefficacyStddevSampFieldsModelType extends Instance<typeof PokemonV2TypeefficacyStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypeefficacyStddevSampFieldsModel */
export { selectFromPokemonV2TypeefficacyStddevSampFields, pokemonV2TypeefficacyStddevSampFieldsModelPrimitives, PokemonV2TypeefficacyStddevSampFieldsModelSelector } from "./PokemonV2TypeefficacyStddevSampFieldsModel.base"

/**
 * PokemonV2TypeefficacyStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2TypeefficacyStddevSampFieldsModel = PokemonV2TypeefficacyStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
