import { Instance } from "mobx-state-tree"
import { PokemonV2MachineVarSampFieldsModelBase } from "./PokemonV2MachineVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MachineVarSampFieldsModel */
export interface PokemonV2MachineVarSampFieldsModelType extends Instance<typeof PokemonV2MachineVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MachineVarSampFieldsModel */
export { selectFromPokemonV2MachineVarSampFields, pokemonV2MachineVarSampFieldsModelPrimitives, PokemonV2MachineVarSampFieldsModelSelector } from "./PokemonV2MachineVarSampFieldsModel.base"

/**
 * PokemonV2MachineVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MachineVarSampFieldsModel = PokemonV2MachineVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
