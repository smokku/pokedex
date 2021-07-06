import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionnameStddevPopFieldsModelBase } from "./PokemonV2EncounterconditionnameStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionnameStddevPopFieldsModel */
export interface PokemonV2EncounterconditionnameStddevPopFieldsModelType extends Instance<typeof PokemonV2EncounterconditionnameStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionnameStddevPopFieldsModel */
export { selectFromPokemonV2EncounterconditionnameStddevPopFields, pokemonV2EncounterconditionnameStddevPopFieldsModelPrimitives, PokemonV2EncounterconditionnameStddevPopFieldsModelSelector } from "./PokemonV2EncounterconditionnameStddevPopFieldsModel.base"

/**
 * PokemonV2EncounterconditionnameStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2EncounterconditionnameStddevPopFieldsModel = PokemonV2EncounterconditionnameStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
