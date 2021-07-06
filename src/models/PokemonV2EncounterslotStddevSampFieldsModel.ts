import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterslotStddevSampFieldsModelBase } from "./PokemonV2EncounterslotStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterslotStddevSampFieldsModel */
export interface PokemonV2EncounterslotStddevSampFieldsModelType extends Instance<typeof PokemonV2EncounterslotStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterslotStddevSampFieldsModel */
export { selectFromPokemonV2EncounterslotStddevSampFields, pokemonV2EncounterslotStddevSampFieldsModelPrimitives, PokemonV2EncounterslotStddevSampFieldsModelSelector } from "./PokemonV2EncounterslotStddevSampFieldsModel.base"

/**
 * PokemonV2EncounterslotStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2EncounterslotStddevSampFieldsModel = PokemonV2EncounterslotStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
