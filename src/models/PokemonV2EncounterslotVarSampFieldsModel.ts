import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterslotVarSampFieldsModelBase } from "./PokemonV2EncounterslotVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterslotVarSampFieldsModel */
export interface PokemonV2EncounterslotVarSampFieldsModelType extends Instance<typeof PokemonV2EncounterslotVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterslotVarSampFieldsModel */
export { selectFromPokemonV2EncounterslotVarSampFields, pokemonV2EncounterslotVarSampFieldsModelPrimitives, PokemonV2EncounterslotVarSampFieldsModelSelector } from "./PokemonV2EncounterslotVarSampFieldsModel.base"

/**
 * PokemonV2EncounterslotVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2EncounterslotVarSampFieldsModel = PokemonV2EncounterslotVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
