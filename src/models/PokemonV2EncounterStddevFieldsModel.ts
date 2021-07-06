import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterStddevFieldsModelBase } from "./PokemonV2EncounterStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterStddevFieldsModel */
export interface PokemonV2EncounterStddevFieldsModelType extends Instance<typeof PokemonV2EncounterStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterStddevFieldsModel */
export { selectFromPokemonV2EncounterStddevFields, pokemonV2EncounterStddevFieldsModelPrimitives, PokemonV2EncounterStddevFieldsModelSelector } from "./PokemonV2EncounterStddevFieldsModel.base"

/**
 * PokemonV2EncounterStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2EncounterStddevFieldsModel = PokemonV2EncounterStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
