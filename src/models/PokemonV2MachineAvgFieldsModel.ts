import { Instance } from "mobx-state-tree"
import { PokemonV2MachineAvgFieldsModelBase } from "./PokemonV2MachineAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MachineAvgFieldsModel */
export interface PokemonV2MachineAvgFieldsModelType extends Instance<typeof PokemonV2MachineAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MachineAvgFieldsModel */
export { selectFromPokemonV2MachineAvgFields, pokemonV2MachineAvgFieldsModelPrimitives, PokemonV2MachineAvgFieldsModelSelector } from "./PokemonV2MachineAvgFieldsModel.base"

/**
 * PokemonV2MachineAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2MachineAvgFieldsModel = PokemonV2MachineAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
