import { Instance } from "mobx-state-tree"
import { PokemonV2MachineStddevFieldsModelBase } from "./PokemonV2MachineStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MachineStddevFieldsModel */
export interface PokemonV2MachineStddevFieldsModelType extends Instance<typeof PokemonV2MachineStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MachineStddevFieldsModel */
export { selectFromPokemonV2MachineStddevFields, pokemonV2MachineStddevFieldsModelPrimitives, PokemonV2MachineStddevFieldsModelSelector } from "./PokemonV2MachineStddevFieldsModel.base"

/**
 * PokemonV2MachineStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2MachineStddevFieldsModel = PokemonV2MachineStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
