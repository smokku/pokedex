import { Instance } from "mobx-state-tree"
import { PokemonV2MachineAggregateFieldsModelBase } from "./PokemonV2MachineAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MachineAggregateFieldsModel */
export interface PokemonV2MachineAggregateFieldsModelType extends Instance<typeof PokemonV2MachineAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MachineAggregateFieldsModel */
export { selectFromPokemonV2MachineAggregateFields, pokemonV2MachineAggregateFieldsModelPrimitives, PokemonV2MachineAggregateFieldsModelSelector } from "./PokemonV2MachineAggregateFieldsModel.base"

/**
 * PokemonV2MachineAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_machine"
 */
export const PokemonV2MachineAggregateFieldsModel = PokemonV2MachineAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
