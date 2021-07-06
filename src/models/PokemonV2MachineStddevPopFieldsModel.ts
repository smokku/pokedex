import { Instance } from "mobx-state-tree"
import { PokemonV2MachineStddevPopFieldsModelBase } from "./PokemonV2MachineStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MachineStddevPopFieldsModel */
export interface PokemonV2MachineStddevPopFieldsModelType extends Instance<typeof PokemonV2MachineStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MachineStddevPopFieldsModel */
export { selectFromPokemonV2MachineStddevPopFields, pokemonV2MachineStddevPopFieldsModelPrimitives, PokemonV2MachineStddevPopFieldsModelSelector } from "./PokemonV2MachineStddevPopFieldsModel.base"

/**
 * PokemonV2MachineStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2MachineStddevPopFieldsModel = PokemonV2MachineStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
