import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionnameStddevSampFieldsModelBase } from "./PokemonV2EncounterconditionnameStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionnameStddevSampFieldsModel */
export interface PokemonV2EncounterconditionnameStddevSampFieldsModelType extends Instance<typeof PokemonV2EncounterconditionnameStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionnameStddevSampFieldsModel */
export { selectFromPokemonV2EncounterconditionnameStddevSampFields, pokemonV2EncounterconditionnameStddevSampFieldsModelPrimitives, PokemonV2EncounterconditionnameStddevSampFieldsModelSelector } from "./PokemonV2EncounterconditionnameStddevSampFieldsModel.base"

/**
 * PokemonV2EncounterconditionnameStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2EncounterconditionnameStddevSampFieldsModel = PokemonV2EncounterconditionnameStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
