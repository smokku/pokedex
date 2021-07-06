import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterslotStddevFieldsModelBase } from "./PokemonV2EncounterslotStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterslotStddevFieldsModel */
export interface PokemonV2EncounterslotStddevFieldsModelType extends Instance<typeof PokemonV2EncounterslotStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterslotStddevFieldsModel */
export { selectFromPokemonV2EncounterslotStddevFields, pokemonV2EncounterslotStddevFieldsModelPrimitives, PokemonV2EncounterslotStddevFieldsModelSelector } from "./PokemonV2EncounterslotStddevFieldsModel.base"

/**
 * PokemonV2EncounterslotStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2EncounterslotStddevFieldsModel = PokemonV2EncounterslotStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
