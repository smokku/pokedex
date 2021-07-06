import { Instance } from "mobx-state-tree"
import { PokemonV2NaturepokeathlonstatStddevSampFieldsModelBase } from "./PokemonV2NaturepokeathlonstatStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NaturepokeathlonstatStddevSampFieldsModel */
export interface PokemonV2NaturepokeathlonstatStddevSampFieldsModelType extends Instance<typeof PokemonV2NaturepokeathlonstatStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturepokeathlonstatStddevSampFieldsModel */
export { selectFromPokemonV2NaturepokeathlonstatStddevSampFields, pokemonV2NaturepokeathlonstatStddevSampFieldsModelPrimitives, PokemonV2NaturepokeathlonstatStddevSampFieldsModelSelector } from "./PokemonV2NaturepokeathlonstatStddevSampFieldsModel.base"

/**
 * PokemonV2NaturepokeathlonstatStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2NaturepokeathlonstatStddevSampFieldsModel = PokemonV2NaturepokeathlonstatStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
