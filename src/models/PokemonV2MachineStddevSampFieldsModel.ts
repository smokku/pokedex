import { Instance } from "mobx-state-tree"
import { PokemonV2MachineStddevSampFieldsModelBase } from "./PokemonV2MachineStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MachineStddevSampFieldsModel */
export interface PokemonV2MachineStddevSampFieldsModelType extends Instance<typeof PokemonV2MachineStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MachineStddevSampFieldsModel */
export { selectFromPokemonV2MachineStddevSampFields, pokemonV2MachineStddevSampFieldsModelPrimitives, PokemonV2MachineStddevSampFieldsModelSelector } from "./PokemonV2MachineStddevSampFieldsModel.base"

/**
 * PokemonV2MachineStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MachineStddevSampFieldsModel = PokemonV2MachineStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
