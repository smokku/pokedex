import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutiontriggerVarSampFieldsModelBase } from "./PokemonV2EvolutiontriggerVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutiontriggerVarSampFieldsModel */
export interface PokemonV2EvolutiontriggerVarSampFieldsModelType extends Instance<typeof PokemonV2EvolutiontriggerVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutiontriggerVarSampFieldsModel */
export { selectFromPokemonV2EvolutiontriggerVarSampFields, pokemonV2EvolutiontriggerVarSampFieldsModelPrimitives, PokemonV2EvolutiontriggerVarSampFieldsModelSelector } from "./PokemonV2EvolutiontriggerVarSampFieldsModel.base"

/**
 * PokemonV2EvolutiontriggerVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2EvolutiontriggerVarSampFieldsModel = PokemonV2EvolutiontriggerVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
