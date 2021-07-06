import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterStddevSampFieldsModelBase } from "./PokemonV2EncounterStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterStddevSampFieldsModel */
export interface PokemonV2EncounterStddevSampFieldsModelType extends Instance<typeof PokemonV2EncounterStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterStddevSampFieldsModel */
export { selectFromPokemonV2EncounterStddevSampFields, pokemonV2EncounterStddevSampFieldsModelPrimitives, PokemonV2EncounterStddevSampFieldsModelSelector } from "./PokemonV2EncounterStddevSampFieldsModel.base"

/**
 * PokemonV2EncounterStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2EncounterStddevSampFieldsModel = PokemonV2EncounterStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
