import { Instance } from "mobx-state-tree"
import { PokemonV2EncountermethodnameStddevSampFieldsModelBase } from "./PokemonV2EncountermethodnameStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncountermethodnameStddevSampFieldsModel */
export interface PokemonV2EncountermethodnameStddevSampFieldsModelType extends Instance<typeof PokemonV2EncountermethodnameStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncountermethodnameStddevSampFieldsModel */
export { selectFromPokemonV2EncountermethodnameStddevSampFields, pokemonV2EncountermethodnameStddevSampFieldsModelPrimitives, PokemonV2EncountermethodnameStddevSampFieldsModelSelector } from "./PokemonV2EncountermethodnameStddevSampFieldsModel.base"

/**
 * PokemonV2EncountermethodnameStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2EncountermethodnameStddevSampFieldsModel = PokemonV2EncountermethodnameStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
