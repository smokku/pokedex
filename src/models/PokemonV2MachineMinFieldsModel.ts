import { Instance } from "mobx-state-tree"
import { PokemonV2MachineMinFieldsModelBase } from "./PokemonV2MachineMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MachineMinFieldsModel */
export interface PokemonV2MachineMinFieldsModelType extends Instance<typeof PokemonV2MachineMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MachineMinFieldsModel */
export { selectFromPokemonV2MachineMinFields, pokemonV2MachineMinFieldsModelPrimitives, PokemonV2MachineMinFieldsModelSelector } from "./PokemonV2MachineMinFieldsModel.base"

/**
 * PokemonV2MachineMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2MachineMinFieldsModel = PokemonV2MachineMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
