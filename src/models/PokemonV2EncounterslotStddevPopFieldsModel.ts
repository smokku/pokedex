import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterslotStddevPopFieldsModelBase } from "./PokemonV2EncounterslotStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterslotStddevPopFieldsModel */
export interface PokemonV2EncounterslotStddevPopFieldsModelType extends Instance<typeof PokemonV2EncounterslotStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterslotStddevPopFieldsModel */
export { selectFromPokemonV2EncounterslotStddevPopFields, pokemonV2EncounterslotStddevPopFieldsModelPrimitives, PokemonV2EncounterslotStddevPopFieldsModelSelector } from "./PokemonV2EncounterslotStddevPopFieldsModel.base"

/**
 * PokemonV2EncounterslotStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2EncounterslotStddevPopFieldsModel = PokemonV2EncounterslotStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
