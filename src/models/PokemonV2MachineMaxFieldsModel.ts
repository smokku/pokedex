import { Instance } from "mobx-state-tree"
import { PokemonV2MachineMaxFieldsModelBase } from "./PokemonV2MachineMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MachineMaxFieldsModel */
export interface PokemonV2MachineMaxFieldsModelType extends Instance<typeof PokemonV2MachineMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MachineMaxFieldsModel */
export { selectFromPokemonV2MachineMaxFields, pokemonV2MachineMaxFieldsModelPrimitives, PokemonV2MachineMaxFieldsModelSelector } from "./PokemonV2MachineMaxFieldsModel.base"

/**
 * PokemonV2MachineMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2MachineMaxFieldsModel = PokemonV2MachineMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
