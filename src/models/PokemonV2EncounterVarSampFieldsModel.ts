import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterVarSampFieldsModelBase } from "./PokemonV2EncounterVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterVarSampFieldsModel */
export interface PokemonV2EncounterVarSampFieldsModelType extends Instance<typeof PokemonV2EncounterVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterVarSampFieldsModel */
export { selectFromPokemonV2EncounterVarSampFields, pokemonV2EncounterVarSampFieldsModelPrimitives, PokemonV2EncounterVarSampFieldsModelSelector } from "./PokemonV2EncounterVarSampFieldsModel.base"

/**
 * PokemonV2EncounterVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2EncounterVarSampFieldsModel = PokemonV2EncounterVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
