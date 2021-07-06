import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterStddevPopFieldsModelBase } from "./PokemonV2EncounterStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterStddevPopFieldsModel */
export interface PokemonV2EncounterStddevPopFieldsModelType extends Instance<typeof PokemonV2EncounterStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterStddevPopFieldsModel */
export { selectFromPokemonV2EncounterStddevPopFields, pokemonV2EncounterStddevPopFieldsModelPrimitives, PokemonV2EncounterStddevPopFieldsModelSelector } from "./PokemonV2EncounterStddevPopFieldsModel.base"

/**
 * PokemonV2EncounterStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2EncounterStddevPopFieldsModel = PokemonV2EncounterStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
