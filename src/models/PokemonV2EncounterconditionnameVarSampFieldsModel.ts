import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionnameVarSampFieldsModelBase } from "./PokemonV2EncounterconditionnameVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionnameVarSampFieldsModel */
export interface PokemonV2EncounterconditionnameVarSampFieldsModelType extends Instance<typeof PokemonV2EncounterconditionnameVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionnameVarSampFieldsModel */
export { selectFromPokemonV2EncounterconditionnameVarSampFields, pokemonV2EncounterconditionnameVarSampFieldsModelPrimitives, PokemonV2EncounterconditionnameVarSampFieldsModelSelector } from "./PokemonV2EncounterconditionnameVarSampFieldsModel.base"

/**
 * PokemonV2EncounterconditionnameVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2EncounterconditionnameVarSampFieldsModel = PokemonV2EncounterconditionnameVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
