import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionnameStddevFieldsModelBase } from "./PokemonV2EncounterconditionnameStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionnameStddevFieldsModel */
export interface PokemonV2EncounterconditionnameStddevFieldsModelType extends Instance<typeof PokemonV2EncounterconditionnameStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionnameStddevFieldsModel */
export { selectFromPokemonV2EncounterconditionnameStddevFields, pokemonV2EncounterconditionnameStddevFieldsModelPrimitives, PokemonV2EncounterconditionnameStddevFieldsModelSelector } from "./PokemonV2EncounterconditionnameStddevFieldsModel.base"

/**
 * PokemonV2EncounterconditionnameStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2EncounterconditionnameStddevFieldsModel = PokemonV2EncounterconditionnameStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
